# Installation

### Homebrew
Koi is installable via the [Homebrew package manager](https://brew.sh).
```bash
brew install wcarhart/tools/koi
```

You can also tap the repository, but beware of name collisions.
```bash
brew tap wcarhart/tools
brew install koi
```
*[What is a Homebrew tap?](https://stackoverflow.com/questions/34408147/what-does-brew-tap-mean)*

### Manual installation
If you don't use Homebrew, you can also install koi manually by cloning the koi repository.
```bash
git clone https://github.com/wcarhart/koi.git ~/koi
chmod +x ~/koi/koi
```

If you perform a manual install, you'll have to source the koi script from your cloned repository wherever you use koi. This means that instead of using `source koi` you'll have to use `source ~/koi/koi`.

### Using koi
Once koi is installed, you can start using it immediately. To do so, see [Using koi](/using_koi).

<hr>
<div style="text-align:center">
	<a class="edit-link" href="https://github.com/wcarhart/docs/blob/master/docs/koi/installation.md" target="_blank"><i class="fas fa-edit"></i> Edit this page</a>
</div>