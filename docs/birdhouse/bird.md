# bird
Get information for a bird (_a Twitter user_).

## Usage {docsify-ignore}
```
birdhouse bird [-h] [-u] BIRD...
  bird          (+) The bird(s) to get 
  -u, --url     Include a URL link to the bird (optional)
```

## Examples {docsify-ignore}

### Get information about Elon Musk {docsify-ignore}
```bash
birdhouse bird @elonmusk
```
```
Elon Musk (@elonmusk)
🚀 🛰 ☀️ 🚘 🧠 🕳
  33164495 followers
  82 friends
  10548 tweets
  created on Jun 02, 2009
```

### Get information about Bill Gates {docsify-ignore}
```bash
birdhouse bird -u @billgates
```
```
Bill Gates (@BillGates) | Seattle, WA | https://twitter.com/BillGates
Sharing things I'm learning through my foundation work and other interests.
  49745003 followers
  217 friends
  3302 tweets
  created on Jun 24, 2009
```

<hr>
<div style="text-align:center">
	<a class="edit-link" href="https://github.com/wcarhart/docs/blob/master/docs/birdhouse/bird.md" target="_blank"><i class="fas fa-edit"></i> Edit this page</a>
</div>