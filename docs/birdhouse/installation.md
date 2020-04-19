# Installation

### Homebrew
Birdhouse is installable via the [Homebrew package manager](https://brew.sh).
```bash
brew install wcarhart/tools/birdhouse
```

You can also tap the repository, but beware of name collisions.
```bash
brew tap wcarhart/tools
brew install birdhouse
```
*[What is a Homebrew tap?](https://stackoverflow.com/questions/34408147/what-does-brew-tap-mean)*

### Manual installation
If you don't use Homebrew, you can also install birdhouse manually by cloning the birdhouse repository.
```bash
git clone https://github.com/wcarhart/birdhouse.git ~/birdhouse
chmod +x ~/birdhouse/birdhouse
```
You'll also need to install [koi](https://github.com/wcarhart/koi), either manually or via Homebrew.

If you want the `birdhouse` command to be available globally, you'll have to move the script `~/birdhouse/birdhouse` to a location that is loaded in your `PATH` variable. *[What is my `PATH` variable?](https://superuser.com/questions/284342/what-are-path-and-other-environment-variables-and-how-can-i-set-or-use-them)*

### Dependencies
**jq**

Birdhouse uses [jq](https://github.com/stedolan/jq) to parse Twitter API responses, which are in JSON. `jq` is included on many systems by default, but if it is not, you can install it with `brew install jq`. Birdhouse will check for `jq` before it runs.

**koi**

Birdhouse uses [koi](https://github.com/wcarhart/koi) to parse command line arguments. If you install via Homebrew, koi should be installed automatically. If it is not, you can install it with `brew install wcarhart/tools/koi`, or install it manually from [the repository](https://github.com/wcarhart/koi).

### Using birdhouse
Once birdhouse is installed, the `birdhouse` command should be available immediately. Open a terminal and type `birdhouse help` to get started. In order for birdhouse to communicate with Twitter, you'll have to run `birdhouse init` (see [Authentication](/authentication)).

<hr>
<div style="text-align:center">
	<a class="edit-link" href="https://github.com/wcarhart/docs/blob/master/docs/birdhouse/installation.md" target="_blank"><i class="fas fa-edit"></i> Edit this page</a>
</div>