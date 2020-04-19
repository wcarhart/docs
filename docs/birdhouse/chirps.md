# chirps
Get chirps (_recent tweets_) from a bird (_a Twitter user_) or hashtag.

## Usage {docsify-ignore}
```
birdhouse chirps [-h] [-n NUM] [-o] [-a] [-u] [-l LANGUAGE] [-q] SOURCE...
  source                     (+) The bird(s) or hashtag(s) to get chirps from 
  -n, --num NUM              The number of chirps to get (optional) (default: 10)
  -o, --omitreplies          Omit replies (may reduce number of chirps) (optional) 
  -a, --absolute             Use absolute timestamps (optional) 
  -u, --url                  Include a URL link to the tweet (optional) 
  -l, --language LANGUAGE    Only show tweets in a specific language (optional) 
  -q, --quiet                Silence warnings (optional)
```

## Examples {docsify-ignore}

### Get recent tweets about a topic in a specific language {docsify-ignore}
```bash
birdhouse chirps '#coronavirus' --language english --num 3
```
```
➤ @IBDinvestors | 0 seconds ago 
  Which stocks are emerging from the coronavirus crash as new leaders? Read 
  this free infographic and find out! #coronavirus #stocks #investors #COVID19 
  $NFLX $ZM $DPZ http://ow.ly/urTv50zhiP6  
  https://twitter.com/IBDinvestors/status/1251270480427966466/photo/1 

➤ @MikeGeraghty67 | 1 second ago 
  RT @TerryGlavin So here's me on how Xi Jinping is seizing the #coronavirus 
  moment. In Beijing's long game to displace the world's liberal democracies in 
  the global order, Xi is making his move: Hyperdrive mass disinformation, 
  capture key global supply chains, control global digital connectivity. 
  https://twitter.com/jonmccomb980/status/1251150795925417986 

➤ @derya555 | 2 seconds ago 
  RT @BurakKadercan We are truly going through some very strange days. In 
  Turkey, a guy in a #SpiderMan costume is helping out the elderly (65+), who are 
  legally banned from leaving their homes due to #CoronaVirus, with shopping and 
  all that. https://twitter.com/BurakKadercan/status/1251218635668041728/photo/1 
```

### Get recent tweets from a Twitter user {docsify-ignore}
```bash
birdhouse chirps --omitreplies --url --absolute --num 3 @mkbhd
```
```
➤ @MKBHD | Apr 17, 2020 @ 11:25:16 
  NEW VIDEO - iPhone SE (2020) Honest Thoughts... https://youtu.be/UK8HH3_q4yI 
   - RT! https://twitter.com/MKBHD/status/1251215165732913155/photo/1 

➤ @MKBHD | Apr 17, 2020 @ 11:20:27 
  Highly requested upload incoming…

➤ @MKBHD | Apr 17, 2020 @ 07:34:30 
  "This thing collects more fingerprints than the CSI agent of the month" 😅 
  https://twitter.com/MKBHD/status/1251157091005329410/photo/1
```

<hr>
<div style="text-align:center">
	<a class="edit-link" href="https://github.com/wcarhart/docs/blob/master/docs/birdhouse/chirps.md" target="_blank"><i class="fas fa-edit"></i> Edit this page</a>
</div>