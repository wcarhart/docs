# Using koi
To use koi in a script, it's as simple as `source koi`.
```bash
#!/bin/bash
source koi
```

In addition to sourcing koi, you need to call the `__koirun` function for koi to parse the script's command line arguments. `__koirun` should be the last command in your script.
```bash
#!/bin/bash
source koi

# all of your script's code

__koirun "$@"
```

There are plenty of examples of how to use koi in the [Examples](/examples) section.

To start using all of the features of koi, check out [Basic usage](/basic_usage).

### Configuring koi
You should override the `koiname` and `koidescription` variables after you source koi. These variables are printed in error and help messages.
```bash
#!/bin/bash
source koi
koiname="name_of_my_script.sh"
koidescription="A brief description of my script"
```

There are many more configurable options in koi. To see the full list, see [Configuration](/configuration).

### Exiting on errors
Koi exits on errors by default. Internal koi functions return non-zero exit codes, which in turn help koi to exit when problems arise while parsing arguments. You can continue on errors with `set +e`. Make sure you do so after `source koi`, or put `set +e` after the `__parseargs` command in each function that parses arguments (see [parsing arguments](/parsing_arguments)).
```bash
#!/bin/bash
source koi
set +e
```

!> **Warning**<br>Not exiting on errors means koi will not exit if an error arises while parsing arguments.

<hr>
<div style="text-align:center">
	<a class="edit-link" href="https://github.com/wcarhart/docs/blob/master/docs/koi/using_koi.md" target="_blank"><i class="fas fa-edit"></i> Edit this page</a>
</div>