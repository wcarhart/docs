# Other configurations

## Bash

#### Git tab completion {docsify-ignore}
Konphig uses the `.git-prompt.sh` script for tab completion. The file is available [here](https://github.com/git/git/blob/master/contrib/completion/git-prompt.sh). This is set in the `.bashrc` file.

#### PATH setup {docsify-ignore}
Konphig uses the following for the initial `PATH` variable: `/usr/local/bin:/usr/local/sbin:/usr/bin:/usr/sbin:/bin:/sbin:/opt/X11/bin`. If using macOS, konphig prepends `/Users/$(whoami)/bin:/Users/$(whoami)` to the `PATH` variable. This is set in the `.bashrc` file.

#### Configure PS1 and prompt_function {docsify-ignore}
Konphig uses a configurable prompt (`PS1` variable). For more information for how to set the `PS1` on the fly, see [dp](/bash_functions?id=dp). The default prompt includes a prompt function that changes based on the `git status` of the current directory, as well as a random ASCII face. The available faces are:
 * `༼つ•_•༽つ`
 * `ʕっ•ᴥ•ʔっ`
 * `ฅ^•ﻌ•^ฅ`

This is set in the `.bashrc` file.

#### Configure history and other shell features {docsify-ignore}
Konphig binds the up and down arrow keys for seraching the history. It also increases the history size, removes duplicates, removes common commands (`cd`, `ls`, etc.), and turns on case-insensitive tab completion. This is set in the `.bashrc` file.

#### Source konphig functions, aliases, and variables {docsify-ignore}
Finally, konphig uses the `.bashrc` file to source the konphig [functions](/bash_functions), [aliases](/bash_aliases), and [variables](/bash_variables).

#### Other Bash configuration files
Konphig also ships with `.bash_profile` and `.profile` files, which simply point to the `.bashrc` file:

## Hyper
Konhpig ships with a few configurations for [Hyper](/https://hyper.is/). These configurations are mostly cosmetic (colors, font size, etc.). In addition, konphig includes a few Hyper plugins:
* [hyper-quit](https://www.npmjs.com/package/hyper-quit)
* [hyper-search](https://www.npmjs.com/package/hyper-search)
* [hyper-spotify](https://www.npmjs.com/package/hyper-spotify)

## PyPI
Konphig has a few default settings for uploading to PyPI.

## tmux
Konphig has a few settings for tmux:
* Set the repeat time to zero
* Turn on mouse controls

## vim
Konphig has a few settings for vim:
* Turn on line numbers
* Turn on language-based syntax highlighting
* Better search highlighting
* Convert tabs to spaces
* Turn on clipboard sharing
* Turn on opening files to the last remembered position

<hr>
<div style="text-align:center">
	<a class="edit-link" href="https://github.com/wcarhart/docs/blob/master/docs/konphig/other_configurations.md" target="_blank"><i class="fas fa-edit"></i> Edit this page</a>
</div>