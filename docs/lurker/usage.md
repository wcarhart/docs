# Usage

## CLI
Lurker exposes a simple-to-use CLI. You can access it with `lurker -h` or `lurker --help`.
```
lurker [-h] [-n] [-f FOLDSIZE] [-c COMMAND] [-s] 
  -n, --nocolors             Do not use colors in output (optional) 
  -f, --foldsize FOLDSIZE    The line length at which to wrap (optional) (default: 100)
  -c, --command COMMAND      Run a lurker command when lurker starts (optional) 
  -s, --silent               Do not print the lurker logo when lurker starts (optional)
```

Lurker uses a library called [koi](https://github.com/wcarhart/koi) to parse command line arguments.

## Lurker commands
Once lurker is running, there are a few available commands.

| Command | Meaning |
|:-------:|---------|
| help | Show the help menu. |
| read `ID` | Open the comment thread for post `ID`. |
| open `ID` | Open the URL for the post `ID` in your default browser (only available on macOS). |
| copy `ID` | Copy the URL for the post `ID` to the clipboard (only available on macOS). |
| hack `ID` | Open the Hacker News link for the post `ID` in your default browser (only available on macOS). |
| user `ID` | Show info for user `ID`. |
| `ID` | Show info for post `ID`. |
| more | Show the next 10 posts (up to 500). |
| less | Show the previous 10 posts. |
| back | Show the previous list of posts again. |
| refresh | Refresh the master post list, which will reset the ordering of posts. |
| clear | Clear the screen. |
| exit | Quit lurker. |

<hr>
<div style="text-align:center">
	<a class="edit-link" href="https://github.com/wcarhart/docs/blob/master/docs/lurker/usage.md" target="_blank"><i class="fas fa-edit"></i> Edit this page</a>
</div>