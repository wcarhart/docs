<p align="center"><img alt="chiller logo" src="https://willcarhart.dev/docs/chiller/_media/logo.png" /></p>

<h1 align="center">chiller</h1>
<h5 align="center">🍺 Helpful GitHub repository and Homebrew tools</h5>
<div align="center">
  <span class="ghbns">
    <a class="github-button" href="https://github.com/wcarhart/chiller/subscription" data-icon="octicon-eye" data-size="large" data-show-count="true" aria-label="Watch wcarhart/chiller on GitHub">Watch</a>
  </span>
  <span class="ghbns">
    <a class="github-button" href="https://github.com/wcarhart/chiller" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star wcarhart/chiller on GitHub">Star</a>
  </span>
  <span class="ghbns">
    <a class="github-button" href="https://github.com/wcarhart/chiller/fork" data-icon="octicon-repo-forked" data-size="large" data-show-count="true" aria-label="Fork wcarhart/chiller on GitHub">Fork</a>
</span>
  <span class="ghbns">
    <a class="github-button" href="https://github.com/wcarhart" data-size="large" data-show-count="true" aria-label="Follow @wcarhart on GitHub">Follow @wcarhart</a>
  </span>
</div>

Chiller is a collection of helpful tools for managing [Homebrew](https://brew.sh) taps via [GitHub](https://github.com) repositories. Install with `brew install wcarhart/tools/chiller`.

## Example {docsify-ignore}

For example, suppose you had a new release in GitHub that you'd like to be available with Homebrew. You can easily update your new release in your tap:
```bash
pwd
# ~/mytap
chiller update mycooltool
# Updated formula for 'mycooltool' to latest (v2.0.0)
git push                   # push your local tap
brew upgrade mycooltool    # upgrade mycooltool
```
Or, perhaps you'd like to change to a specific version:
```bash
pwd
# ~/mytap
chiller change --version v1.0.0 mycooltool
# Changed formula for 'mycooltool' to v1.0.0
git push                   # push your local tap
brew upgrade mycooltool    # upgrade mycooltool
```
You can also easily generate SHA256 hashes:
```bash
chiller sha ./mycooltool
# 082784d0153fd64bedf80901391e53f0d8b1181f9394886b14154f81a4e48ffb
```
How does this work? To learn more, check out [Usage](/usage).

## Getting Started {docsify-ignore}
For help installing chiller, check out [Installation](/installation).

For command documentation, check out [Usage](/usage).

## Contributing {docsify-ignore}
Chiller is under active development and welcomes contributions. If you see a bug or would like to request a new feature, please [open a new issue on GitHub](https://github.com/wcarhart/chiller/issues/new).

If you'd like to contribute to chiller, please use the following steps to get started.

1. Fork or clone the chiller repository.
```bash
git clone https://github.com/wcarhart/chiller.git ~/chiller
```

2. Implement your changes or updates.

3. Run `shellcheck` on the file `chiller` locally.
```bash
cd ~/chiller
shellcheck chiller
```

4. Once `shellcheck` passes, open a [PR on GitHub](https://github.com/wcarhart/chiller/pull/new/master). The CI will run the same tests you ran locally to confirm that everything looks good.

## License {docsify-ignore}
Chiller is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).
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
	<a class="edit-link" href="https://github.com/wcarhart/docs/blob/master/docs/chiller/overview.md" target="_blank"><i class="fas fa-edit"></i> Edit this page</a>
</div>