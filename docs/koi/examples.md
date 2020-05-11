# Examples

### Add an installable library to a list
```bash
function add_library {
	__addarg "-h" "--help" "help" "optional" "" "Add a library to a trackable list"
	__addarg "" "lib" "positionalvalue" "required" "" "The library to add"
	__addarg "-b" "--brew" "flag" "optional" "" "The new library should be installed via Homebrew"
	__addarg "-y" "--yum" "flag" "optional" "" "The new library should be installed via yum"
	__addarg "-Y" "--yarn" "flag" "optional" "" "The new library should be installed via yarn"
	__addarg "-a" "--aptget" "flag" "optional" "" "The new library should be installed via apt-get"
	__addgroup "flags" "XOR" "required" "--brew" "--yum" "--yarn" "--aptget"
	__parseargs "$@"

	if [[ $brew -eq 1 ]] ; then
		echo "brew install $lib" >> ~/mylibraries.sh
	elif [[ $yum -eq 1 ]] ; then
		echo "yum install -y $lib" >> ~/mylibraries.sh
	elif [[ $yarn -eq 1 ]] ; then
		echo "yarn global add $lib" >> ~/mylibraries.sh
	else
		echo "apt-get install $lib" >> ~/.mylibraries.sh
	fi
}
```

### Add arguments to multiple groups
```bash
function multiple {
	__addarg "-h" "--help" "help" "optional" "" "help text"
	__addarg "-f" "--flag" "flag" "optional" "" "help text"
	__addarg "-g" "--glad" "flag" "optional" "" "help text"
	__addarg "-v" "--vlad" "flag" "optional" "" "help text"
	__addgroup "flags1" "XOR" "required" "--flag" "--glad"
	__addgroup "flags2" "XOR" "required" "--glad" "--vlad"
	__parseargs "$@"

	echo "flag: '$flag'"
	echo "glad: '$glad'"
	echo "vlad: '$vlad'"
}
```

### Authenticate via OAuth2
```bash
function authenticate {
	__addarg "-h" "--help" "help" "optional" "" "Authenticate via OAuth2"
	__addarg "" "user" "positionalvalue" "required" "" "The user to authenticate"
	__addarg "-p" "--password" "storevalue" "optional" "" "The user's password"
	__addarg "-f" "--usefiles" "flag" "optional" "" "Instead of typing the password on stdin, read it from a file"
	__addarg "-s" "--secretfile" "storevalue" "optional" "" "The file containing the secret key (the user's password)"
	__addgroup "authchoice" "XOR" "required" "--password" "--usefiles"
	__adddep "--secretfile" "dependson" "--usefiles"
	__parseargs "$@"

	if [[ $usefiles -eq 1 ]] ; then
		curl -s -u "${user}:$(cat "$secretfile")" --data 'grant_type=client_credentials' localhost:8000/oauth2/token
	else
		curl -s -u "${user}:${password}" --data 'grant_type=client_credentials' localhost:8000/oauth2/token
	fi
}
```

### Backup files in the cloud before removal
```bash
function backup_files_and_remove {
	__addarg "-h" "--help" "help" "optional" "" "Back up local files in Google Cloud Storage and remove locally"
	__addarg "-j" "--json" "storearray" "optional" "" "JSON file to backup" "__verify_exists_in_bucket jsonbucket"
	__addarg "-y" "--yaml" "storearray" "optional" "" "YAML file to backup" "__verify_exists_in_bucket yamlbucket"
	__parseargs "$@"

	for j in "${json[@]}" ; do
		rm -rf "$j"
	done
	for y in "${yaml[@]}" ; do
		rm -rf "$yaml"
	done
}

function __verify_exists_in_bucket {
	# confirm that a file ($2) exists in a bucket ($1)
	if gsutil -q stat "gs://${1}/${2}" ; then
		gsutil cp "${2}" "gs://${1}/{$2}"
	fi
}
```

