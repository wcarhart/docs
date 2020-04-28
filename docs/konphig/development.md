# Development
Konphig is under active development. If you notice a bug or would like to request a new feature, please [open a new issue on Github](https://github.com/wcarhart/konphig/issues/new).

### Contributing
If you'd like to contribute to konphig, please use the following steps to get started.

1. Fork or clone the konphig repository. For more information on how to install globally, see [Installation](/installation).
```bash
git clone https://github.com/wcarhart/konphig.git ~/konphig
```

2. Implement your changes or updates.

3. Run `shellcheck` on the Bash functions locally.
```bash
cd ~/konphig
shellcheck functions/macOS/*
shellcheck functions/linux/*
```

4. Once `shellcheck` passes, open a [PR on GitHub](https://github.com/wcarhart/konphig/pull/new/master). The CI will run the same tests you ran locally to confirm that everything looks good.

<hr>
<div style="text-align:center">
	<a class="edit-link" href="https://github.com/wcarhart/docs/blob/master/docs/konphig/development.md" target="_blank"><i class="fas fa-edit"></i> Edit this page</a>
</div>