# Using dependent arguments
Sometimes it is helpful to have an argument's usage be tied to another argument's presence. Koi accomplishes this with _dependent arguments_.

?><b>Note</b><br>A _dependent argument_ is one whose presence, or lack thereof, is tied to the presence of another argument (refered to as the _dependency argument_).

For example, suppose `myscript.sh` has two available flags, `--flagA` and `--flagB`. We can use dependent arguments to define rules like:
1. If `--flagA` is present, `--flagB` is present.
2. `--flagB` can be present without `--flagA`.

In this example, we say that `--flagA` is _dependent_ on `--flagB`. Thus, we refer to `--flagA` as the _dependent argument_ and `--flagB` as the _dependency argument_.

## Defining dependent arguments
Koi allows for defining dependent arguments with the `__adddep` function (short for _add dependency_). `__adddep` takes at least _three required arguments_ (`depedentarguments...`, `property`, `dependencyargument`), but can handle as many as are used. The general anatomy of `__addgroup` is shown below.

```bash
__adddep "depedentarg" "depedentarg" ... "property" "dependencyargument"
```

### Dependent arguments
Dependent arguments are the arguments _that dependent_ on others. In the example above, `--flagA` is the dependent argument. There can be multiple dependent arguments for a single dependency argument.

**Examples:** `--force`, `--quiet`, `--myargument`

**Restrictions:**
* must be a previously registered argument via `__addarg` (see [Registering arguments](/registering_arguments))
* cannot be an argument with a `help`, `positionalvalue`, or `positionalarray` action
* cannot be in a mutually exclusive group with the dependency argument (see [Using argument groups](/using_argument_groups))

### Property
The property defines the relationship between the dependent arguments and the dependency arguments. For now, there is only one option for the property: `dependson`. More properties may be introduced in the future.

**Examples:** `dependson`

**Restrictions:**
* must be the string `dependson` verbatim
* must be the second-to-last argument in the `__adddep` call

### Dependency argument
The dependency argument is the argument on which all of the dependent arguments depend. This means that this argument (the dependency argument) _must_ be present if its registered dependent arguments are present. In the example above, `--flagB` is the dependent argument. There can be one dependency for multiple dependents. If an argument is dependent on multiple dependency arguments, you can use multiple `__adddep` calls.

**Examples:** `--myargument`, `--useapi`, `--flagB`

**Restrictions:**
* must be a previously registered argument via `__addarg` (see [Registering arguments](/registering_arguments))
* cannot be an argument with a `help`, `positionalvalue`, or `positionalarray` action
* cannot be in a mutually exclusive group with any of the dependent arguments (see [Using argument groups](/using_argument_groups))
* must be the last argument in the `__adddep` call

## Examples

<hr>
<div style="text-align:center">
	<a class="edit-link" href="https://github.com/wcarhart/docs/blob/master/docs/koi/using_dependent_arguments.md" target="_blank"><i class="fas fa-edit"></i> Edit this page</a>
</div>