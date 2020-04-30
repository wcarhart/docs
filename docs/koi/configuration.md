# Configuration
Koi is very configurable. You have a variety of options you can control.

### Configurable options
| Option | Description | Where it's used | Example | Default |
|:------:|-------------|-----------------|:-------:|:-------:|
| `koiname` | name of the script using koi | `koiname` is printed in error messages and generated help menus. | `'myscript.sh'` | `'koi'` |
| `koidescription` | description of the script using koi | `koidescription` is printed in generated help menus. | `'A brief piece of text about my script.'` | `'Bashful argument parsing'` |
| `koihelpmenuprefix` | characters that prefix command documentation in help menus | `koihelpmenuprefix` is printed before each command in generated help menus. | `'>>'` or `'$'` | `''` |
| `koiwordwraplength` | maximum line length | `koiwordwraplength` defines the maximum number of characters that are printed before a new line is inserted in generated help menus. | `80` | `100` |
| `koishowhints` | whether or not to show hints | `koishowhints` determines whether koi will print hints in the generated help menu, `1` is true, `0` is false. | `0` | `1` |
| `koicolorprimary` | the primary output color | `koicolorprimary` is the primary output color for generated help menus. | `$__blue` | `$__teal` |
| `koicolorsecondary` | the secondary output color | `koicolorsecondary` is the secondary output color for generated help menus. | `$__red` | `$__yellow` |
| `koirequirehelpactions` | whether or not help actions are required | `koirequirehelpactions` determines whether functions with parseable arguments must define a help action, `0` is false, `1` is true. _Note: generated help menus and the `help` command will not function properly if set to `1`, only use it in scenarios where help menus are not needed._ | `0` | `1` |

?> **Example**<br>If you are using a wider screen and you want your word wrap to be longer, you can set `koiwordwraplength=150` at the top of your script.
```bash
#!/bin/bash
source koi
koiname=myscript.sh
koidescription="A description of my script."
koiwordwraplength=150
```

### Additional helpful variables
Koi has a few other helpful variables available for easily configuring colors.

| Variable Name | Value | Description |
|:-------------:|:-----:|:-----------:|
| `__reset` | `\033[0m` | reset to no color |
| `__bold` | `\033[1m` | bold styling |
| `__lightgrey` | `\033[90m` | light grey (faded) coloring |
| `__red` | `\033[91m` | red coloring |
| `__green` | `\033[92m` | green coloring |
| `__yellow` | `\033[93m` | yellow coloring |
| `__blue` | `\033[94m` | blue coloring |
| `__pink` | `\033[95m` | pink coloring |
| `__teal` | `\033[96m` | teal coloring |
| `__white` | `\033[97m` | white coloring |

?> **Example**<br>You can easily change colors in the help menu.
```bash
#!/bin/bash
source koi
koiname=myscript.sh
koidescription="A description of my script."
koicolorprimary="$__pink"
```

### .koirc
If you have configurable options that you want to use system wide for koi, you can put them in a `~/.koirc` file. The `.koirc` file uses shell-like syntax, which allows for spaces around `=` and comments (starting with `#`), as well as `true`, `false`, and color literals.

?> **Example**<br>If you wanted every script that uses koi on your machine to use the same options, you can specify those options in your `~/.koirc` file.
```
# in ~/.koirc
koiprimarycolor = green
koiwordwraplength = 200
koishowhints = false
```

### Configuration hierarchy
Koi pulls configurations from three different locations, in the following order:
1. **From `koi` itself (using the default values).** This happens when you `source koi`.
2. **From a `~/.koirc` file, if one exists.** Koi then checks for a `~/.koirc` file, if one exists.
3. **From the sourcing script itself.** Lastly, koi checks for options configured in the script itself.

!> **Note**<br>Options redefined in subsequent steps will overwrite the values used in previous steps. This means that if you have a `~/.koirc` file, you can still overwrite options on a by-script basis by redefining them within your script.

<hr>
<div style="text-align:center">
	<a class="edit-link" href="https://github.com/wcarhart/docs/blob/master/docs/koi/configuration.md" target="_blank"><i class="fas fa-edit"></i> Edit this page</a>
</div>