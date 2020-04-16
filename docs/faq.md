# FAQ

### Why do some functions need to start with two underscores?
When koi uses subcommands, it uses the functions defined in the script as available subcommands. In order for koi to treat a function as internal and not display it as an available CLI subcommand, koi ignores functions that begin with an underscore (`_`) or a dash (`-`). Thus, if you are using subcommands, you can define a function whose name begins with two underscores and koi will treat it as internal.

### Why can't I nest functions that parse arguments?
When koi parses arguments, it builds a list of registered arguments and actual arguments in the global scope. When two functions try to parse arguments in the same scope, they both write to the list of registered arguments, which makes parsing arguments ambiguous. It is possible to get around this with the [`__cleararglists` function](/helpers?id=__cleararglists) (as is done in the [`help` function](/using_subcommands?id=help)), but doing so is not advised in most cases.

### Can koi parse joint options?
Yes, koi can parse joint options. For more information about parsing joint arguments, please see [Parsing joint arguments](/parsing_arguments?id=parsing-joint-arguments).

### Can koi parse mutually exclusive groups?
No, koi cannot parse currently parse mutually exclusive groups. However, for now you can register multiple flags and handle the exclusivity yourself in the body of your function. Parsing mutually exclusive groups is a planned feature in the future.

### Can I contribute to koi?
Yes, koi is under active development and welcomes contributions. For more information on how to get started, check out [Contributing](/development?id=contributing).

### Why is it called koi?
The original working name of the library was _Bashful Arg Parser_, which is a mouthful. This was shortened to _Bashful_, to which _coy_ is a synonym. _koi_ is a homophone of _coy_ and thus was chosen as the name.

<hr>
<div style="text-align:center">
	<a class="edit-link" href="https://github.com/wcarhart/wcarhart.github.io/docs/faq.md" target="_blank"><i class="fas fa-edit"></i> Edit this page</a>
</div>