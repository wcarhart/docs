'use strict'

const fs = require('fs')
const path = require('path')
const http = require('http')
const https = require('https')

// ignore these links
var ignore = [
	'http://ow.ly/urTv50zhiP6',
	'https://twitter.com/IBDinvestors/status/1251270480427966466/photo/1',
	'https://twitter.com/jonmccomb980/status/1251150795925417986',
	'https://twitter.com/BurakKadercan/status/1251218635668041728/photo/1',
	'https://youtu.be/UK8HH3_q4yI',
	'https://twitter.com/MKBHD/status/1251215165732913155/photo/1',
	'https://twitter.com/MKBHD/status/1251157091005329410/photo/1',
	'http://localhost:${port}/api/v1/create',
	'http://localhost:${port}/api/v1/run',
	'http://localhost:${port}/api/v1/list',
	'https://github.com/${user}/${repo}/archive/${version}.tar.gz',
	'https://api.twitter.com/1.1/search/tweets.json?q=%23${item:1}&tweet_mode=extended&count=${num}${langtext}',
	'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${item:1}&tweet_mode=extended&count=${num}',
	'https://paper.li/rottersclubx/1309216321?edition_id=03c122d0-6713-11ea-a645-0cc4'
]

// get a list of files in a directory and its subdirectories
function getFiles(dir, allFiles=[]) {
	let entities = fs.readdirSync(dir);
	for (var i in entities) {
		var entity = path.join(dir, entities[i])
		if (fs.statSync(entity).isDirectory()) {
			getFiles(entity, allFiles)
		} else {
			if (entity.endsWith('.md')) {
				allFiles.push(entity)
			}
		}
	}
	return allFiles
}

// find discreet links
function getDiscreetLinks(file) {
	try {
		const data = fs.readFileSync(file, 'utf8')
		let links = data.match(/(https?:\/\/[^\s]+)/g)
		if (links && links.length > 0) {
			links = links.map(s => s.replace('"', '').replace(/\).*$/, '').replace(/\.$/, '').replace(/,$/, ''))
		}
		return links
	} catch (e) {
		console.error(e)
		process.exit(1)
	}
}

// find implicit links in markdown
function getImplicitLinks(file) {
	let app = file.split('/')[1]
	try {
		const data = fs.readFileSync(file, 'utf8')
		let links = data.match(/\[([^\[]+)\](\(.*?\))/gm)
		if (links && links.length > 0) {
			links = links.map(s => {
				let link = s.match(/\[([^\[]+)\]\((.*)\)/)[2]
				if (link.startsWith('http')) {
					return link
				} else {
					if (link.endsWith('.md')) {
						return `https://willcarhart.dev/docs/${app}/#/${link.split('.md')[0]}`
					} else {
						return `https://willcarhart.dev/docs/${app}/#/${link}`
					}
				}
			})
		}
		return links
	} catch (e) {
		console.error(e)
		process.exit(1)
	}
}

// test the validity of a URL
function testLink(url, file) {
	return new Promise((resolve, reject) => {
		if (url.startsWith('https')) {
			try {
				https.get(url, (response) => {
					if (response.statusCode >= 200 && response.statusCode < 400) {
						resolve(`${file}: ${url}`)
					} else {
						reject(`${file}: ${url}`)
					}
				})
			} catch (e) {
				reject(`ERROR: ${url}`)
			}
		} else {
			try {
				http.get(url, (response) => {
					if (response.statusCode >= 200 && response.statusCode < 400) {
						resolve(`${file}: ${url}`)
					} else {
						reject(`${file}: ${url}`)
					}
				})
			} catch (e) {
				reject(`ERROR: ${url}`)
			}
		}
	})
}

// show usage
function usage() {
	console.log('Check links for validity')
	console.log('')
	console.log('node checklinks.js [-h] [-b] DIRECTORY')
	console.log('  -h, --help              Show this menu and exit')
	console.log('  -b, --bad-links-only    Only show links that fail link validation')
	console.log('  -o, --omit-metrics      Don\'t show test metrics')
	console.log('  DIRECTORY               The directory to search for .md files containing links')
}

function main() {
	let exitCode = 0

	// determine CLI usage
	let args = process.argv.slice(2);
	let badLinksOnly = false
	let searchDir = ''
	let omitMetrics = false

	while (args.length > 0) {
		switch (args[0]) {
			case '-b':
			case '--bad-links-only':
				badLinksOnly = true
				break
			case '-h':
			case '--help':
				usage()
				process.exit(exitCode)
			case '-o':
			case '--omit-metrics':
				omitMetrics = true
				break
			default:
				searchDir = args[0]
		}
		args = args.slice(1)
	}

	if (searchDir === '') {
		console.error('err: no search directory provided')
		exitCode = 1

	} else {
		// determine files
		const files = getFiles(searchDir)
		var promises = []
		var linkCount = 0
		for (let i in files) {

			// get all links in file
			var file = files[i]
			var links = []
			var discreetLinks = getDiscreetLinks(file)
			var implicitLinks = getImplicitLinks(file)
			if (discreetLinks) {
				links = links.concat(discreetLinks)
			}
			if (implicitLinks) {
				links = links.concat(implicitLinks)
			}
			links = [...new Set(links)]
			links = links.map(l => l.split(' ')[0])
			links = links.map(l => l.replace('#//', '#/'))
			links = links.filter(l => !(ignore.includes(l)))

			// start promises for sending requests
			for (let j in links) {
				promises.push(testLink(links[j], file))
			}
			linkCount += links.length
		}

		// alert user
		console.log(`Found ${files.length} files and ${linkCount} links total...`)
	}

	// wait for all promises to be fulfilled
	let passed = 0, failed = 0, run = 0
	Promise.allSettled(promises).then(results => {
		for (let k in results) {
			run += 1
			var result = results[k]
			if (result.status === 'fulfilled') {
				passed += 1
				if (!badLinksOnly) {
					console.log('[\x1b[32m✓\x1b[0m]', result.value)
				}
			} else {
				failed += 1
				console.error('[\x1b[31m✗\x1b[0m]', result.reason)
				exitCode = 1
			}
		}
	}).finally(_ => {
		// show metrics
		if (!omitMetrics) {
			let passedPercentage = String(Number(100*(passed/run)).toFixed(3))
			let failedPercentage = String(Number(100*(failed/run)).toFixed(3))
			if (run === 0) {
				passedPercentage = '0'
				failedPercentage = '0'
			}

			if (passedPercentage === '100.000') passedPercentage = '100'
			if (failedPercentage === '100.000') failedPercentage = '100'
			if (passedPercentage === '0.000') passedPercentage = '0'
			if (failedPercentage === '0.000') failedPercentage = '0'
			console.log('')
			console.log('===== METRICS =====')
			console.log(`Found ${passed} valid links (${passedPercentage}%)`)
			console.log(`Found ${failed} invalid links (${failedPercentage}%)`)
			console.log(`Tested ${run} links total`)
		}

		// make sure exit code is correct per links tested
		process.exit(exitCode)
	})
}

main();