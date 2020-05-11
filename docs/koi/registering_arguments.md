# Registering arguments
!> Before starting this section, make sure you've read [Using koi](/using_koi).

To allow a function to use command line arguments, you register the arguments using koi's `__addarg` command (short for _add argument_). Arguments are registered on a by-function basis, meaning that each individual function can have it's own registered arguments.

You can also add arguments to _argument groups_ (see [argument groups](/argument_groups)) and allow arguments to _depend on one another_ (see [dependent arguments](/dependent_arguments)).

## Using __addarg

`__addarg` takes _six required arguments_ (`shortoption`, `longoption`, `action`, `required?`, `default`, and `helptext`) and _one optional argument_ (`verifyingfunction`). The general anatomy of `__addarg` is shown below.
```bash
__addarg "shortoption" "longoption" "action" "required?" "default" "helptext" "verifyingfunction"
```

### Short options
Short options are single letter identifier for options. They are denoted by single dash followed by a single letter.

**Examples:** `-s`, `-h`, `-A`

**Restrictions:**
* must start with a single dash
* must end with a single letter
* must be unique among defined short options for a function
* required, but can be left blank (e.g. `''`)

### Long options
Long options are the full identifier for the option. They are denoted by two dashes followed by an alphanumeric word. The long option for a registered argument will the name of the variable that is created with the value of the argument. This means that if you register the option `--myoption`, the value of `--myoption`'s argument will be read into the variable `$myoption`.

**Examples:** `--help`, `--name` `--number`

**Restrictions:**
* must start with two dashes (except in the case of [positional arguments](/positional_arguments))
* must be alphanumeric, and cannot start with a number
* must be unique among defined long options for a function
* cannot be an illegal word (see [Are there any illegal names for registered options?](/faq?id=are-there-any-illegal-names-for-registered-options))
* required, and cannot be left blank

### Actions
The action for a registered argument describes what koi should do when the option is parsed. There are six available actions, consisting of `flag`, `storevalue`, `storearray`, `positionalvalue`, `positionalarray`, and `help`. These actions are described more in-depth in [Available actions](/available_actions). Here is a quick summary:
* `flag` store _true_ in a single variable
* `storevalue` store the option's argument in a single variable
* `storearray` store the option's argument in an array
* `positionalvalue` store the argument in a single variable
* `positionalarray` store the argument in an array
* `help` a special kind of flag which is used to show the help menu

**Restrictions:**
* must be a valid action from the list above
* required, and cannot be left blank

### Requireds
The required field describes whether or not an registered option is required, and thus can only be either _required_ or _optional_.

**Examples:** `required`, `optional`

**Restrictions:**
* must be either `required` or `optional`
* `help` options cannot be required
* required, and cannot be left blank

### Defaults
The default field describes what the default value for an optional argument should be if it is not included. Some arguments cannot have default values, such as those with `help` or `flag` actions.

**Examples:** `$(whoami)`, `10`

**Restrictions:**
* only works with `storevalue` options
* required, but can be left blank (e.g. `''`)

### Help texts
The help text for an option describes its purpose, and is printed in the generated help menu. Help text for `-h` and `--help` options is used as the help text for the whole function, rather than the `-h`/`--help` option itself.

**Examples:** `If included, will forcibly remove file`, `Output the result to stdout`

**Restrictions:**
* required, and cannot be left blank

### Verifying functions
Verifying functions are functions that are used to verify the argument after it is parsed. For instance, if you expect the value of your argument to be an integer, you could write a function to verify such, and register it as the argument's verifying function. For more information, see [Verifying arguments](/verifying_arguments).

The following verifying functions are included with koi by default:
* `__verifyfile` verify that a file exists
* `__verifydirectory` verify that a directory exists
* `__verifyfiletype FILETYPE` verify that a file exists and that is is of type _FILETYPE_

**Examples:** `__verifyfile`, `__myverifyingfunction`

**Restrictions:**
* must be a declared function
* `help` and `flag` options cannot have verifying functions
* should start with two underscores (`__`) *[Why do some functions need to start with two underscores?](/faq?id=why-do-some-functions-need-to-start-with-two-underscores)*
* optional, but if included, cannot be left blank

## Examples
Here are a few helpful examples for how to use `__addarg`. Please refer to [Examples](/examples) for more.

### Hit an HTTP endpoint
```bash
function hit_endpoint {
	__addarg "-h" "--help" "help" "optional" "" "Hit an HTTP endpoint"
	__addarg "-x" "--method" "storevalue" "optional" "GET" "The HTTP method to use" "__verify_http_method"
	__addarg "" "endpoint" "positionalvalue" "required" "" "The endpoint to hit"
	__parseargs "$@"

	curl -X "$method" "$endpoint"
}

function __verify_http_method {
	# verify that $1 is a valid HTTP method
	local available_methods=( GET POST PUT DELETE PATCH )
	local found=0
	local method
	for method in "${available_methods[@]}" ; do
		if [[ "$method" == "$1" ]] ; then found=1 ; break ; fi
	done
	if [[ $found -eq 0 ]] ; then
		__errortext "$koiname: err: invalid HTTP method, must be one of ${available_methods[@]}"
		return 1
	fi
}
```
[What is `__errortext` in this function?](/helpers?id=__errortext)

_Usage:_
```
hit_endpoint [-h] [-x METHOD] ENDPOINT
```

### Build a find and replace command
```bash
function replace_in_file {
	__addarg "-h" "--help" "help" "optional" "" "Find and replace in a file"
	__addarg "" "file" "positionalarray" "required" "" "The file(s) to find and replace in" "__verifyfile"
	__addarg "-r" "--replace" "storearray" "optional" "" "The text to replace"
	__addarg "-w" "--with" "storearray" "optional" "" "The text to replace with"
	__addarg "-s" "--skip" "flag" "optional" "" "Skip the file if it does not exist"
	__parseargs "$@"

	if [[ "${#replace[@]}" != "${#with[@]}" ]] ; then
		__errortext "$koiname: err: 'replace' and 'with' arrays must be of the same length"
		return 1
	fi

	for f in "${file[@]}" ; do
		if [[ ! -f "$f" ]] ; then
			if [[ $skip -eq 1 ]] ; then
				continue
			else
				__errortext "$koiname: err: no such file '$f'"
				return 1
			fi
		fi
		for i in "${!replace[@]}" ; do
			sed "s/${replace[$i]}/${with[$i]}/g" < "$f" > temp
			mv -f temp > "$f"
		done
	done
}
```
[What is `__errortext` in this function?](/helpers?id=__errortext)

[What is `__verifyfile` in this function?](/helpers?id=__verifyfile)

_Usage:_
```
replace_in_file [-r REPLACE+] [-w WITH+] [-s] FILE...
```

<hr>
<div style="text-align:center">
	<a class="edit-link" href="https://github.com/wcarhart/docs/blob/master/docs/koi/registering_arguments.md" target="_blank"><i class="fas fa-edit"></i> Edit this page</a>
</div>