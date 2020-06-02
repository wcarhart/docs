# Git aliases

## Print all Git aliases

| Alias | Meaning | Description |
|:-----:|:-------:|-------------|
| `alias` | `! git config --get-regexp ^alias\\. \| sed -e s/^alias\\.// -e s/\\ /\\ =\\ /` | Print all Git aliases. |

## Compound Git commands

| Alias | Meaning | Description |
|:-----:|:-------:|-------------|
| `a` | `!git add . && git status` | Add the current directory to the index and print the status. |
| `aa` | `!git add . && git add -u . && git status` | Add the current directory to the index (while updating tracked files) and print the status. |
| `ac` | `!git add . && git commit` | Add and commit the current directory to the local repository. |
| `acm` | `!git add . && git commit -m` | Add and commit (with a message from the command line) the current directory to the local repository. |
| `au` | `!git add -u . && git status` | Update tracked files from the current directory to the idnex and print the status. |
| `m` | `!git add -A && git commit -m` | Add and commit (with a message from the command line) all changed files to the local repository. |
| `discard` | `!git clean -df && git checkout --` | Discard local changes in the current branch. |

## Helpful Git shortcuts

| Alias | Meaning | Description |
|:-----:|:-------:|-------------|
| `b` | `branch` | Branch. |
| `c` | `commit` | Commit. |
| `ca` | `commit --amend` | Amend to the last commit. |
| `cb` | `checkout -b` | Checkout a new branch. |
| `ch` | `checkout` | Checkout. |
| `cm` | `commit -m` | Commit, with a message from the command line. |
| `d` | `diff` | Diff. |
| `l` | `log --graph --all --pretty=format:'%C(yellow)%h%C(cyan)%d%Creset %s %C(white)- %an, %ar%Creset'` | Show commits as a tree graph. |
| `last` | `log -1 HEAD` | Show the last commit. |
| `lg` | `log --color --graph --pretty=format:'%C(bold white)%h%Creset -%C(bold green)%d%Creset %s %C(bold green)(%cr)%Creset %C(bold blue)<%an>%Creset' --abbrev-commit --date=relative` | Show commits as a tree graph with author highlighted. |
| `llg` | `log --color --graph --pretty=format:'%C(bold white)%H %d%Creset%n%s%n%+b%C(bold blue)%an <%an>%Creset %C(bold green)%cr (%ci)' --abbrev-commit` | Show commits as a tree graph with full commit hashes. |
| `master` | `checkout master` | Checkout the master branch locally. |
| `s` | `status` | Status. |
| `unstage` | `reset HEAD -` | Unstage recently added files from the index. |

## Nifty Git tools

| Alias | Meaning | Description |
|:-----:|:-------:|-------------|
| `leaderboard` | `shortlog -sn --all --no-merges` | See who's committed the most to a repo. |
| `words` | `diff --word-diff` | See the git diff for words only. |
| `recent` | `for-each-ref --count=3 --sort=-committerdate refs/heads/ --format="%(refname:short)"` | Get the three most recently updated branches. |
| `sprint` | `log --all --since='2 weeks' --oneline --no-merges` | Get all the commits in the last sprint (2 week period). |
| `lsprint` | `log --all --since='3 weeks' --oneline --no-merges` | Get all the commits in the last longer sprint (3 week period). |
| `recap` | ``!git log --all --oneline --no-merges --author=`git config user.email` `` | See all my commits in a repo. |
| `today` | ``!git log --since=00:00:00 --all --no-merges --oneline --author=`git config user.email` `` | See all my commits in a repo today. |
| `changelog` | ``!git log --oneline --no-merges `git describe --tags`..`` | Generate a changelog since the last tagged release. |
| `upstream` | `!git log --oneline --no-merges ..origin/$(git branch \| grep \\* \| cut -d ' ' -f2)` | Check what changes you're about to pull from the current branch in the remote. |
| `local` | `!git log --oneline --no-merges origin/$(git branch \| grep \\* \| cut -d ' ' -f2)..HEAD` | Review your local commits before a push. |
| `graph` | `log --graph --all --decorate --stat --date=iso` | Graph complex logs. |
| `undo` | `reset HEAD~1 --mixed` | Undo the last commit. |
| `tidy` | `"!f() { git fetch ; git branch --merged "${1:-master}" \| grep -v " ${1:-master}$" \| xargs git branch -d; }; f"` | Remove local branches that do not exist in the remote. |
| `all` | `!git submodule foreach git pull origin master` | Pull all submodules. |
| `default` | `"!f() { git remote show \"${1:-origin}\" \| grep \"HEAD branch\" \| cut -d \":\" -f 2; }; f"` | Get the default branch. |

<hr>
<div style="text-align:center">
	<a class="edit-link" href="https://github.com/wcarhart/docs/blob/master/docs/konphig/git_aliases.md" target="_blank"><i class="fas fa-edit"></i> Edit this page</a>
</div>
