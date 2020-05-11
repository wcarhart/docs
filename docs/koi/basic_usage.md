# Basic Usage
!> This section will not cover installation or configurable options. Please refer to [Installation](/installation) and [Configuration](/configuration), respectively.

### How command line arguments work
Koi uses the short option (`-s`) and long option (`--long`) pattern for defining arguments, which was popularized by [GNU](https://www.gnu.org/home.en.html) and the [POSIX Utility Conventions](https://pubs.opengroup.org/onlinepubs/9699919799/basedefs/V1_chap12.html), with a few subtle differences. This means that you can have options which require an argument and options which do not (a.k.a. _flags_). Options can be either _required_ or _optional_, and can use a short option (`-s`) or a long option (`--long`). In addition, koi supports positional arguments, which do not require an option, but rather just the argument.

### Using koi to define options
Parsing arguments with koi can be simplified into two steps:
1. Define and register arguments to a function (with the `__addarg` command)
2. Parse the arguments passed to the function (with the `__parseargs` command)

See [registering arguments](/registering_arguments).

See [parsing arguments](/parsing_arguments).

### A practical example
For instance, if we have a function `greet`, we can define arguments like so:
```bash
function greet {
	__addarg "-h" "--help" "help" "optional" "" "Greet a person by name"
	__addarg "" "name" "positionalvalue" "required" "" "The name of someone you like"
	__addarg "-s" "--salutation" "storevalue" "optional" "Hello" "The greeting to use"
	__addarg "-e" "--exclaim" "flag" "optional" "" "If included, greeting will be exclaimed"
	__parseargs "$@"

	local exclaim_text=
	if [[ $exclaim -eq 1 ]] ; then
		exclaim_text='!'
	fi

	echo "${salutation}, ${name}${exclaim_text}"
}
```
We could then call our function like so:
```bash
greet "Guido van Rossum" --exclaim
```
Which would output:
```
Hello, Guido van Rossum!
```
In addition, we get a generated help menu based on our arguments with the `-h` or `--help` argument.
```bash
greet -h
```
```
koi greet [-h] [-s SALUTATION] [-e] NAME 
Greet a person by name
  name                           The name of someone you like 
  -s, --salutation SALUTATION    The greeting to use (optional) (default: Hello)
  -e, --exclaim                  If included, greeting will be exclaimed (optional)
```

### Diving deeper
This may look complicated to use, but it's easier than it looks.

* To learn more about adding arguments, see [registering arguments](/registering_arguments).

* To learn more about parsing arguments, see [parsing arguments](/parsing_arguments).

* To learn more about using CLI subcommands, see [subcommands](/subcommands).

* To learn more about using positional arguments, see [positional arguments](/positional_arguments).

* To learn more about using argument groups (such as mutual exclusivity), see [argument groups](/argument_groups).

* To learn more about using dependent arguments (arguments that depend on one another), see [dependent arguments](/dependent_arguments).

<hr>
<div style="text-align:center">
	<a class="edit-link" href="https://github.com/wcarhart/docs/blob/master/docs/koi/basic_usage.md" target="_blank"><i class="fas fa-edit"></i> Edit this page</a>
</div>