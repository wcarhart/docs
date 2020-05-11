# Verifying arguments
!> Before starting this section, make sure you've read [registering arguments](/registering_arguments) and [parsing arguments](/parsing_arguments).

An important part of any CLI is verifying command line arguments. This can range from performing simple file checks to performing more complex verification functionality. Koi exposes any easy way to reproducibly verifying command line arguments with _verifying functions_.

## Verifying functions
Verifying functions are functions that are specified in `__addarg` commands and are used to verify arguments when they are parsed. This is powerful because you can define a verifying function once and reuse it on multiple arguments.
```bash
function check_for_files {
	__addarg "-h" "--help" "help" "optional" "" "Check that a number of different files exist"
	__addarg "" "--sourcefile" "storevalue" "" "Check that a source file exists" "__verifyfile"
	__addarg "" "--destinationfile" "storevalue" "" "Check that a destination file exists" "__verifyfile"
	__addarg "" "--anotherfile" "storevalue" "" "Check that another file exists" "__verifyfile"
	__parseargs "$@"
}
```
When you register a verifying function, `__parseargs` will call your function when the related argument is parsed, using the format:
```bash
verifyingfunction verifyingfunction_arguments parsed_command_line_argument
```
Where:
* `verifyingfunction` is the registered verifying function
* `verifyingfunction_arguments` are any arguments included with the verifying function in `__addarg`
* `parsed_command_line_argument` is the actual argument that was parsed from the command line

?> **Note**<br>Verifying functions that are assigned to `storearray` and `positionalarray` arguments will be called for every argument in the array.

Koi provides three verifying functions out of the box. These are `__verifyfile`, `__verifydirectory`, and `__verifyfiletype`.

### __verifyfile

Verifies that a file exists. 

?> **Example**<br>Register `__verifyfile` as the verifying function for an argument called `file`.
```bash
__addarg "-f" "--file" "storevalue" "required" "" "A required file" "__verifyfile"
```
_Which will run the following when `$file` is parsed:_
```bash
__verifyfile "$file"
```

### __verifydirectory

Verifies that a directory exists.

?> **Example**<br>Register `__verifydirectory` as the verifying function for an argument called `directory`.
```bash
__addarg "-d" "--directory" "storevalue" "required" "" "A required directory" "__verifydirectory"
```
_Which will run the following when `$directory` is parsed:_
```bash
__verifydirectory "$directory"
```

### __verifyfiletype

Verify that a file exists, and that it is of a certain filetype.

?> **Example**<br>Register `__verifyfiletype` as the verifying function for an argument called `jsonfile`.
```bash
__addarg "-j" "--jsonfile" "storevalue" "required" "" "A required JSON file" "__verifyfiletype json"
```
_Which will run the following when `$jsonfile` is parsed:_
```bash
__verifyfiletype json "$jsonfile"
```

## Writing your own verifying function
`__verifyfile`, `__verifydirectory`, and `__verifyfiletype` are a good starting point, but possibilities are endless with verifying functions. To write your own, all you need to do is write a function that takes in a standard number of arguments.

!> **Warning**<br>Verifying functions should start with two underscores. [Why do some functions need to start with two underscores?](/faq?id=why-do-some-functions-need-to-start-with-two-underscores)

### Verifying functions without arguments
If your verifying function `__myverifyingfunction` does not take in any addition arguments except for the parsed argument from the command line (e.g. `__verifyfile` or `__verifydirectory`), you can register it as follows:
```bash
__addarg "-a" "--argument" "storevalue" "required" "" "Argument help text" "__myverifyingfunction"
```

### Verifying functions with arguments
If your verifying function `__myverifyingfunction` takes in arguments in addition to the parse argument from the command line (e.g. `__verifyfiletype`), you can register it as follows:
```bash
__addarg "-a" "--argument" "storevalue" "required" "" "Argument help text" "__myverifyingfunction arg arg"
```

## Examples
Here are a few helpful examples for how to use verifying functions. Please refer to [Examples](/examples) for more.

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

### Backup files in the cloud before removal
```bash
function backup_files_and_remove {
	__addarg "-h" "--help" "help" "optional" "" "Back up local files in Google Cloud Storage and remove locally"
	__addarg "-j" "--json" "storearray" "optional" "" "JSON file to backup" "__verify_exists_in_bucket jsonbucket"
	__addarg "-y" "--yaml" "storearray" "optional" "" "YAML file to backup" "__verify_exists_in_bucket yamlbucket"
	__parseargs "$@"

	for j in "${json[@]}" ; do
		rm -rf "$j"
	done
	for y in "${yaml[@]}" ; do
		rm -rf "$yaml"
	done
}

function __verify_exists_in_bucket {
	# confirm that a file ($2) exists in a bucket ($1)
	if gsutil -q stat "gs://${1}/${2}" ; then
		gsutil cp "${2}" "gs://${1}/{$2}"
	fi
}
```
_Usage:_
```
backup_files_and_remove [-h] [-j JSON+] [-y YAML+]
```

<hr>
<div style="text-align:center">
	<a class="edit-link" href="https://github.com/wcarhart/docs/blob/master/docs/koi/verifying_arguments.md" target="_blank"><i class="fas fa-edit"></i> Edit this page</a>
</div>