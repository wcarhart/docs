# Caveats
Due to the fact that koi is written in Bash, its implementation comes with a few gotchas.

1. When koi defines a variable, it is in the global scope. Thus, if two different functions add a `--user` option and are called from one another, koi will malfunction. You cannot have a function `f1` that calls function `f2` where both `f1` and `f2` parse command line inputs via `__addarg` and `__parseargs`. A better approach is to parse all command line arguments in `f1` and then have `f1` call `f2`. For more information, see [Why can't I nest functions that parse arguments](/faq?id=why-can39t-i-nest-functions-that-parse-arguments)?

2. Because of the flexibility, and lack of protection, inherently built into Bash, the functions koi provides can all be overwritten if you don't like their implementation. For more information, see [Helpers](/helpers).

<hr>
<div style="text-align:center">
	<a class="edit-link" href="https://github.com/wcarhart/docs/blob/master/docs/koi/caveats.md" target="_blank"><i class="fas fa-edit"></i> Edit this page</a>
</div>