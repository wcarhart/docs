# Bash functions
!> Before starting this section, make sure you've read [Installation](/installation).

In addition to [kn](/kn), some of the most powerful functionalty in konphig comes from its Bash functions. Konphig has a number of different Bash functions available upon its installation. To list all of these functions, use `kn fn --list`.

| Function | Description |
|:--------:|-------------|
| [adda](/bash_functions?id=adda) | Add an alias on the fly. |
| [addv](/bash_functions?id=addv) | Add an variable on the fly. |
| [aid](/bash_functions?id=aid) | Get helpful hints for a command. |
| [brave](/bash_functions?id=brave) |
| [cf](/bash_functions?id=cf) |
| [chrome](/bash_functions?id=chrome) |
| [common](/bash_functions?id=common) | Show the most commonly used commands. |
| [cplc](/bash_functions?id=cplc) |
| [del](/bash_functions?id=del) |
| [dive](/bash_functions?id=dive) |
| [down](/bash_functions?id=down) |
| [dp](/bash_functions?id=dp) |
| [duf](/bash_functions?id=duf) |
| [extract](/bash_functions?id=extract) |
| [gb](/bash_functions?id=gb) |
| [get](/bash_functions?id=get) |
| [getlocation](/bash_functions?id=getlocation) |
| [makes](/bash_functions?id=makes) |
| [merge](/bash_functions?id=merge) |
| [over](/bash_functions?id=over) |
| [pathadd](/bash_functions?id=pathadd) |
| [pathrm](/bash_functions?id=pathrm) |
| [per](/bash_functions?id=per) |
| [randimal](/bash_functions?id=randimal) |
| [random](/bash_functions?id=random) |
| [silent](/bash_functions?id=silent) |
| [snag](/bash_functions?id=snag) |
| [up](/bash_functions?id=up) |
| [venv?](/bash_functions?id=venv) |
| [venvfix](/bash_functions?id=venvfix) |

<h3 id="adda">
	<a href="#/bash_functions?id=adda" data-id="adda" class="anchor">
		<span>adda</span><h6 class="inline-subtitle">&nbsp;&nbsp;(add alias)</h6>
	</a>
</h3>
Add an alias on the fly.

**Usage**
```
adda [-h] ALIAS MEANING
  -h, --help    show this menu and exit
  alias         the new alias
  meaning       the full command that the alias expands to
```
**Example**
```bash
adda e echo
e 'hello, konphig!'
```
```
hello, konphig!
```
**Dependencies:** `echo`, `alias`, `source`

**Compatibility:** _macOS_ and _linux_

<h3 id="addv">
	<a href="#/bash_functions?id=addv" data-id="addv" class="anchor">
		<span>addv</span><h6 class="inline-subtitle">&nbsp;&nbsp;(add variable)</h6>
	</a>
</h3>
Add a variable on the fly.

**Usage**
```
addv [-h] NAME VALUE
  -h, --help    show this menu and exit
  name          the name of the new variable
  value         the value of the new variable
```
**Example**
```bash
addv myvar abcd
echo "$myvar"
```
```
abcd
```
**Dependencies:** `echo`, `export`, `source`

**Compatibility:** _macOS_ and _linux_

<h3 id="aid">
	<a href="#/bash_functions?id=aid" data-id="aid" class="anchor">
		<span>aid</span>
	</a>
</h3>
Get helpful hints for a command.

**Usage**
```
aid [-h] CMD...
  -h, --help    show this menu and exit
  cmd           (+) the command(s) for which to get help
```
**Example**
```bash
aid wget
```
```
# wget
# The non-interactive network downloader

# Quietly download a file, continuing where it left of, if the connection
# fails. The file will be downloaded to the current working directory.
wget -qc [URL]

# Specify a location to download the given file.
wget -qcO [PATH] [URL]

# Download URL using the user agent string provided to the `-U` flag.
wget -U 'Mozilla/5.0' [URL]
```
**Dependencies:** `echo`, `curl`

**Compatibility:** _macOS_ and _linux_

<h3 id="brave">
	<a href="#/bash_functions?id=brave" data-id="brave" class="anchor">
		<span>brave</span>
	</a>
</h3>
Open a file in the Brave Browser.

**Usage**
```
brave [-h] FILE...
  -h, --help    show this menu and exit
  file          (+) the file(s) to open
```
**Example**
```bash
brave index.hmtl
```
**Dependencies:** `echo`, `open`, [Brave Browser](https://brave.com/)

**Compatibility:** _macOS_ only

<h3 id="cf">
	<a href="#/bash_functions?id=cf" data-id="cf" class="anchor">
		<span>cf</span><h6 class="inline-subtitle">&nbsp;&nbsp;(count files)</h6>
	</a>
</h3>
Count files in a directory and its subdirectories.

**Usage**
```
cf [-h] [DIRECTORY]
  -h, --help    show this menu and exit
  directory     the directory in which to count files (default: .)
```
**Example**
```bash
cf
```
```
123 files
```
**Dependencies:** `echo`, `find`, `wc`, `xargs`

**Compatibility:** _macOS_ and _linux_

<h3 id="chrome">
	<a href="#/bash_functions?id=chrome" data-id="chrome" class="anchor">
		<span>chrome</span>
	</a>
</h3>
Open a file in Google Chrome.

**Usage**
```
chrome [-h] FILE...
  -h, --help    show this menu and exit
  file          (+) the file(s) to open
```
**Example**
```bash
chrome index.html
```
**Dependencies:** `echo`, `open`, [Google Chrome](https://www.google.com/chrome/)

**Compatibility:** _macOS_ only

<h3 id="common">
	<a href="#/bash_functions?id=common" data-id="common" class="anchor">
		<span>common</span>
	</a>
</h3>
Show the most commonly used commands.

**Usage**
```
common [-h] [NUM]
  -h, --help    show this menu and exit
  num           the number of commands to show (default: 10)
```
**Example**
```bash
common 3
```
```
1  1573  19.1666%    git
2  670   8.16376%    cd
3  302   3.67979%    subl
```
**Dependencies:** `echo`, `history`, `awk`, `grep`, `column`, `sort`, `nl`, `head`

**Compatibility:** _macOS_ and _linux_

### cplc

### del

### dive

### down

### dp

### duf

### extract

### gb

### get

### getlocation

### makes

### merge

### over

### pathadd

### pathrm

### per

### randimal

### random

### silent

### snag

### up

### venv?

### venvfix

<hr>
<div style="text-align:center">
	<a class="edit-link" href="https://github.com/wcarhart/docs/blob/master/docs/konphig/bash_functions.md" target="_blank"><i class="fas fa-edit"></i> Edit this page</a>
</div>