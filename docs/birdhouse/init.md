# init
Set up birdhouse.

## Usage {docsify-ignore}
```
birdhouse init [-h] [-u] [-f] APIKEY SECRETKEY 
  apikey            Your Twitter API key 
  secretkey         Your Twitter API secret key 
  -u, --usefiles    Read apikey and secretkey from files (optional) 
  -f, --force       Force overwrite the existing credentials (optional)
```

## Examples {docsify-ignore}

### Initialize birdhouse {docsify-ignore}
```bash
birdhouse init myapikeyvalue myapisecretkeyvalue
```
```
Initialized credentials in ~/.birdhouse
```

### Initialize birdhouse using environment variables {docsify-ignore}
Using environment variables can help keep your API keys out of your shell history.
```bash
birdhouse init "$apikey" "$apisecretkey"
```
```
Initialized credentials in ~/.birdhouse
```

### Initialize birdhouse from files {docsify-ignore}
Using the `--usefiles` option can help keep your API keys out of your shell history.
```bash
birdhouse init --usefiles ~/secrets/apikey ~/secrets/apisecretkey
```
```
Initialized credentials in ~/.birdhouse
```

### Force overwrite existing keys while initializing birdhouse  {docsify-ignore}
```bash
birdhouse init --force "$apikey" "$apisecretkey"
```
```
Initialized credentials in ~/.birdhouse
```

<hr>
<div style="text-align:center">
	<a class="edit-link" href="https://github.com/wcarhart/docs/blob/master/docs/birdhouse/init.md" target="_blank"><i class="fas fa-edit"></i> Edit this page</a>
</div>