### Build a find and replace command
```bash
function replace_in_file {
	__addarg "-h" "--help" "help" "optional" "" "Find and replace in a file"
	__addarg "" "file" "positionalarray" "required" "" "The file(s) to find and replace in" "__verifyfile"
	__addarg "-r" "--replace" "storearray" "optional" "" "The text to replace"
	__addarg "-w" "--with" "storearray" "optional" "" "The text to replace with"
	__addarg "-s" "--skip" "flag" "optional" "" "Skip the file if it does not exist"
	__parseargs "$@"

	if [[ "${#replace[@]}" != "${#with[@]}" ]] ; then
		__errortext "$koiname: err: 'replace' and 'with' arrays must be of the same length"
		return 1
	fi

	for f in "${file[@]}" ; do
		if [[ ! -f "$f" ]] ; then
			if [[ $skip -eq 1 ]] ; then
				continue
			else
				__errortext "$koiname: err: no such file '$f'"
				return 1
			fi
		fi
		for i in "${!replace[@]}" ; do
			sed "s/${replace[$i]}/${with[$i]}/g" < "$f" > temp
			mv -f temp > "$f"
		done
	done
}
```

### Copy a set of files to a location
```bash
function copy_files {
	__addarg "-h" "--help" "help" "optional" "" "Copy a set of files to a location"
	__addarg "-d" "--destination" "storevalue" "required" "" "The destination location"
	__addarg "" "file" "storearray" "optional" "" "The file(s) to copy"
	__parseargs "$@"

	for f in "${file[@]}" ; do
		cp "$f" "$destination"
	done
}
```

### Create a CLI for an API service
```bash
#!/bin/bash
set -e

source koi
koiname=curl_example
koidescription="Examples of potential curl commands you could make with koi"

function createuser {
    __addarg "-h" "--help" "help" "optional" "" "Create a new user"
    __addarg "-p" "--port" "storevalue" "optional" "80" "Port where server is running"
    __addarg "" "user" "positionalvalue" "required" "" "The name of the user to create"
    __parseargs "$@"
    curl -X POST -H "Content-Type: application/json" -d "{\
            \"user\": \"$user\"\
    }" http://localhost:${port}/api/v1/create
}

function run {
    __addarg "-h" "--help" "help" "optional" "" "Run a job/script on the server"
    __addarg "-p" "--port" "storevalue" "optional" "80" "Port where server is running"
    __addarg "-u" "--user" "storevalue" "required" "" "Name of user"
    __addarg "-f" "--folder" "storevalue" "required" "" "Name of folder where script is located"
    __addarg "-s" "--script" "storevalue" "required" "" "Name of script to run"
    __parseargs "$@"
    curl -X POST -H "Content-Type: application/json" -d "{\
            \"user\": \"$user\",\
            \"script\": \"$script\",\
            \"folder\": \"$folder\",\
            \"options\": []\
    }" http://localhost:${port}/api/v1/run
}

function runmultiple {
    __addarg "-h" "--help" "help" "optional" "" "Run multiple jobs/scripts on the server"
    __addarg "-p" "--port" "storevalue" "optional" "80" "Port where server is running"
    __addarg "-u" "--user" "storevalue" "required" "" "Name of user"
    __addarg "-f" "--folder" "storevalue" "required" "" "Name of folder where script(s) is located"
    __addarg "-s" "--scripts" "storearray" "required" "" "Name of script(s) to run"
    __parseargs "$@"
    for script in "${scripts[@]}" ; do
            curl -X POST -H "Content-Type: application/json" -d "{\
                    \"user\": \"$user\",\
                    \"script\": \"$script\",\
                    \"folder\": \"$folder\",\
                    \"options\": []\
            }" http://localhost:${port}/api/v1/run
    done
}

function show {
    __addarg "-h" "--help" "help" "optional" "" "List running jobs for a given user"
    __addarg "-p" "--port" "storevalue" "optional" "80" "Port where server is running"
    __addarg "-u" "--user" "storevalue" "required" "" "Name of user"
    __parseargs "$@"
    curl -X POST -H "Content-Type: application/json" -d "{\
            \"user\": \"$user\"\
    }" http://localhost:${port}/api/v1/list
}

__koirun "$@"
```

