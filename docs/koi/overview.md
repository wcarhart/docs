<p align="center"><img alt="koi logo" src="/_media/logo.png" /></p>

<h1 align="center">koi</h1>
<h5 align="center">Bashful argument parsing</h5>

Koi is an argument parsing library for shell scripts. It is written entirely in Bash and allows scripts to easily define a CLI and parse command line arguments, including positional arguments, options, flags, subcommands, and more.

> Interested in the development of koi? Read the [Development](/development) section, or check out its [repository](https://github.com/wcarhart/koi) for more info!

## Why koi?
Shell scripts often start out as quick and dirty solutions to problems, but can very quickly evolve into a tangled mess, becoming hard to maintain. In addition, documenting the usage of shell scripts can be annoying and is often an afterthought. With koi, defining a CLI and generating documentation is easy.

#### Easily add command line arguments for Bash functions {docsify-ignore}
```bash
function sendrequest {
    __addarg "-h" "--help" "help" "optional" "" "Send an HTTP request"
    __addarg "-m" "--method" "storevalue" "optional" "GET" "The HTTP method"
    __addarg "" "url" "positionalarray" "required" "" "The url of the HTTP request"
    __parseargs "$@"

    for u in "${url[@]}" ; do
    	curl -X "$method" "$u"
    done
}
```

#### Autogenerate verbose CLI documentation {docsify-ignore}
```bash
sendrequest -h
```
```
koi sendrequest [-h] [-m METHOD] URL... 
Send an HTTP request
  -m, --method METHOD    The HTTP method (optional) (default: GET)
  url                    (+) The url of the HTTP request
```

#### Build scripts with many subcommands and complex arguments {docsify-ignore}
```bash
./workflowrunner.sh help --verbose
```
```
Run a workflow script

Usage:
  workflowrunner.sh COMMAND [args]

Available commands:
  checkstatus
  help
  list
  start

Command documentation:
workflowrunner.sh checkstatus [-h] --name NAME 
Check the status of an existing workflow
  --name NAME        The name of the workflow to check 

workflowrunner.sh help [-h] [-v] 
Show this menu and exit
  -v, --verbose    Print verbose command documentation (optional) 

workflowrunner.sh list [-h] [-d] 
List all available commands
  -d, --docs    If included, print command documentation (optional) 

workflowrunner.sh start [-h] --name NAME [--user USER] SCRIPT 
Start a workflow given a workflow script
  script             The workflow script 
  --name NAME        The name of the workflow 
  --user USER        The workflow user (optional) (default: wcarhart)
```

## Dive in
Easily install koi with `brew install wcarhart/tools/koi`, or read [Installation](/installation) for more information. Check [Basic Usage](/basic-usage) for how to get started using koi.

## Author
[Will Carhart](https://github.com/wcarhart) is the author of koi. Check the [Author](/author) section for more information.

## Contributing
Want to contribute? Check out [Development](/development).

## License
Koi is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).
```
MIT License

Copyright (c) 2020 Will Carhart

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

<hr>
<div style="text-align:center">
	<a class="edit-link" href="https://github.com/wcarhart/wcarhart.github.io/docs/overview.md" target="_blank"><i class="fas fa-edit"></i> Edit this page</a>
</div>