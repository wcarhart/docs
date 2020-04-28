# Installation
To install konphig, use the following:
1. Install `kn` with [Homebrew](https://brew.sh).
```bash
brew install wcarhart/tools/kn
```
2. Clone this repository.
```bash
git clone https://github.com/wcarhart/konphig.git ~/konphig
```
3. Initialize `kn` to point to your local repository (if you cloned konphig to somewhere other than `~/konphig`, make sure you pass in the correct path).
```bash
kn init ~/konphig
```
4. Install konphig via `kn`.
```bash
kn install
```
5. To complete the installation, the final step is to source your `.bashrc`.
```bash
source ~/.bashrc
```

Konphig should now be installed! You can interact with konphig via the `kn` CLI. To get started, use `kn --help` (see [kn](/kn)).

<hr>
<div style="text-align:center">
	<a class="edit-link" href="https://github.com/wcarhart/docs/blob/master/docs/konphig/installation.md" target="_blank"><i class="fas fa-edit"></i> Edit this page</a>
</div>