### Create a CLI for managing workflows
```bash
#!/bin/bash
set -e

source koi
koiname=workflow_example.sh
koidescription="Examples of potential workflow-related commands you could make with koi"
koicolors=0

function start {
    __addarg "-h" "--help" "help" "optional" "" "Start a workflow given a workflow script"
    __addarg "" "script" "positionalvalue" "required" "" "The workflow script"
    __addarg "" "--name" "storevalue" "required" "" "The name of the workflow"
    __addarg "" "--user" "storevalue" "optional" "`whoami`" "The workflow user"
    __parseargs "$@"

    # start your workflow!
}

function checkstatus {
    __addarg "-h" "--help" "help" "optional" "" "Check the status of an existing workflow"
    __addarg "" "--name" "storevalue" "required" "" "The name of the workflow to check"
    __parseargs "$@"

    # check your workflow
}

__koirun "$@"
```

### Create a script without subcommands
```bash
#!/bin/bash
set -e

source koi
koiname=koimain_example.sh
koidescription="Examples of running koi without subcommands via __koimain"

function __koimain {
    __addarg "-h" "--help" "help" "optional" "" "$koidescription"
    __addarg "-m" "--myval" "storevalue" "optional" "abc" "An optional argument"
    __addarg "" "myarg" "positionalvalue" "optional" "" "An optional positional argument"
    __addarg "-f" "--myflag" "flag" "optional" "" "An optional flag"
    __parseargs "$@"

    echo "myval: $myval"
    echo "myarg: $myarg"
    echo "myflag: $myflag"
}

__koirun "$@"
```

### Get a stock's price
```bash
function checkstockprice {
    __addarg "-h" "--help" "help" "optional" "" "Check a stock's price"
    __addarg "" "symbol" "positionalarray" "required" "" "The ticker symbol(s) to check"
    __addarg "-e" "--exchange" "storevalue" "optional" "NYSE" "The exchange to use"
    __addarg "-p" "--port" "storevalue" "required" "" "The port to use"
    __addarg "-q" "--quiet" "flag" "optional" "" "If included, run in quiet mode"
    __parseargs "$@"
    # check the stock price
}
```

