'use strict'

const fs = require('fs')
const path = require('path')
const http = require('http')
const https = require('https')
const dns = require('dns')

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
	'https://paper.li/rottersclubx/1309216321?edition_id=03c122d0-6713-11ea-a645-0cc4',
	'https://domain.com/artifacts?id=${artifact}'
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

// see if domain can be resolved
function resolveDomain(hostname, url, file) {
	return new Promise((resolve, reject) => {
		let obj = {'file': `${file}`, 'hostname': `${hostname}`, 'url': `${url}`}
		dns.lookup(hostname, (err, address, family) => {
			if (err) reject(obj)
			resolve(obj)
		})
	})
}

// test the validity of a URL
async function testLink(url, file) {
	return new Promise(async (resolve, reject) => {
		let attempts = 0
		let sleeptime = 1000
		let mutex = false
		let obj = {'file': `${file}`, 'url': `${url}`, 'statusCode': null}
		if (url.startsWith('https')) {
			try {
				while (attempts < 5) {
					let httpsPromise = new Promise(async (good, bad) => {
						https.get(url, async (response) => {
							if (response.statusCode >= 200 && response.statusCode < 400) {
								good(response.statusCode)
							} else {
								bad(response.statusCode)
							}
						})
					})
					await httpsPromise.then(async result => {
						obj.statusCode = result
						resolve(obj)
					}).catch(async error => {
						obj.statusCode = error
						if (error === 429) {
							await setTimeout(() => { ; }, sleeptime)
							attempts += 1
							sleeptime *= 2
						} else {
							reject(obj)
						}
					})
				}
				reject(obj)
			} catch (e) {
				reject(obj)
			}
		} else {
			try {
				http.get(url, (response) => {
					obj.statusCode = response.statusCode
					if (response.statusCode >= 200 && response.statusCode < 400) {
						resolve(obj)
					} else {
						reject(obj)
					}
				})
			} catch (e) {
				reject(obj)
			}
		}
	})
}

// extract the hostname from a URL
function extractHostname(url) {
	let hostname = url
	hostname = hostname.replace(/^https:\/\//, '')
	hostname = hostname.replace(/^http:\/\//, '')
	hostname = hostname.replace(/\/.*$/, '')
	return hostname
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

async function main() {
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
		var domainResolutionPromises = []
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
				domainResolutionPromises.push(resolveDomain(extractHostname(links[j]), links[j], file))
			}
			linkCount += links.length
		}

		// alert user
		console.log(`Found ${files.length} files and ${linkCount} links total...`)
	}

	// wait for all domainResolutionPromises to be fulfilled
	let validLinkPromises = []
	let statusCodes = []
	let passed = 0, failed = 0, run = 0
	await Promise.allSettled(domainResolutionPromises).then(results => {
		for (let k in results) {
			run += 1
			var result = results[k]
			if (result.status === 'fulfilled') {
				validLinkPromises.push(testLink(result.value.url, result.value.file))
			} else {
				failed += 1
				console.error(`[\x1b[31m✗\x1b[0m] ${result.reason.file}: ${result.reason.url} (failed domain resolution)`)
				exitCode = 1
			}
		}
	}).then(async outerResults => {
		await Promise.allSettled(validLinkPromises).then(results => {
			for (let l in results) {
				var result = results[l]
				if (result.status === 'fulfilled') {
					passed += 1
					if (!badLinksOnly) {
						console.log(`[\x1b[32m✓\x1b[0m] ${result.value.file}: ${result.value.url}`)
					}
				} else {
					failed += 1
					console.error(`[\x1b[31m✗\x1b[0m] ${result.reason.file}: ${result.reason.url} (${result.reason.statusCode})`)
					statusCodes.push(result.reason.statusCode)
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

				let passed_text = passed === 1 ? 'link' : 'links'
				let failed_text = failed === 1 ? 'link' : 'links'
				let run_text = run === 1 ? 'link' : 'links'

				if (passedPercentage === '100.000') passedPercentage = '100'
				if (failedPercentage === '100.000') failedPercentage = '100'
				if (passedPercentage === '0.000') passedPercentage = '0'
				if (failedPercentage === '0.000') failedPercentage = '0'

				let codes = [...new Set(statusCodes)].join(', ')
				let codeText = `(${codes})`
				if (codes === '') {
					codeText = ''
				}
				console.log('')
				console.log('===== METRICS =====')
				console.log(`Found ${passed} valid ${passed_text} (${passedPercentage}%)`)
				console.log(`Found ${failed} invalid ${failed_text} (${failedPercentage}%) ${codeText}`)
				console.log(`Tested ${run} ${run_text} total`)
			}

			// make sure exit code is correct per links tested
			process.exit(exitCode)
		})
	})
}

main();