# Usage
Chiller provides a simple set of commands to help manage Homebrew taps from GitHub repositories.

### change
Change the formula for local tap to a specific release in GitHub.
```
chiller change [-h] [-p PATH] -v VERSION [-n NAME] [-u USER] [-q] REPO 
  repo                     The repository's name 
  -p, --path PATH          Path to local Homebrew tap (optional) (default: the current directory)
  -v, --version VERSION    The release version 
  -n, --name NAME          The name of the Homebrew formula to update (optional) (default: $repo) 
  -u, --user USER          The repository's owner (optional) (default: the current user)
  -q, --quiet              If included, only print essential information (optional)
```

### get
Get a release tarball for a repository.
```
chiller get [-h] [-u USER] -v VERSION [-q] REPO 
  repo                     The repository's name 
  -u, --user USER          The repository's owner (optional) (default: the current user)
  -v, --version VERSION    The release version 
  -q, --quiet              If included, only print essential information (optional)
```

### help
Show the menu.
```
chiller help [-h] [-v] 
  -v, --verbose    Print verbose command documentation (optional)
```

### list
List all available commands.
```
chiller list [-h] [-d] 
  -d, --docs    If included, print command documentation (optional)
```

### pull
Pull the latest release for a repository and generate a SHA256 hash.
```
chiller pull [-h] [-u USER] -v VERSION [-s] [-q] REPO 
  repo                     The repository's name 
  -u, --user USER          The repository's owner (optional) (default: the current user)
  -v, --version VERSION    The release version 
  -s, --save               If included, do not remove tarball after it is downloaded (optional) 
  -q, --quiet              If included, only print essential information (optional) 
```
### sha
Generate a SHA256 hash.
```
chiller sha [-h] [-q] FILE 
  file           The file for which to generate a hash 
  -q, --quiet    If included, only print essential information (optional)
```

### update
Update the formula for a local tap to the latest release on GitHub.
```
chiller update [-h] [-p PATH] [-n NAME] [-u USER] [-q] REPO 
  repo               The repository's name 
  -p, --path PATH    Path to the local Homebrew tap (optional) (default: the current directory)
  -n, --name NAME    The name of the Homebrew formula to update (optional) (default: $repo) 
  -u, --user USER    The repository's owner (optional) (default: the current user)
  -q, --quiet        If included, only print essential information (optional)
```

<hr>
<div style="text-align:center">
	<a class="edit-link" href="https://github.com/wcarhart/docs/blob/master/docs/chiller/usage.md" target="_blank"><i class="fas fa-edit"></i> Edit this page</a>
</div>