### Get a tarball from GitHub
Taken from [chiller](https://github.com/wcarhart/chiller), which uses koi.
```bash
function get_tarball {
	__addarg "-h" "--help" "help" "optional" "" "Get a tarball from GitHub"
	__addarg "-u" "--user" "storevalue" "optional" "$(whoami)" "The GitHub user"
	__addarg "-v" "--version" "storevalue" "required" "" "The release version to grab"
	__addarg "" "repo" "positionalvalue" "required" "" "The repository to grab"
	__parseargs "$@"

	wget -q "https://github.com/${user}/${repo}/archive/${version}.tar.gz"
}
```

### Get recent Tweets
Taken from [birdhouse](https://github.com/wcarhart/birdhouse), which uses koi.
```bash
function chirps {
	__addarg "-h" "--help" "help" "optional" "" "Get chirps (recent tweets) from a bird (a Twitter user) or hashtag"
	__addarg "" "source" "positionalarray" "required" "" "The bird(s) or hashtag(s) to get chirps from"
	__addarg "-n" "--num" "storevalue" "optional" "10" "The number of chirps to get"
	__addarg "-o" "--omitreplies" "flag" "optional" "" "Omit replies (may reduce number of chirps)"
	__addarg "-a" "--absolute" "flag" "optional" "" "Use absolute timestamps"
	__addarg "-u" "--url" "flag" "optional" "" "Include a URL link to the tweet"
	__addarg "-l" "--language" "storevalue" "optional" "" "Only show tweets in a specific language"
	__addarg "-q" "--quiet" "flag" "optional" "" "Silence warnings"
	__parseargs "$@"
	__verifyjq
	__verifycredentials

	# verify each source is formatted correctly
	for item in "${source[@]}" ; do
		if [[ "$item" != @* && "$item" != '#'* ]] ; then
			__errortext "$koiname: err: sources must start with either an '@' for Twitter handles or '#' for hashtags"
			return 1
		fi
	done
	if [[ "$num" -gt 200 ]] ; then __errortext "$koiname: err: cannot get more than 200 chirps per source" ; return 1 ;fi

	# resolve language
	local langtext=
	if [[ "$language" != "" ]] ; then
		if [[ "${source[@]}" == *@* ]] ; then
			if [[ "$quiet" -eq 0 ]] ; then
				__errortext "warning: --language flag is irrelevant for Twitter handles"
			fi
		fi
		resolvedlanguage=`__resolvelanguage "$language"`
		if [[ "$resolvedlanguage" == "" ]] ; then return 1 ; fi
		langtext="&lang=${resolvedlanguage}"
	fi

	# get tweets
	local apiendpoint=
	local response=
	for item in "${source[@]}" ; do
		if [[ "${item:0:1}" == "@" ]] ; then
			apiendpoint="https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=${item:1}&tweet_mode=extended&count=${num}"
			if [[ "$omitreplies" -eq 1 ]] ; then
				apiendpoint="${apiendpoint}&exclude_replies=true"
			fi
			response=`__twurl "$apiendpoint"`
			__processtweets "$response" "$absolute" "$link"
		else
			apiendpoint="https://api.twitter.com/1.1/search/tweets.json?q=%23${item:1}&tweet_mode=extended&count=${num}${langtext}"
			response=`__twurl "$apiendpoint"`
			__processtweets "`jq -r '.statuses' <<< "$response"`" "$absolute" "$url"
		fi
	done
}
```

### Hit an HTTP endpoint
```bash
function hit_endpoint {
	__addarg "-h" "--help" "help" "optional" "" "Hit an HTTP endpoint"
	__addarg "-x" "--method" "storevalue" "optional" "GET" "The HTTP method to use" "__verify_http_method"
	__addarg "" "endpoint" "positionalvalue" "required" "" "The endpoint to hit"
	__parseargs "$@"

	curl -X "$method" "$endpoint"
}

function __verify_http_method {
	# verify that $1 is a valid HTTP method
	local available_methods=( GET POST PUT DELETE PATCH )
	local found=0
	local method
	for method in "${available_methods[@]}" ; do
		if [[ "$method" == "$1" ]] ; then found=1 ; break ; fi
	done
	if [[ $found -eq 0 ]] ; then
		__errortext "$koiname: err: invalid HTTP method, must be one of ${available_methods[@]}"
		return 1
	fi
}
```

### Install a new library
```bash
function install-lib {
	__addarg "-h" "--help" "help" "optional" "" "Install a library via a variable package manager"
	__addarg "" "lib" "positionalvalue" "required" "" "The library to add"
	__addarg "-b" "--brew" "flag" "optional" "" "The new library should be installed via Homebrew"
	__addarg "-c" "--cask" "flag" "optional" "" "The new library is be a Homebrew cask"
	__adddep "--cask" "dependson" "--brew"
	__addarg "-y" "--yarn" "flag" "optional" "" "The new library should be installed via yarn"
	__addarg "-p" "--pip" "flag" "optional" "" "The new library should be installed via pip"
	__addgroup "flags" "XOR" "required" "--brew" "--yarn" "--pip"
	__parseargs "$@"

	if [[ $brew -eq 1 ]] ; then
		if [[ $cask -eq 1 ]] ; then
			brew cask install "$lib"
		else
			brew install "$lib"
		fi
	elif [[ $yarn -eq 1 ]] ; then
		yarn global add "$lib"
	else
		pip install "$lib"
	fi
}
```

### Move a file to a location
```bash
function move {
	__addarg "-h" "--help" "help" "optional" "" "Move a file to a location"
	__addarg "-f" "--from" "storevalue" "optional" "" "The file to move" "__verifyfile"
	__addarg "-t" "--to" "storevalue" "optional" "" "The location to which to move"
	__addgroup "group" "AND" "required" "--from" "--to"
	__parseargs "$@"

	mv "$from" "$to"
}
```

<hr>
<div style="text-align:center">
	<a class="edit-link" href="https://github.com/wcarhart/docs/blob/master/docs/koi/examples.md" target="_blank"><i class="fas fa-edit"></i> Edit this page</a>
</div>