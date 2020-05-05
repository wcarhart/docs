# help
Show the help menu and exit.

## Usage {docsify-ignore}
```
birdhouse help [-h] [-v] 
  -v, --verbose    Print verbose command documentation (optional)
```

## Examples {docsify-ignore}

### Show the regular help menu {docsify-ignore}
```bash
birdhouse help
```
```
Passive tweet watcher from the command line

Usage:
  birdhouse COMMAND [args]

Available commands:
  bird
  chirps
  help
  init
  list
  listen
  regenerate

Hints:
  birdhouse help --verbose    Show complete command documentation
  birdhouse COMMAND --help    Show individual command documentation
```

### Show the verbose help menu {docsify-ignore}
```bash
birdhouse help --verbose
```
```
Passive tweet watcher from the command line

Usage:
  birdhouse COMMAND [args]

Available commands:
  bird
  chirps
  help
  init
  list
  listen
  regenerate

Command documentation:
birdhouse bird [-h] [-u] BIRD... 
Get information for a bird (a Twitter user)
  bird          (+) The bird(s) to get 
  -u, --url     Include a URL link to the bird (optional) 

birdhouse chirps [-h] [-n NUM] [-o] [-a] [-u] [-l LANGUAGE] [-q] SOURCE... 
Get chirps (recent tweets) from a bird (a Twitter user) or hashtag
  source                     (+) The bird(s) or hashtag(s) to get chirps from 
  -n, --num NUM              The number of chirps to get (optional) (default: 10)
  -o, --omitreplies          Omit replies (may reduce number of chirps) (optional) 
  -a, --absolute             Use absolute timestamps (optional) 
  -u, --url                  Include a URL link to the tweet (optional) 
  -l, --language LANGUAGE    Only show tweets in a specific language (optional) 
  -q, --quiet                Silence warnings (optional) 

birdhouse help [-h] [-v] 
Show this menu and exit
  -v, --verbose    Print verbose command documentation (optional) 

birdhouse init [-h] [-u] [-f] APIKEY SECRETKEY 
Set up birdhouse
  apikey            Your Twitter API key 
  secretkey         Your Twitter API secret key 
  -u, --usefiles    Read apikey and secretkey from files (optional) 
  -f, --force       Force overwrite the existing credentials (optional) 

birdhouse list [-h] [-d] 
List all available commands
  -d, --docs    If included, print command documentation (optional) 

birdhouse listen [-h] [-r REFRESH] [-o] [-a] [-u] [-p] [-n] [-l LANGUAGE] [-f FILTER+] [-q] SOURCE... 
Listen to a bird (a Twitter user) or hashtag
  source                     (+) The bird(s) or hashtag(s) to listen to 
  -r, --refresh REFRESH      The refresh rate, in seconds (optional) (default: 10)
  -o, --omitreplies          Omit replies (optional) 
  -a, --absolute             Use absolute timestamps (optional) 
  -u, --url                  Include a URL link to the tweet (optional) 
  -p, --popular              Only show popular tweets (optional) 
  -n, --now                  Start stream from now, rather than showing previous tweets (optional) 
  -l, --language LANGUAGE    Only show tweets in a specific language (optional) 
  -f, --filter FILTER        (+) Only print tweets that contain a specific string (optional) 
  -q, --quiet                Silence warnings (optional) 

birdhouse regenerate [-h] [TOKEN] 
Regenerate OAuth bearer token
  token         An OAuth bearer token to use, rather than regenerating a new one (optional)
```

<hr>
<div style="text-align:center">
	<a class="edit-link" href="https://github.com/wcarhart/docs/blob/master/docs/birdhouse/help.md" target="_blank"><i class="fas fa-edit"></i> Edit this page</a>
</div>