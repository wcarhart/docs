# Bash variables

## Colorful man pages

| Variable | Value | Description |
|:--------:|:-----:|:-----------:|
| `LESS_TERMCAP_mb` | `\e[1;32m` | - |
| `LESS_TERMCAP_md` | `\e[1;32m` | - |
| `LESS_TERMCAP_me` | `\e[0m` | - |
| `LESS_TERMCAP_se` | `\e[0m` | - |
| `LESS_TERMCAP_so` | `\e[01;33m` | - |
| `LESS_TERMCAP_ue` | `\e[0m` | - |
| `LESS_TERMCAP_us` | `\e[1;4;31m` | - |

## Shell stuff

| Variable | Value | Description |
|:--------:|:-----:|-------------|
| `HISTCONTROL` | `ignoreboth` | Ignore duplicates and commands with leading whitespace in the Bash history. |
| `HISTIGNORE` | `&:ls:ll:la:l.:pwd:exit:clear` | Ignore commonly used commands in the Bash history. |
| `HISTFILESIZE` | `1000000` | Increase the history file size. |
| `HISTSIZE` | `1000000` | Increase the history size. |

## Colors

| Variable | Value | Description |
|:--------:|:-----:|-------------|
| `CLICOLOR` | `1` | Use colorful CLI output. |
| `LSCOLORS` | `dxfxcxdxbxegedabagacad` | Show colors in `ls` output. |

## Environment

| Variable | Value | Description |
|:--------:|:-----:|-------------|
| `PATH` | `$HOME/bin:/$HOME/.local/bin:/usr/local/bin:/usr/local/sbin:$PATH` | Set up the `PATH` variable. |
| `DISPLAY` | `:0.0` | Attach the default display to the default screen. |
| `PROMPT_COMMAND` | `prompt_function` | Register `prompt_function` to be called every time the command prompt (`PS1`) is loaded. |
| `PROMPT_INDEX` | `0` | Set up the prompt index. |

<hr>
<div style="text-align:center">
	<a class="edit-link" href="https://github.com/wcarhart/docs/blob/master/docs/konphig/bash_variables.md" target="_blank"><i class="fas fa-edit"></i> Edit this page</a>
</div>
