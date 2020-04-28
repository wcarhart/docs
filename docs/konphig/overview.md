<!-- <p align="center"><img alt="konphig logo" src="https://willcarhart.dev/docs/konphig/_media/logo.png" /></p> -->
<p align="center"><img alt="konphig logo" src="_media/logo.png" /></p>

<h1 align="center">konphig</h1>
<h5 align="center">Config files for safe keeping 😏</h5>

Konphig contains custom settings for common UNIX tools. You can think of it as a dotfiles repo, with some extra bells and whistles.

Konphig is easy to install. To get started, checkout [Installation](/installation).

## Features
Konphig comes packed out of the box with tons of cool functionality. Here are a few highlights.

### A powerful CLI
_Pull multiple registered repositories at once_
```bash
kn repo --pull
```
```
Pulling birdhouse...
Pulling koi...
Pulling lurker...
```
_Add Homebrew, Yarn, and other packages to track in version control_
```bash
kn new --brew yarn
```
```
Added brew formula 'yarn' to konphig
```

### Helpful Bash functions
_Join a list of strings_
```bash
merge '-' 'a b' c d
```
```
a b-c-d
```
_Add a permanent alias on the fly_
```bash
adda e echo
e 'Hello, konphig!'
```
```
Hello, konphig!
```
_Move up and down directories_
```bash
pwd
# /dir0/dir1/dir2/dir3/dir4
up 4
# /dir0
down 2
# /dir0/dir1/dir2
```

### Clever Git extras
_Remove local branches not present in the remote_
```bash
git clean
```
_Review local commits not present in the current branch in the remote_
```bash
git local
```
_Get the commits for the last sprint_
```bash
git sprint
```
_Get the primary authors for the repository_
```bash
git leaderboard
```
_Get all available git aliases_
```bash
git alias
```

### Much, much more
_Reset the macOS Touch Bar_
```bash
resetbar
```
_Get your public IP address_
```bash
publicip
```
_Change your command prompt on the fly_
```bash
dp 5    # change to 'different prompt' #5
```

## Author
[Will Carhart](https://github.com/wcarhart) is the author of konphig. Check the [Author](/author) section for more information.

## Contributing
Want to contribute? Check out [Development](/development).

## License
Konphig is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).
```
MIT License

Copyright (c) 2020 Will Carhart

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

<hr>
<div style="text-align:center">
	<a class="edit-link" href="https://github.com/wcarhart/docs/blob/master/docs/konphig/overview.md" target="_blank"><i class="fas fa-edit"></i> Edit this page</a>
</div>