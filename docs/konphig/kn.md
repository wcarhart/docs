# kn
!> Before starting this section, make sure you've read [Installation](/installation).

`kn` is the CLI for interacting with konphig and its related files. The purpose of `kn` is to accelerate both changes to konphig files and to your local development environment. `kn` exposes a simple set of powerful commands.

## CLI Commands

### fn
Interact with konphig functions. You can use `fn` subcommand (short for _function_) to count and list the installed konphig functions, as well as get their source code.
```
kn fn [-h] (-c | -l | -g GET) [-q] 
  -c, --count      Show the number of functions (optional) 
  -l, --list       List all functions (optional) 
  -g, --get GET    Get a specific function (optional) 
  -q, --quiet      If included, omit supplemental output (optional)
```

### help
Show the help menu and exit.
```
kn help [-h] [-v]
  -v, --verbose    Print verbose command documentation (optional)
```

### init
Initialize `kn` for use. `kn` relies on the konphig repository for its source code and updates, so it must be initialized before use. This is as simple as providing the path to the local konphig repository.
```
kn init [-h] [-f] PATH 
  path           Path to konphig repository 
  -f, --force    Force overwrite an existing initialization (optional)
```

### install
Install konphig files. Use the `install` subcommand to install konphig files from the local konphig repository to your local machine. This will overwrite any system files, such as your `~/.bashrc`. If you want to save any system files that are overwritten after installation, these are available in `~/.konphig/backups/<timestamp>`.

In addition, konphig has additional installation scripts that are OS-dependent. These supplementary installation scripts setup other utilities, like [Homebrew](https://brew.sh) and [yarn](https://yarnpkg.com/). To install these scripts, use the `-e`/`--extra` flag.

If you're installing konphig on a work computer (or any non-personal space), you can use the `-p`/`--personal` flag to create a `~/personal` directory. Any Git repositories in this directory will use a separate `.gitconfig` with personal credentials, so you don't accidentally push to your personal projects with your work Git credentials.
```
kn install [-h] [-e] [-p] 
  -e, --extra       Run extra, OS-based installation scripts (optional) 
  -p, --personal    Add a personal Git workspace (optional) 
```

### list
List all available `kn` subcommands. Include the `-d`/`--docs` flag to show the complete subcommand documentation.
```
kn list [-h] [-d] 
  -d, --docs    If included, print command documentation (optional)
```

### new
Add a new entity to track in konphig. Konphig can currently keep track of [Homebrew](https://brew.sh) formulae + casks, [yarn](https://yarnpkg.com/) packages, [hyper](https://hyper.is/) packages, [Bash aliases](/bash_aliases), and [Bash variables](/bash_variables). To add a new entity to be tracked in konphig, use the appropriate option (`--brew`, `--yarn`, `--hyper`, `--alias`, or `--variable`). When adding aliases and variables, use the `-g`/`--global` flag to also use [adda](/bash_functions?id=adda) or [addv](/bash_functions?id=addv) to add the entity globally.
```
kn new [-h] (-b BREW | -y YARN | -H HYPER | -a | -v) [-a & --aliasname ALIASNAME & --aliasvalue ALIASVALUE] [-v & --variablename VARIABLENAME & --variablevalue VARIABLEVALUE] [-g] [-c] 
  -a, --alias                          Add a new alias to konphig (optional) 
  --aliasname ALIASNAME                The name of the new alias (optional) 
  --aliasvalue ALIASVALUE              The value of the new alias (optional) 
  -v, --variable                       Add a new variable to konphig (optional) 
  --variablename VARIABLENAME          The name of the new variable (optional) 
  --variablevalue VARIABLEVALUE        The value of the new variable (optional) 
  -g, --global                         Also add the new alias or variable to the installed list of
                                       aliases or variables (optional) 
  -b, --brew BREW                      Add a new Homebrew formula to konphig (optional) 
  -c, --cask                           Use a Homebrew cask instead of a regular formula (optional) 
  -y, --yarn YARN                      Add a new yarn package to konphig (optional) 
  -H, --hyper HYPER                    Add a new hyper package to konphig (optional)
```

### repo
Register a new repository with `kn`. `kn` can track local repositories that are saved on your local machine. To register a local repository with `kn`, use `kn repo --add /path/to/your/repository`. Then, you can list the repositories on your local machine with `kn repo --list` and pull all of them in one fell swoop with `kn repo --pull`. When pulling, you can output standard Git information with `kn repo --pull --verbose`.
```
kn repo [-h] [-p | -l | -a ADD] [-v] 
Register a new repository with kn
  -a, --add ADD    The repository to register (optional) 
  -p, --pull       Pull all registered repositories (optional) 
  -v, --verbose    When pulling, print standard Git output (optional) 
  -l, --list       List all registered repositories (optional)
```

### status
Get the status of the konphig repo. This is the same as doing `git status` from `~/konphig`.
```
kn status [-h] 
```

### update
Update system files to match those in konphig. `kn` uses _dynamic updatation_, meaning that it only updates files that have changed, based on what's in the local konphig repository. This is helpful if you add or change a Bash function; you can use `kn update` to update your system files to match what's in your local konphig repository. If you accidentally overwrite a system file, `kn` saves backups of files in `~/.konphig/backups/<timestamp>`.
```
kn update [-h] 
```

<hr>
<div style="text-align:center">
	<a class="edit-link" href="https://github.com/wcarhart/docs/blob/master/docs/konphig/kn.md" target="_blank"><i class="fas fa-edit"></i> Edit this page</a>
</div>