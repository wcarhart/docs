# regenerate
Regenerate an OAuth bearer token.

## Usage {docsify-ignore}
```
birdhouse regenerate [-h] [TOKEN] 
  token         An OAuth bearer token to use, rather than regenerating a new one (optional)
```

## Examples {docsify-ignore}

### Regenerate a bearer token based on the existing, installed API keys {docsify-ignore}
```bash
birdhouse regenerate
```

### Regenerate a specific bearer token, regardless of existing, installed API keys {docsify-ignore}
```bash
birdhouse regenerate mytokenvalue
```

### Regenerate a specific bearer token from an environment variable, regardless of existing, installed API keys {docsify-ignore}
Using environment variables can help keep your bearer token out of your shell history.
```bash
birdhouse regenerate "$token"
```

<hr>
<div style="text-align:center">
	<a class="edit-link" href="https://github.com/wcarhart/docs/blob/master/docs/birdhouse/regenerate.md" target="_blank"><i class="fas fa-edit"></i> Edit this page</a>
</div>