# Subcommands
!> Before starting this section, make sure you've read [registering arguments](/registering_arguments) and [parsing arguments](/parsing_arguments).

Another powerful feature of koi is the ability to parse subcommands.

You can either attach your arguments to your script:
```bash
./myscript.sh -a arg -b arg
```

Or, you can attach your arguments to subcommands:
```bash
./myscript.sh subcommand -a arg -b arg
```

This is powerful because it allows you to have more granular control over reading in arguments for different functionality.

## __koimain

By default, koi looks for a function called `__koimain`. If one exists, then it uses that as the main function for the script. If you do not want to use subcommands, you should define a `__koimain` function and put all of your logic there.

?> **Example**<br>If you want your arguments to be parsed on a _by-script_ basis, use a `__koimain` function.
```bash
#!/bin/bash
set -e
source koi
koiname=myscript.sh
koidescription="Some documentation for my script"

function __koimain {
	__addarg "-h" "--help" "help" "optional" "" "$koidescription"
	__addarg "-a" "--arg" "storevalue" "required" "" "A required argument"
	__addarg "-b" "--barg" "storevalue" "required" "" "Another required argument"
	__parseargs "$@"
	# script functionality
}

__koirun "$@"
```
_Usage:_
```
./myscript.sh [-h] [-a ARG] [-b BARG]
```

## Using subcommands
If koi cannot find a `__koimain` function, then it defaults to using subcommands. A **subcommand** is simply defined by a function. For each function you have in your script, koi will add a subcommand to the CLI. For example, if you define functions `get_artifact` and `process_artifact`, then you would be able to use `./myscript.sh get_artifact [ARGS]` and `./myscript.sh process_artifact [ARGS]` from the CLI.

This poses a problem, because often times there are functions that a script uses internally that you might not want available on the CLI. For example, you might define the `get_artifact` function with the intention of it being an available subcommand. However, `get_artifact` might need to call another function, say `authenticate`, which you don't want as an available subcommand.

**Koi handles this by designating functions that begin with a dash (`-`) or underscore (`_`) as internal functions,** and does not visibly expose them as available subcommands. What is even more powerful is that even though functions that start with `_` or `-` are not visible in help menus, they are still useable from the CLI.

?> **Example**<br>If you want to use subcommands, do **not** define a `__koimain` function, but rather define one function per desired subcommand.
```bash
#!/bin/bash
set -e
source koi
koiname=myscript.sh
koidescription="Tools for working with artifacts"

function get_artifact {
	__addarg "-h" "--help" "help" "optional" "" "Get an artifact"
	__addarg "" "artifact" "positionalvalue" "required" "The artifact to get"
	__parseargs "$@"

	__authenticate
	wget -q "https://domain.com/artifacts?id=${artifact}"
}

function process_artifact {
	__addarg "-h" "--help" "help" "optional" "" "Process an artifact"
	__addarg "" "artifact" "positionalvalue" "required" "" "The local artifact to process" "__verifyfile"
	__parseargs "$@"

	du -sh "${artifact}"
}

function __authenticate {
	# perform authentication
}

__koirun "$@"
```
_Usage:_
```bash
./myscript.sh get_artifact abcd123            # valid!
./myscript.sh process_artifact abcd123.tar    # valid!
./myscript.sh __authenticate                  # also valid!
```
_However, `__authenticate` won't show up in the generated help menu:_
```
$ ./myscript.sh help --verbose
Tools for working with artifacts

Usage:
  myscript.sh COMMAND [args]

Available commands:
  get_artifact
  help
  list
  process_artifact

Command documentation:
myscript.sh get_artifact [-h] ARTIFACT 
Get an artifact
  artifact      The artifact to get 

myscript.sh help [-h] [-v] 
Show this menu and exit
  -v, --verbose    Print verbose command documentation (optional) 

myscript.sh list [-h] [-d] 
List all available commands
  -d, --docs    If included, print command documentation (optional) 

myscript.sh process_artifact [-h] ARTIFACT 
Process an artifact
  artifact      The local artifact to process 

```

*[Why can't I nest functions that parse arguments?](/faq?id=why-can39t-i-nest-functions-that-parse-arguments)*

*[Why do some functions need to start with two underscores?](/faq?id=why-do-some-functions-need-to-start-with-two-underscores)*

## Default subcommands
Koi comes with a few default subcommands that are available if there is no `__koimain` function defined. These functions are `help` and `list`, and come with koi out of the box. There also are additional hidden functions that start with underscores, which are documented in the [Helpers](/helpers) section.

### help
The `help` command is a special command the autogenerates the help menu based on the registered arguments. When subcommands are enabled, it can be accessed with `help`, `-h`, or `--help`. It also has a more verbose option, which can be accessed with `help --verbose` or `-hv`.

For more information on autogenerated help menus, see [Autogenerated help menus](/autogenerated_help_menus).

_Usage:_
```
./myscript.sh subcommand help [-h] [-v]
```

### list
The `list` command lists the available commands (commands that do not begin with a dash (`-`) or underscore (`_`)). `list` can also display the full autogenerated documentation for the available commands with the `-d`/`--docs` option.

_Usage:_
```
./myscript.sh subcommand list [-d]
```

<hr>
<div style="text-align:center">
	<a class="edit-link" href="https://github.com/wcarhart/docs/blob/master/docs/koi/subcommands.md" target="_blank"><i class="fas fa-edit"></i> Edit this page</a>
</div>