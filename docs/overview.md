<p align="center"><img alt="koi logo" src="/_media/logo.png" /></p>

<h1 align="center">koi</h1>
<h5 align="center">Bashful argument parsing</h5>

Koi is an argument parsing library for shell scripts. It is written entirely in Bash and allows scripts to easily define a CLI and parse command line arguments, including positional arguments, options, flags, subcommands, and more.

> Interested in the development of koi? Check out its [repository](https://github.com/wcarhart/koi) for more info!

## Why koi?
Shell scripts often start out as quick and dirty solutions to problems, but can very quickly evolve into a tangled mess, becoming hard to maintain. In addition, documenting the usage of shell scripts can be annoying and is often an afterthought. With koi, defining a CLI and generating documentation is easy.

### Easily add command line arguments for Bash functions
```bash
function todo {
    __addarg "-h" "--help" "help" "optional" "" "Send an HTTP request"
    __addarg "-m" "--method" "storevalue" "optional" "GET" "The HTTP method"
    __addarg "-u" "--url" "storevalue" "required" "" "The url of the HTTP request"
    __parseargs "$@"
    curl -X "$method" "$url"
}
```

Here is a [link](https://google.com).

<a class="edit-link" href="https://github.com/wcarhart/wcarhart.github.io/docs/overview.md" target="_blank"><i class="fas fa-edit"></i> Edit this page</a>