# Parsing arguments
!> Before starting this section, make sure you've read [using koi](/using_koi) and [registering arguments](/registering_arguments).

After registering arguments with `__addarg`, koi parses arguments with the `__parseargs` function.

## Using __parseargs

Using `__parseargs` is very simple. It's purpose is to parse args that are passed into the function, and then determine what to do with them based on the arguments that have been registered with `__addarg`.
```bash
__parseargs "$@"
```

When you use `__parseargs`, koi reads in argument values into _variables named after the alphanumeric version of the registered long option_ for the argument. This means that if the long option is `--myargument`, the value of the parsed argument will be available in the variable `$myargument`.

!> **Note**<br>`__parseargs` must be called after all `__addarg` statements.

## Dealing with variables
**Variables defined by __parseargs are declared in the global scope.** If you define an argument `--option`, the variable `$option` will be available throughout your script.

**Variables defined by __parseargs are alphanumeric.** If you define a long option as `--myargument`, the variable will be `$myargument` and not `$--myargument`. This is also why _long options cannot start with a number_, because that would produce an invalid Bash variable.

## Dealing with arrays
**Positionalarray and storearray arguments parsed by __parseargs will produce array variables.** Unlike _storevalue_ and _positionalvalue_, parsing _storearray_ and _positionalarray_ arguments will produce array variables. This means that if you register an argument with a long option of `--myargument` and an action of `storearray`, then the variable `$myargument` would be an array that you could iterate over with `${myargument[@]}`.

## Parsing joint arguments
Koi can also parse joint arguments. This means that the joint options `-abcd` will be parsed as `-a -b -c -d`. If one of these options had an argument, koi can still parse it provided that the argument is the last in the joint options.
```bash
mycommand -abcd arg
```
_Will be parsed as:_
```bash
mycommand -a -b -c -d arg
```

!> **Warning**<br>Be careful not to nest functions that both parse arguments with `__parseargs`. [Why can't I nest functions that parse arguments?](/faq?id=why-can39t-i-nest-functions-that-parse-arguments)

<hr>
<div style="text-align:center">
	<a class="edit-link" href="https://github.com/wcarhart/docs/blob/master/docs/koi/parsing_arguments.md" target="_blank"><i class="fas fa-edit"></i> Edit this page</a>
</div>