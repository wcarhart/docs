# Bash functions
!> Before starting this section, make sure you've read [Installation](/installation).

In addition to [kn](/kn), some of the most powerful functionalty in konphig comes from its Bash functions. Konphig has a number of different Bash functions available upon its installation. To list all of these functions, use `kn fn --list`.

<button onclick="topFunction()" id="top-button" title="Go to top">Top</button>

| Function | Description |
|:--------:|-------------|
| [adda](/bash_functions?id=adda) | Add an alias on the fly. |
| [addv](/bash_functions?id=addv) | Add an variable on the fly. |
| [aid](/bash_functions?id=aid) | Get helpful hints for a command. |
| [brave](/bash_functions?id=brave) | Open a file in the Brave Browser. |
| [cf](/bash_functions?id=cf) | Count files in a directory and its subdirectories. |
| [chrome](/bash_functions?id=chrome) | Open a file in Google Chrome. |
| [common](/bash_functions?id=common) | Show the most commonly used commands. |
| [cplc](/bash_functions?id=cplc) | Copy previous command to the clipboard. |
| [del](/bash_functions?id=del) | Remove files at random. |
| [dive](/bash_functions?id=dive) | Follow a directory tree down to its childmost subdirectory. |
| [down](/bash_functions?id=down) | Go down a directory. |
| [dp](/bash_functions?id=dp) | Change to a different prompt. |
| [duf](/bash_functions?id=duf) | Get disk usage for specific filetype. |
| [extract](/bash_functions?id=extract) | Extract compressed and zipped files automatically. |
| [gb](/bash_functions?id=gb) | Get the current git branch. |
| [get](/bash_functions?id=get) | Select files at random from a directory. |
| [getlocation](/bash_functions?id=getlocation) | Get location for your public IP address. |
| [makes](/bash_functions?id=makes) | Make a shell script out of previous commands. |
| [merge](/bash_functions?id=merge) | Join a list of strings with a common character. |
| [over](/bash_functions?id=over) | Move up and over when changing directories. |
| [pathadd](/bash_functions?id=pathadd) | Add to the `PATH` variable. |
| [pathrm](/bash_functions?id=pathrm) | Remove from the `PATH` variable. |
| [per](/bash_functions?id=per) | Show percentage of each filetype in the current directory. |
| [randimal](/bash_functions?id=randimal) | Draw a random speech animal. |
| [random](/bash_functions?id=random) | Generate a random string of specified length. |
| [silent](/bash_functions?id=silent) | Run a command silently in the background. |
| [snag](/bash_functions?id=snag) | Snag most recently downloaded files to the current directory. |
| [up](/bash_functions?id=up) | Go up a directory. |
| [venv?](/bash_functions?id=venv) | Detect if a virtual environment is active. |
| [venvfix](/bash_functions?id=venvfix) | Fix broken virtual environments. |

<hr>

<h3 id="adda">
	<a href="#/bash_functions?id=adda" data-id="adda" class="anchor">
		<span>adda</span><h6 class="inline-subtitle">&nbsp;&nbsp;(add alias)</h6>
	</a>
</h3>
Add an alias on the fly.

**Usage:**
```
adda [-h] ALIAS MEANING
  -h, --help    show this menu and exit
  alias         the new alias
  meaning       the full command that the alias expands to
```
**Example:**
```bash
adda e echo
e 'hello, konphig!'
```
```
hello, konphig!
```
**Dependencies:** `echo`, `alias`, `source`

**Compatibility:** _macOS_ and _linux_

<hr>

<h3 id="addv">
	<a href="#/bash_functions?id=addv" data-id="addv" class="anchor">
		<span>addv</span><h6 class="inline-subtitle">&nbsp;&nbsp;(add variable)</h6>
	</a>
</h3>
Add a variable on the fly.

**Usage:**
```
addv [-h] NAME VALUE
  -h, --help    show this menu and exit
  name          the name of the new variable
  value         the value of the new variable
```
**Example:**
```bash
addv myvar abcd
echo "$myvar"
```
```
abcd
```
**Dependencies:** `echo`, `source`

