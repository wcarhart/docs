# Positional Arguments
!> Before starting this section, make sure you've read [registering arguments](/registering_arguments) and [parsing arguments](/parsing_arguments).

Options can be helpful because their purpose is often stated in their name. For example, an argument called `--file` probably needs a path to a file. This is helpful to the end user of a script because they can deduce what arguments they need to provide.

However, what about in cases where the function's name explains its purpose? For example, if we had a function called `remove_files`, we probably wouldn't need to specify `--file file0.txt --file file1.txt`, as it's pretty apparent from the name `remove_files` that our arguments are going to be files.

## Positional arguments
**Positional arguments** are those which do not need to be preceded by a short or long option. A classic example of this is the [UNIX utility `cp`](http://linuxcommand.org/lc3_man_pages/cp1.html). `cp`, in the most general case, takes in two arguments, `SRC` and `DEST`, where `SRC` is the source file to copy and `DEST` is where to copy the file to. `SRC` and `DEST` are positinoal arguments.

Koi has two different kinds of positional arguments: _positionalvalue_ and _positionalarray_.

### positionalvalue
_positionalvalue_ arguments are the same as _storevalue_ arguments without a short or long name. If you register a _positionalvalue_ argument with the name `name` (notice how the long option of positional arguments does not start with `--`), koi will read the positional argument into the variable `$name`.

### positionalarray
_positionalarray_ arguments are the same as _storearray_ arguments without a short or long name. If you register a _positionalarray_ argument with the name `name` (notice how the long option of positional arguments does not start with `--`), koi will read the positional argument into the array variable `$name`, which can be iterated over with `${name[@]}`.

## Ambiguity
There are more restrictions with positional arguments because they can introduce ambiguity while parsing arguments. For instance, suppose you register two different optional positional arguments, but then only specify one value at the command line. Which of the two arguments should be parsed?

The following restrictions apply for positional arguments:
* There can be an _unlimited_ amount of required positional values.
* There can only be _one_ optional positional value.
* There can only be _one_ required positional array.
* There can only be _one_ optional positional array.
* There can not be a _mix_ of positional values and positional arrays.
* Positional values cannot have _default values_.
* Positional arrays cannot have _default values_.

## Examples
Here are a few helpful examples for how to use positional arguments. Please refer to [Examples](/examples) for more.

### Copy a set of files to a location
```bash
function copy_files {
	__addarg "-h" "--help" "help" "optional" "" "Copy a set of files to a location"
	__addarg "-d" "--destination" "storevalue" "required" "" "The destination location"
	__addarg "" "file" "storearray" "optional" "" "The file(s) to copy"
	__parseargs "$@"

	for f in "${file[@]}" ; do
		cp "$f" "$destination"
	done
}
```
_Usage:_
```
copy_files [-h] -d DESTINATION [file...]
```

### Get a tarball from GitHub
```bash
function get_tarball {
	__addarg "-h" "--help" "help" "optional" "" "Get a tarball from GitHub"
	__addarg "-u" "--user" "storevalue" "optional" "$(whoami)" "The GitHub user"
	__addarg "-v" "--version" "storevalue" "required" "" "The release version to grab"
	__addarg "" "repo" "positionalvalue" "required" "" "The repository to grab"
	__parseargs "$@"

	wget -q "https://github.com/${user}/${repo}/archive/${version}.tar.gz"
}
```
_Usage:_
```
get_tarball [-h] [-u USER] -v VERSION REPO
```

<hr>
<div style="text-align:center">
	<a class="edit-link" href="https://github.com/wcarhart/docs/blob/master/docs/koi/positional_arguments.md" target="_blank"><i class="fas fa-edit"></i> Edit this page</a>
</div>