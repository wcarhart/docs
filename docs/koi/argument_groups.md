# Argument Groups
!> Before starting this section, make sure you've read [registering arguments](/registering_arguments) and [parsing arguments](/parsing_arguments).

Sometimes it is helpful to group a script's arguments together. This can be used to require two arguments to be used together, or to prevent more than one optional argument from being used.

For example, suppose `myscript.sh` had two available flags, `--flagA` and `--flagB`. We can use argument grouping to make rules like:
1. Either `--flagA` or `--flagB` can be present, but not both.
2. If `--flagA` is present, so must be `--flagB`, and vice versa.

## Creating argument groups
Koi allows for creating argument groups with the `__addgroup` function. `__addgroup` takes _three required arguments_ (`groupname`, `groupproperty`, `grouprequired?`) and at least _two optional arguments_. The general anatomy of `__addgroup` is shown below.

```bash
__addgroup "groupname" "groupproperty" "grouprequired?" "argument" "argument" ...
```

### Group name
Group names are used to identify the group. They are used internally to manage how arguments in groups are parsed and are not shown to the end user.

**Examples:** `mygroup`, `flags`, `aCoolGroup2`

**Restrictions:**
* must be alphanumeric
* cannot start with a number

### Group property
Group properities define how arguments in the group should be parsed. You can use group properties to require _mutual exclusivity_ and _mutual inclusivity_.

| Property | Description |
|:--------:|-------------|
| `XOR` | _Exactly one_ argument in the group must be present when arguments are parsed (_mutual exclusivity_). |
| `OR` | _Any number_ of arguments in the group can be present when arguments are parsed. |
| `AND` | _All_ of the arguments in the group must be present when arguments are parsed (_mutual inclusivity_). |

**Examples:** `XOR`, `OR`, `AND`

**Restrictions:**
* must be one of `XOR`, `OR`, or `AND`

### Group required
Group required describes whether or not it is required for an argument of the group to be present. If a group is required, at least one argument from the group must be present when arguments are parsed.

**Examples:** `required`, `optional`

**Restrictions:**
* must be either `required` or `optional`

### Group arguments
Group arguments are the registered arguments that are in the group. The minimum number of arguments in a group is two; there is no maximum. When adding arguments to the group, use the argument's long option.

**Examples:** `--myflag`, `--myoption`, `--outdir`

**Restrictions:**
* must be a previously registered argument via `__addarg` (see [Registering arguments](/registering_arguments))
* cannot be an argument with a `help`, `positionalvalue`, or `positionalarray` action
* registered argument cannot be required
* arguments in a mutually exclusive group (where the group property is `XOR`) cannot be dependent on one another (see [dependent arguments](/dependent_arguments))

## Examples
Here are a few helpful examples for how to use `__addgroup`. Please refer to [Examples](/examples) for more.

### Add an installable library to a list
```bash
function add_library {
	__addarg "-h" "--help" "help" "optional" "" "Add a library to a trackable list"
	__addarg "" "lib" "positionalvalue" "required" "" "The library to add"
	__addarg "-b" "--brew" "flag" "optional" "" "The new library should be installed via Homebrew"
	__addarg "-y" "--yum" "flag" "optional" "" "The new library should be installed via yum"
	__addarg "-Y" "--yarn" "flag" "optional" "" "The new library should be installed via yarn"
	__addarg "-a" "--aptget" "flag" "optional" "" "The new library should be installed via apt-get"
	__addgroup "flags" "XOR" "required" "--brew" "--yum" "--yarn" "--aptget"
	__parseargs "$@"

	if [[ $brew -eq 1 ]] ; then
		echo "brew install $lib" >> ~/mylibraries.sh
	elif [[ $yum -eq 1 ]] ; then
		echo "yum install -y $lib" >> ~/mylibraries.sh
	elif [[ $yarn -eq 1 ]] ; then
		echo "yarn global add $lib" >> ~/mylibraries.sh
	else
		echo "apt-get install -y $lib" >> ~/.mylibraries.sh
	fi
}
```
_Usage:_
```
add_library [-h] (-b | -y | -Y | -a) LIB
```

### Move a file to a location
```bash
function move {
	__addarg "-h" "--help" "help" "optional" "" "Move a file to a location"
	__addarg "-f" "--from" "storevalue" "optional" "" "The file to move" "__verifyfile"
	__addarg "-t" "--to" "storevalue" "optional" "" "The location to which to move"
	__addgroup "group" "AND" "required" "--from" "--to"
	__parseargs "$@"

	mv "$from" "$to"
}
```
_Usage:_
```
move [-h] (-f FROM & -t TO)
```

### Add arguments to multiple groups
```bash
function multiple {
	__addarg "-h" "--help" "help" "optional" "" "help text"
	__addarg "-f" "--flag" "flag" "optional" "" "help text"
	__addarg "-g" "--glad" "flag" "optional" "" "help text"
	__addarg "-v" "--vlad" "flag" "optional" "" "help text"
	__addgroup "flags1" "XOR" "required" "--flag" "--glad"
	__addgroup "flags2" "XOR" "required" "--glad" "--vlad"
	__parseargs "$@"

	echo "flag: '$flag'"
	echo "glad: '$glad'"
	echo "vlad: '$vlad'"
}
```
_Usage:_
```
multiple [-h] (-f | -g) (-g | -v)
```

<hr>
<div style="text-align:center">
	<a class="edit-link" href="https://github.com/wcarhart/docs/blob/master/docs/koi/argument_groups.md" target="_blank"><i class="fas fa-edit"></i> Edit this page</a>
</div>