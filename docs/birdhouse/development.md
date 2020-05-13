# Development
Birdhouse is under active development. If you notice a bug or would like to request a new feature, please [open a new issue on Github](https://github.com/wcarhart/birdhouse/issues/new).

<img alt="CI" src="https://github.com/wcarhart/birdhouse/workflows/CI/badge.svg">

### Contributing
If you'd like to contribute to birdhouse, please use the following steps to get started.

1. Fork or clone the birdhouse repository.
```bash
git clone https://github.com/wcarhart/birdhouse.git ~/birdhouse
```

2. Implement your changes or updates.

3. Run `shellcheck` on the file `birdhouse` locally.
```bash
cd ~/birdhouse
shellcheck birdhouse
```

4. Once `shellcheck` passes, open a [PR on GitHub](https://github.com/wcarhart/birdhouse/pull/new/master). The CI will run the same tests you ran locally to confirm that everything looks good.

<hr>
<div style="text-align:center">
	<a class="edit-link" href="https://github.com/wcarhart/docs/blob/master/docs/birdhouse/development.md" target="_blank"><i class="fas fa-edit"></i> Edit this page</a>
</div>