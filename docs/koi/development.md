# Development
Koi is under active development. If you notice a bug or would like to request a new feature, please [open a new issue on Github](https://github.com/wcarhart/koi/issues/new).

<img alt="CI" src="https://github.com/wcarhart/koi/workflows/CI/badge.svg">

### Contributing
If you'd like to contribute to koi, please use the following steps to get started.

1. Fork or clone the koi repository.
```bash
git clone https://github.com/wcarhart/koi ~/koi
```

2. Implement your changes or updates. Make sure to add more tests in the appropriate subfolder in `tests/`. For guidance on how to write tests, see [Writing Tests](#Writing-tests).

3. Run `shellcheck` on the files `koi` and `tests/koitest` locally.
```bash
cd ~/koi
shellcheck koi
shellcheck tests/koitest
```

4. Once shellcheck passes successfully, run `koitest`.
```bash
cd ~/koi/tests
chmod -R +x *
./koitest
```

5. Open a [PR on GitHub](https://github.com/wcarhart/koi/pull/new/master). The CI will run the same tests you ran locally to confirm that everything looks good.

### Writing tests
Koi has a mini test framework in the `tests/` folder. Tests are broken into the following directory structure, where `koitest` runs the tests.
```
.
├── koitest
├── test_actions
│   ├── test_action_flag
│   │   ├── test_action_flag_invalid.sh
│   │   └── test_action_flag_valid.sh
│   ├── test_action_help
│   │   ├── test_action_help_invalid.sh
│   │   └── test_action_help_valid.sh
│   ├── test_action_positionalarray
│   │   ├── test_action_positionalarray_invalid.sh
│   │   └── test_action_positionalarray_valid.sh
│   ├── test_action_positionalvalue
│   │   ├── test_action_positionalvalue_invalid.sh
│   │   └── test_action_positionalvalue_valid.sh
│   ├── test_action_storearray
│   │   ├── test_action_storearray_invalid.sh
│   │   └── test_action_storearray_valid.sh
│   ├── test_action_storevalue
│   │   ├── test_action_storevalue_invalid.sh
│   │   └── test_action_storevalue_valid.sh
│   ├── test_actions_invalid.sh
│   └── test_actions_valid.sh
├── test_defaults
│   ├── test_defaults_invalid.sh
│   └── test_defaults_valid.sh
├── test_general
│   ├── test_general_invalid.sh
│   └── test_general_valid.sh
├── test_groups
│   ├── test_groups_invalid.sh
│   └── test_groups_valid.sh
├── test_helps
│   ├── test_helps_invalid.sh
│   └── test_helps_valid.sh
├── test_longoptions
│   ├── test_longoptions_invalid.sh
│   └── test_longoptions_valid.sh
├── test_requireds
│   ├── test_requireds_invalid.sh
│   └── test_requireds_valid.sh
├── test_shortoptions
│   ├── test_shortoptions_invalid.sh
│   └── test_shortoptions_valid.sh
└── test_verifyingfunctions
    ├── test_verifyingfunctions_invalid.sh
    └── test_verifyingfunctions_valid.sh
```

To write tests for a new feature, first select an appropriate subfolder and test file within the `tests/` folder. If you feel one doesn't exist, go ahead and create it. Make sure any files you add end in `.sh`, or `koitest` will not pick them up.

In your new test file, use the following format:
```bash
#!/bin/bash
# ========= TESTS ========= #
function my_test {
	: # write your test
}

# ========= ASSERTIONS ========= #
function koitest_run {
	# define your assertion

	# use the `runtest` function to run your test with the following arguments:
	#    $1 is the name of your test function
	#    $2 is the expected output (if you expect your test to fail, use '__error__')
	#    $3+ are any arguments to pass in to your test (note that the empty string "" is still an argument)
	runtest my_test "expected_value" "argument" "argument"
}
```

?><b>Note</b><br>If you want to view the actual _stdout_ and _sterr_ of your test, you can use the `-p`/`--print` option with `runtest`, like so: `runtest --print my_test "expected_value" "argument" "argument"`.

You can refer to any of the other test files for examples of passing tests.

To run your test, simply use the `koitest` script from the `tests/` directory.
```bash
cd ~/koi/tests
./koitest my_new_test.sh
```
You should also run all of the tests to confirm that you didn't break anything else.
```bash
cd ~/koi/tests
./koitest
```
You can also run a folder of tests to confirm that a feature works.
```bash
cd ~/koi/tests
./koitest test_groups/*
```

You can also use and modify the files in `tests/scripts/` if you need some test scripts for running your new functionality. These files should only be used for dev tests and not replace the actual unit tests in the rest of the `tests/` directory.

<hr>
<div style="text-align:center">
	<a class="edit-link" href="https://github.com/wcarhart/docs/blob/master/docs/koi/development.md" target="_blank"><i class="fas fa-edit"></i> Edit this page</a>
</div>