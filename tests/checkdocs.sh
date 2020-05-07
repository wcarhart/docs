#!/bin/bash
set -e

# check that documentation sites are configured correctly

# check for jq
if ! type jq > /dev/null 2>&1 ; then
    >&2 echo "err: 'jq' is not in the PATH (see: https://stedolan.github.io/jq/)"
    exit 1
fi

# verify registry file exists
if [[ ! -f ../registry.json ]] ; then
	>&2 echo "err: couldn't find the registry, no such file docs/registry.json"
	exit 1
fi

# verify documentation folder exists
if [[ ! -d ../docs ]] ; then
	>&2 echo "err: missing documentation folder, no such folder docs/docs"
	exit 1
fi

# verify global index exists
if [[ ! -f ../index.html ]] ; then
	>&2 echo "err: missing global index, no such file docs/index.html"
	exit 1
fi

# get list of installed sites
# shellcheck disable=SC2207
sites=( $(jq -r '.registered_sites[]' < ../registry.json) )
for site in "${sites[@]}" ; do
	# verify docs folder
	if [[ ! -d ../docs/${site} ]] ; then
		>&2 echo "err: missing docs folder for $site, no such folder docs/docs/$site"
		exit 1
	fi

	# verify site index
	if [[ ! -f ../docs/${site}/index.html ]] ; then
		>&2 echo "err: missing site index for $site, no such file docs/docs/${site}/index.html"
		exit 1
	fi

	# verify icons
	if [[ ! -d ../docs/${site}/_ico ]] ; then
		>&2 echo "err: missing icons for $site, no such folder docs/docs/${site}/_ico"
		exit 1
	fi

	# verify site is installed in index
	if ! grep "${site}-btn" ../index.html > /dev/null 2>&1 ; then
		>&2 echo "err: missing button for $site in index.html"
		exit 1
	fi
done
