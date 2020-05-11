# Dependent Arguments
!> Before starting this section, make sure you've read [registering arguments](/registering_arguments) and [parsing arguments](/parsing_arguments).

Sometimes it is helpful to have an argument's usage be tied to another argument's presence. Koi accomplishes this with _dependent arguments_.

?><b>Note</b><br>A _dependent argument_ is one whose presence, or lack thereof, is tied to the presence of another argument (refered to as the _dependency argument_).

For example, suppose `myscript.sh` has two available flags, `--flagA` and `--flagB`. We can use dependent arguments to define rules like:
1. If `--flagA` is present, `--flagB` must be present.
2. `--flagB` can be present without `--flagA`.

In this example, we say that `--flagA` is _dependent_ on `--flagB`. Thus, we refer to `--flagA` as the _dependent argument_ and `--flagB` as the _dependency argument_.

## Defining dependent arguments
Koi allows for defining dependent arguments with the `__adddep` function (short for _add dependency_). `__adddep` takes at least _three required arguments_ (`dependentarguments...`, `property`, `dependencyargument`), but can handle as many as are provided. The general anatomy of `__adddep` is shown below.

```bash
__adddep "dependentarg" "dependentarg" ... "property" "dependencyargument"
```

### Dependent arguments
Dependent arguments are the arguments _that dependent_ on others. In the example above, `--flagA` is the dependent argument. There can be multiple dependent arguments for a single dependency argument.

**Examples:** `--force`, `--quiet`, `--myargument`

**Restrictions:**
* must be a previously registered argument via `__addarg` (see [registering arguments](/registering_arguments))
* cannot be an argument with a `help`, `positionalvalue`, or `positionalarray` action
* cannot be in a mutually exclusive group with the dependency argument (see [argument groups](/argument_groups))

### Property
The property defines the relationship between the dependent arguments and the dependency arguments. For now, there is only one option for the property: `dependson`. More properties may be introduced in the future.

**Examples:** `dependson`

**Restrictions:**
* must be the string `dependson` verbatim
* must be the second-to-last argument in the `__adddep` call

### Dependency argument
The dependency argument is the argument on which all of the dependent arguments depend. This means that this argument (the dependency argument) _must_ be present if its registered dependent arguments are present. In the example above, `--flagB` is the dependency argument. There can be one dependency for multiple dependents. If an argument is dependent on multiple dependency arguments, you can use multiple `__adddep` calls.

**Examples:** `--myargument`, `--useapi`, `--flagB`

**Restrictions:**
* must be a previously registered argument via `__addarg` (see [registering arguments](/registering_arguments))
* cannot be an argument with a `help`, `positionalvalue`, or `positionalarray` action
* cannot be in a mutually exclusive group with any of the dependent arguments (see [argument groups](/argument_groups))
* must be the last argument in the `__adddep` call

## Examples
Here are a few helpful examples for how to use `__adddep`. Please refer to [Examples](/examples) for more.

### Authenticate via OAuth2
```bash
function authenticate {
	__addarg "-h" "--help" "help" "optional" "" "Authenticate via OAuth2"
	__addarg "" "user" "positionalvalue" "required" "" "The user to authenticate"
	__addarg "-p" "--password" "storevalue" "optional" "" "The user's password"
	__addarg "-f" "--usefiles" "flag" "optional" "" "Instead of typing the password on stdin, read it from a file"
	__addarg "-s" "--secretfile" "storevalue" "optional" "/etc/keys/secret.txt" "The file containing the secret key (the user's password)"
	__addgroup "authchoice" "XOR" "required" "--password" "--usefiles"
	__adddep "--secretfile" "dependson" "--usefiles"
	__parseargs "$@"

	if [[ $usefiles -eq 1 ]] ; then
		curl -s -u "${user}:$(cat "$secretfile")" --data 'grant_type=client_credentials' localhost:8000/oauth2/token
	else
		curl -s -u "${user}:${password}" --data 'grant_type=client_credentials' localhost:8000/oauth2/token
	fi
}
```
_Usage:_
```
authenticate [-h] (-p PASSWORD | -f) [-s SECRETFILE] USER
```

### Install a new library
```bash
function install-lib {
	__addarg "-h" "--help" "help" "optional" "" "Install a library via a variable package manager"
	__addarg "" "lib" "positionalvalue" "required" "" "The library to add"
	__addarg "-b" "--brew" "flag" "optional" "" "The new library should be installed via Homebrew"
	__addarg "-c" "--cask" "flag" "optional" "" "The new library is be a Homebrew cask"
	__adddep "--cask" "dependson" "--brew"
	__addarg "-y" "--yarn" "flag" "optional" "" "The new library should be installed via yarn"
	__addarg "-p" "--pip" "flag" "optional" "" "The new library should be installed via pip"
	__addgroup "flags" "XOR" "required" "--brew" "--yarn" "--pip"
	__parseargs "$@"

	if [[ $brew -eq 1 ]] ; then
		if [[ $cask -eq 1 ]] ; then
			brew cask install "$lib"
		else
			brew install "$lib"
		fi
	elif [[ $yarn -eq 1 ]] ; then
		yarn global add "$lib"
	else
		pip install "$lib"
	fi
}
```
_Usage:_
```
install-lib [-h] (-b | -y | -p) [-c] LIB
```

<hr>
<div style="text-align:center">
	<a class="edit-link" href="https://github.com/wcarhart/docs/blob/master/docs/koi/dependent_arguments.md" target="_blank"><i class="fas fa-edit"></i> Edit this page</a>
</div>