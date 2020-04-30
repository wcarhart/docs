# Bash aliases

## Tools

| Alias | Meaning | Description |
|:-----:|:-------:|-------------|
| `vim` | `vim -S ~/.vimrc` | Ensure that the `.vimrc` is loaded whenever vim is used. |

## System

| Alias | Meaning | Description |
|:-----:|:-------:|-------------|
| `cp` | `cp -i` | Confirm before overwriting when copying files. |
| `dirs` | `dirs -v` | Show stack index when printing directory stack. |
| `la` | `ls -alG` | Print all files using long format, not including group names. |
| `mkdir` | `mkdir -p` | Create parent directories, if they don't exist. |
| `mv` | `mv -i` | Confirm before overwriting when moving files. |
| `rm` | `rm -i` | Confirm before removing files. |

## Shortcuts

| Alias | Meaning | Description |
|:-----:|:-------:|:-----------:|
| `c` | `clear` | - |
| `l` | `ls` | - |
| `p` | `python` | - |
| `p3` | `python3` | - |
| `s` | `ls` | - |
| `upls` | `up && ls` | - |

## Typos

| Alias | Meaning | Description |
|:-----:|:-------:|:-----------:|
| `eit` | `exit` | - |
| `gti` | `git` | - |
| `pytho` | `python` | - |
| `pythoon` | `python` | - |
| `ptyhon` | `python` | - |
| `tre` | `tree` | - |

## Other

| Alias | Meaning | Description |
|:-----:|:-------:|-------------|
| `busy` | `cat /dev/urandom \| hexdump -C \| grep "ca fe"` | Make it look like the terminal is busy. |
| `calc` | `python -ic "from __future__ import division; from math import *"` | Quick and easy command line calculator. |
| `cppwd` | `echo -n "$(pwd)" \| pbcopy` | Copy the current directory to the macOS clipboard. |
| `django` | `python3 manage.py` | Use the django CLI. |
| `dlogin` | `docker login` | Log into Docker. |
| `gitroot` | `cd $(git rev-parse --show-toplevel) && echo "$_"` | Change up to the root of a Git repository. |
| `hs` | `history \| grep` | Search through the Bash history. |
| `pathdedup` | `export PATH=$(printf %s "$PATH" \| awk -v RS=: -v ORS=: '!arr[$0]++')` | Remove duplicates from the `PATH` variable. |
| `pause` | `read -n 0 -rsp $"Press any key to continue...\n"` | Pause execution. |
| `publicip` | `dig +short myip.opendns.com @resolver1.opendns.com` | Show your public IP address. |
| `recent` | `ls -t \| head -1` | Show the most recently modified file in the current directory. |
| `resetbar` | `if [[ $(uname -s) == *Darwin* ]] ; then pkill 'Touch Bar agent' ; killall 'ControlStrip' ; else >&2 echo 'resetbar is only applicable on macOS' ; fi` | Reset the Touch Bar on macOS. |
| `rickroll` | - | Do you really need a description... |
| `rmd` | `rm -rf -- */` | Remove all directories in the current directory. |
| `sb` | `source ~/.bashrc` | Source the `.bashrc` file. |
| `siren` | `printf '\033[5m\033[91m%b\033[0m' '\'{127,105,105,40,127,117,117} && echo` | Sound the alarm. |
| `spin` | `while :;do for s in / - \\ \|; do printf "\r$s";sleep .1;done;done` | Start a Bash spinner. |
| `starwars` | `telnet towel.blinkenlights.nl` | Start the Star Wars animation. |

<hr>
<div style="text-align:center">
	<a class="edit-link" href="https://github.com/wcarhart/docs/blob/master/docs/konphig/bash_aliases.md" target="_blank"><i class="fas fa-edit"></i> Edit this page</a>
</div>