**Compatibility:** _macOS_ and _linux_

<hr>

<h3 id="aid">
	<a href="#/bash_functions?id=aid" data-id="aid" class="anchor">
		<span>aid</span>
	</a>
</h3>
Get helpful hints for a command.

**Usage:**
```
aid [-h] CMD...
  -h, --help    show this menu and exit
  cmd           (+) the command(s) for which to get help
```
**Example:**
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

<hr>

<h3 id="brave">
	<a href="#/bash_functions?id=brave" data-id="brave" class="anchor">
		<span>brave</span>
	</a>
</h3>
Open a file in the Brave Browser.

**Usage:**
```
brave [-h] FILE...
  -h, --help    show this menu and exit
  file          (+) the file(s) to open
```
**Example:**
```bash
brave index.hmtl
# opens 'index.html' in the Brave Browser
```
**Dependencies:** `echo`, `open`, [Brave Browser](https://brave.com/)

**Compatibility:** _macOS_ only

<hr>

<h3 id="cf">
	<a href="#/bash_functions?id=cf" data-id="cf" class="anchor">
		<span>cf</span><h6 class="inline-subtitle">&nbsp;&nbsp;(count files)</h6>
	</a>
</h3>
Count files in a directory and its subdirectories.

**Usage:**
```
cf [-h] [DIRECTORY]
  -h, --help    show this menu and exit
  directory     the directory in which to count files (default: .)
```
**Example:**
```bash
cf
```
```
123 files
```
**Dependencies:** `echo`, `find`, `wc`, `xargs`

**Compatibility:** _macOS_ and _linux_

<hr>

<h3 id="chrome">
	<a href="#/bash_functions?id=chrome" data-id="chrome" class="anchor">
		<span>chrome</span>
	</a>
</h3>
Open a file in Google Chrome.

**Usage:**
```
chrome [-h] FILE...
  -h, --help    show this menu and exit
  file          (+) the file(s) to open
```
**Example:**
```bash
chrome index.html
# opens 'index.html' in Google Chrome
```
**Dependencies:** `echo`, `open`, [Google Chrome](https://www.google.com/chrome/)

**Compatibility:** _macOS_ only

<hr>

<h3 id="common">
	<a href="#/bash_functions?id=common" data-id="common" class="anchor">
		<span>common</span>
	</a>
</h3>
Show the most commonly used commands.

**Usage:**
```
common [-h] [NUM]
  -h, --help    show this menu and exit
  num           the number of commands to show (default: 10)
```
**Example:**
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

<hr>

<h3 id="cplc">
	<a href="#/bash_functions?id=cplc" data-id="cplc" class="anchor">
		<span>cplc</span><h6 class="inline-subtitle">&nbsp;&nbsp;(copy last command)</h6>
	</a>
</h3>
Copy previous command to the macOS clipboard.

**Usage:**
```
cplc [-h]
  -h, --help    show this menu and exit
```
**Example:**
```bash
cp ~/konphig/.bashrc ~
cplc
# copies 'cp ~/konphig/.bashrc ~' to the macOS keyboard
```
**Dependencies:** `echo`, `history`, `tail`, `head`, `pbcopy`

**Compatibility:** _macOS_ only

<hr>

<h3 id="del">
	<a href="#/bash_functions?id=del" data-id="del" class="anchor">
		<span>del</span>
	</a>
</h3>
Remove files at random.

**Usage:**
```
del [-h] [NUM]
  -h, --help    show this menu and exit
  num           the number of files to remove (default: 1)
```
**Example:**
```bash
cf
# 10 files
del 2
cf
# 8 files
```
**Dependencies:** `echo`, `rm`, `seq`

**Compatibility:** _macOS_ and _linux_

<hr>

<h3 id="dive">
	<a href="#/bash_functions?id=dive" data-id="dive" class="anchor">
		<span>dive</span>
	</a>
</h3>
Follow a directory tree down to its childmost subdirectory.

**Usage:**
```
dive [-h] DIRECTORY
  -h, --help    show this menu and exit
  directory     the directory into which to dive
```
**Example:**
```bash
pwd
# /
tree
# .
# └── dir0
#     └── dir1
#         └── dir2
#             └── dir3
#                 └── dir4
dive dir0
pwd
# /dir0/dir1/dir2/dir3/dir4
```
**Dependencies:** `echo`, `basename`, `cd`, `pwd`

**Compatibility:** _macOS_ and _linux_

<hr>

<h3 id="down">
	<a href="#/bash_functions?id=down" data-id="down" class="anchor">
		<span>down</span>
	</a>
</h3>
Go down a directory.

**Usage:**
```
down [-h] [NUM]
  -h, --help    show this menu and exit
  num           the number of directories to go down (default: 1)
```
**Example:**
```bash
pwd
# /dir0/dir1/dir2/dir3/dir4
up 3
pwd
# /dir0/dir1
down
pwd
# /dir0/dir1/dir2
down 2
pwd
# /dir0/dir1/dir2/dir3/dir4
```
**Dependencies:** `echo`, `pwd`, `cd`, `sed`, `seq`

**Compatibility:** _macOS_ and _linux_

<hr>

<h3 id="dp">
	<a href="#/bash_functions?id=dp" data-id="dp" class="anchor">
		<span>dp</span><h6 class="inline-subtitle">&nbsp;&nbsp;(different prompt)</h6>
	</a>
</h3>
Change to a different prompt.

**Usage:**
```
dp [-h] [NUM]
  [num]    the prompt index

Available prompts:
  default: full prompt with face
  1: minimalist
  2: date only
  3: date and pwd
  4: mood based on last command
  5: date and git prompt
  6: comment box
```
**Example:**
```bash
# change to a minimal prompt
dp 1
# change to a verbose prompt
dp 3
# change to a mood-prompt based on the exit code of the previous command
dp 4
```
**Dependencies:** `echo`, `git`

**Compatibility:** _macOS_ and _linux_

<hr>

<h3 id="duf">
	<a href="#/bash_functions?id=duf" data-id="duf" class="anchor">
		<span>duf</span><h6 class="inline-subtitle">&nbsp;&nbsp;(disk usage by filetype)</h6>
	</a>
</h3>
Get disk usage for specific filetype.

**Usage:**
```
duf [-h] FILETYPE
  -h, --help    show this menu and exit
  filetype      the filetype for which to get disk usage
```
**Example:**
```bash
duf sh
```
```
sh: 19K
```
```bash
duf py md sh
```
```
sh: 19K
md: 145K
py: 163K
```
**Dependencies:** `echo`, `find`, `xargs`, `gdu` or `du`, `tail`, `read`, `shift`

**Compatibility:** _macOS_ and _linux_

<hr>

<h3 id="extract">
	<a href="#/bash_functions?id=extract" data-id="extract" class="anchor">
		<span>extract</span>
	</a>
</h3>
Extract compressed and zipped files automatically.

**Usage:**
```
extract [-h] FILE...
  -h, --help    show this menu and exit
  file          (+) the file(s) to extract
```
**Example:**
```bash
# extract a tarball
extract mytarball.tar.gz
# extract a zip file
extract myzipfile.zip
# extract an XZ archive
extract myarchive.xz
# extract a Gzip archive
extract myarchive.gz
# extract a Bzip2 archive
extract myarchive.bz2
```
**Dependencies:** `echo`, `tar`, `bunzip2`, `unrar`, `gunzip`, `unzip`, `uncompress`

**Compatibility:** _macOS_ and _linux_

<hr>

<h3 id="gb">
	<a href="#/bash_functions?id=gb" data-id="gb" class="anchor">
		<span>gb</span><h6 class="inline-subtitle">&nbsp;&nbsp;(git branch)</h6>
	</a>
</h3>
Get the current git branch.

**Usage:**
```
gb [-h]
  -h, --help    show this menu and exit
```
**Example:**
```bash
gb
```
```
master
```
**Dependencies:** `echo`, `git`, `grep`, `cut`

**Compatibility:** _macOS_ and _linux_

<hr>

<h3 id="get">
	<a href="#/bash_functions?id=get" data-id="get" class="anchor">
		<span>get</span>
	</a>
</h3>
Select files at random from a directory.

**Usage:**
```
get [-h] [NUM]
  -h, --help    show this menu and exit
  num           the number of random files to get (default: 1)
```
**Example:**
```bash
ls
# file0.txt file1.txt file2.txt file3.txt
get
# file3.txt
get 2
# file0.txt file3.txt
```
**Dependencies:** `echo`, `seq`

**Compatibility:** _macOS_ and _linux_

<hr>

<h3 id="getlocation">
	<a href="#/bash_functions?id=getlocation" data-id="getlocation" class="anchor">
		<span>getlocation</span>
	</a>
</h3>
Get location for your public IP address.

**Usage:**
```
getlocation [-h]
  -h, --help    show this menu and exit
```
**Example:**
```bash
getlocation
```
```
IP: 105.38.27.128
Location: San Francisco, CA, USA
```
**Dependencies:** `echo`, `dig` `lynx`, `grep`, `cut`, `read`

**Compatibility:** _macOS_ and _linux_

<hr>

<h3 id="makes">
	<a href="#/bash_functions?id=makes" data-id="makes" class="anchor">
		<span>makes</span><h6 class="inline-subtitle">&nbsp;&nbsp;(make script)</h6>
	</a>
</h3>
Make a shell script out of previous commands.

**Usage:**
```
makes [-h] [NUM] [SCRIPT]
  -h, --help    show this menu and exit
  num           the number of previous commands to use (default: 1)
  script        the name of the new script (default: script.sh)
```
**Example:**
```bash
ls
# file0.txt file1.txt
makes                  # makes a script of the previous command (`ls`) in a script called `./script.sh`
ls
# file0.txt file1.txt script.sh
cat script.sh
# ls
```
```bash
clear
ls
# file0.txt file1.txt
makes 2                # makes a script of the previous two commands (`clear` & `ls`) in a script called `./script.sh`
ls
# file0.txt file1.txt script.sh
cat script.sh
# clear
# ls
```
```bash
clear
ls
# file0.txt file1.txt
makes 2 test.sh        # makes a script of the previous two commands (`clear` & `ls`) in a script called `test.sh`
ls
# file0.txt file1.txt test.sh
cat test.sh
# clear
# ls
```
**Dependencies:** `fc`, `echo`, `gshuf` or `shuf`, `head`, `tac`, `rm`, `chmod`

**Compatibility:** _macOS_ and _linux_

<hr>

<h3 id="merge">
	<a href="#/bash_functions?id=merge" data-id="merge" class="anchor">
		<span>merge</span>
	</a>
</h3>
Join a list of strings with a common character.

**Usage:**
```
merge [-h] CHAR [WORD...]
  -h, --help    show this menu and exit
  char          the character to join with
  word          (+) the word(s) to join
```
**Example:**
```bash
merge ',' a b 'c d' e
```
```
a,b,c d,e
```
**Dependencies:** `echo`, `typeset`, `shift`

**Compatibility:** _macOS_ and _linux_

<hr>

<h3 id="over">
	<a href="#/bash_functions?id=over" data-id="over" class="anchor">
		<span>over</span>
	</a>
</h3>
Move up and over when changing directories.

**Usage:**
```
over [-h] [NUM] DIRECTORY
  -h, --help    show this menu and exit
  num           the number of directories to go up before going over (default: 1)
  directory     the directory to go over to
```
**Example:**
```bash
pwd
# /
tree
# .
# ├── dirA
# │   ├── dirB
# └── dirC
#     └── dirD
cd dirA
over dirC
# /dirC
cd dirD
over 2 dirA/dirB
# /dirA/dirB
```
**Dependencies:** `echo`, `seq`, `cd`, `pwd`

**Compatibility:** _macOS_ and _linux_

<hr>

<h3 id="pathadd">
	<a href="#/bash_functions?id=pathadd" data-id="pathadd" class="anchor">
		<span>pathadd</span><h6 class="inline-subtitle">&nbsp;&nbsp;(path add)</h6>
	</a>
</h3>
Add to the PATH variable.

**Usage:**
```
pathadd [-h] [-a] DIRECTORY
  -h, --help     show this menu and exit
  -a, --after    if included, append to the PATH, rather than prepend
  directory      the directory to add to the PATH
```
**Example:**
```bash
pathadd /new/path/       # prepends to PATH
pathadd -a /new/path/    # appends to PATH
```
**Dependencies:** `echo`, `printf`, `awk`, `cd`, `grep`

**Compatibility:** _macOS_ and _linux_

<hr>

<h3 id="pathrm">
	<a href="#/bash_functions?id=pathrm" data-id="pathrm" class="anchor">
		<span>pathrm</span><h6 class="inline-subtitle">&nbsp;&nbsp;(path remove)</h6>
	</a>
</h3>
Remove from the PATH variable

**Usage:**
```
pathrm [-h] DIRECTORY...
  -h, --help     show this menu and exit
  directory      the director(y|ies) to remove from the PATH
```
**Example:**
```bash
pathrm /bad/path/
```
**Dependencies:** `echo`, `grep`

**Compatibility:** _macOS_ and _linux_

<hr>

<h3 id="per">
	<a href="#/bash_functions?id=per" data-id="per" class="anchor">
		<span>per</span><h6 class="inline-subtitle">&nbsp;&nbsp;(percentage)</h6>
	</a>
</h3>
Show percentage of each filetype in the current directory.

**Usage:**
```
per [-h]
  -h, --help    show this menu and exit
```
**Example:**
```bash
per
```
```
md:    1  (50.00%)
html:  1  (50.00%)
```
**Dependencies:** `echo`, `read`, `printf`, `sed`, `bc`, `column`

**Compatibility:** _macOS_ and _linux_

<hr>

<h3 id="randimal">
	<a href="#/bash_functions?id=randimal" data-id="randimal" class="anchor">
		<span>randimal</span><h6 class="inline-subtitle">&nbsp;&nbsp;(random animal)</h6>
	</a>
</h3>
Draw a random speech animal.

**Usage:**
```
randimal [-h] [CONTENT]
  -h, --help    show this menu and exit
  content       the content to use in the randimal's speech
```
**Example:**
```bash
randimal
```
```
 _________________________________ 
/ Year, n.:                       \
|                                 |
| A period of three hundred and   |
| sixty-five disappointments.     |
|                                 |
| -- Ambrose Bierce, "The Devil's |
\ Dictionary"                     /
 --------------------------------- 
  \
   \ ,   _ ___.--'''`--''//-,-_--_.
      \`"' ` || \\ \ \\/ / // / ,-\\`,_
     /'`  \ \ || Y  | \|/ / // / - |__ `-,
    /@"\  ` \ `\ |  | ||/ // | \/  \  `-._`-,_.,
   /  _.-. `.-\,___/\ _/|_/_\_\/|_/ |     `-._._)
   `-'``/  /  |  // \__/\__  /  \__/ \
        `-'  /-\/  | -|   \__ \   |-' |
          __/\ / _/ \/ __,-'   ) ,' _|'
         (((__/(((_.' ((___..-'((__,'
```
```bash
randimal "hello, there"
```
```
 ______________ 
< Hello, there >
 -------------- 
  \
   \
       ___  
     {~._.~}
      ( Y )
     ()~*~()   
     (_)-(_)
```
**Dependencies:** `echo`, `fortune`, `cowsay`, `tail`, `tr`, `gshuf`, `lolcat`

**Compatibility:** _macOS_ only

<hr>

<h3 id="random">
	<a href="#/bash_functions?id=random" data-id="random" class="anchor">
		<span>random</span>
	</a>
</h3>
Generate a random string of specified length, great for passwords.

**Usage:**
```
random [-h] [NUM]
  -h, --help    show this menu and exit
  num           the length of the generated string (default: 30)
```
**Example:**
```bash
random
```
```
uqQcsAuxIChv5yZFH8l21Ht5iMSXH1
```
```bash
random 5
```
```
cWEsS
```
**Dependencies:** `echo`, `gshuf` or `shuf`

**Compatibility:** _macOS_ and _linux_

<hr>

<h3 id="silent">
	<a href="#/bash_functions?id=silent" data-id="silent" class="anchor">
		<span>silent</span>
	</a>
</h3>
Run a command silently in the background.

**Usage:**
```
silent [-h] CMD [ARGS...]
  -h, --help    show this menu and exit
  cmd           the command to run silently
  args          (+) the args for cmd
```
**Example:**
```bash
silent scp myfile.txt user@remotehost:/path/to/destination
```
**Dependencies:** `echo`, `shift`

**Compatibility:** _macOS_ and _linux_

<hr>

<h3 id="snag">
	<a href="#/bash_functions?id=snag" data-id="snag" class="anchor">
		<span>snag</span>
	</a>
</h3>
Snag most recently downloaded files to the current directory.

**Usage:**
```
snag [-h] [NUM]
  -h, --help    show this menu and exit
  num           the number of files to snag (default: 1)
```
**Dependencies:** `echo`, `seq`, `mv`, `head`, `ls`

**Compatibility:** _macOS_ only

<hr>

<h3 id="up">
	<a href="#/bash_functions?id=up" data-id="up" class="anchor">
		<span>up</span>
	</a>
</h3>
Go up a directory.

**Usage:**
```
up [-h] [NUM]
  -h, --help    show this menu and exit
  num           the number of directories to go up (default: 1)
```
**Example:**
```bash
pwd
# /dir0/dir1/dir2/dir3/dir4/dir5
up
pwd
# /dir0/dir1/dir2/dir3/dir4
up 3
pwd
# /dir0/dir1
```
**Dependencies:** `echo`, `cd`, `pwd`

**Compatibility:** _macOS_ and _linux_

<hr>

<h3 id="venv?">
	<a href="#/bash_functions?id=venv?" data-id="venv?" class="anchor">
		<span>venv?</span><h6 class="inline-subtitle">&nbsp;&nbsp;(virtual environment active?)</h6>
	</a>
</h3>
Detect if a virtual environment is active.

**Usage:**
```
venv? [-h]
  -h, --help    show this menu and exit
```
**Example:**
```bash
venv?
# false
source myenv/bin/activate
venv?
# true
```
**Dependencies:** `echo`

**Compatibility:** _macOS_ and _linux_

<hr>

<h3 id="venvfix">
	<a href="#/bash_functions?id=venvfix" data-id="venvfix" class="anchor">
		<span>venvfix</span><h6 class="inline-subtitle">&nbsp;&nbsp;(virtual environment fix)</h6>
	</a>
</h3>
Fix broken virtual environments.

**Usage:**
```
venvfix [-h]
  -h, --help    show this menu and exit
```
**Example:**
```
venvfix
```
```
Ensure the root of the broken virtualenv:
    ~/venv
‼️  Press Enter if you are not sure (y/N) y
♻️  Removing old symbolic links......
    ...
💫  Creating new symbolic links......
    ...
🎉  Done!
```
**Dependencies:** `echo`, `dirname`, `command`, `which`, `tail`, `find`, [virtualenv](https://pypi.org/project/virtualenv/)

**Compatibility:** _macOS_ and _linux_

<hr>
<div style="text-align:center">
	<a class="edit-link" href="https://github.com/wcarhart/docs/blob/master/docs/konphig/bash_functions.md" target="_blank"><i class="fas fa-edit"></i> Edit this page</a>
</div>