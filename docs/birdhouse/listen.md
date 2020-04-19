# listen
Listen (_stream_) to a bird (_a Twitter user_) or hashtag. Listen is like [chirps](/chirps), except that it will stream live tweets in real time.

## Usage {docsify-ignore}
```bash
birdhouse listen [-h] [-r REFRESH] [-o] [-a] [-u] [-p] [-n] [-l LANGUAGE] [-f FILTER+] [-q] SOURCE... 
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
```

## Examples {docsify-ignore}

### Stream tweets from multiple Twitter accounts {docsify-ignore}
```bash
birdhouse listen --url --absolute @CNN @cnnbrk @cnni
```
```
Streaming tweets by @CNN + @cnnbrk + @cnni

➤ @cnni | Apr 17, 2020 @ 13:40:04 | https://twitter.com/cnni/status/1251249087606935552
  A 16-year-old Iranian chess prodigy has upended the chess world by beating 
  World Chess Champion Magnus Carlsen in the final of the Banter Blitz Cup. 
  https://cnn.it/3cveiT5 

➤ @cnnbrk | Apr 17, 2020 @ 14:10:06 | https://twitter.com/cnnbrk/status/1251256645415559172
  Two inmates who escaped a Wisconsin prison were arrested Friday after 
  turning up at a nonprofit that feeds the homeless, police said 
  https://cnn.it/2Vgqy3N  
  https://twitter.com/cnnbrk/status/1251256645415559172/photo/1 

➤ @cnni | Apr 17, 2020 @ 14:20:06 | https://twitter.com/cnni/status/1251259162278989826
  Colin Kaepernick announced he was contributing $100,000 to a coronavirus 
  relief fund, which will go toward aiding black and brown communities affected 
  by the pandemic. https://cnn.it/2yn1Hm8 

➤ @cnni | Apr 17, 2020 @ 14:40:07 | https://twitter.com/cnni/status/1251264200506212358
  Captain Tom Moore, the now famous 99-year-old British war veteran who has 
  raised more than $23 million for the UK's National Health Service by walking 
  100 laps of his garden, has said he is "absolutely overwhelmed" by the sum he 
  has been able to raise. https://cnn.it/3bhLQDL 

➤ @CNN | Apr 17, 2020 @ 15:10:05 | https://twitter.com/CNN/status/1251271742909231104
  Chef and restaurant owner Caroline Glover makes a case for America's 
  independent restaurants, saying the federal response must acknowledge the 
  economic clout and extraordinary diversity of the country's restauranteurs
  https://cnn.it/2xGZAJR 

➤ @CNN | Apr 17, 2020 @ 15:20:04 | https://twitter.com/CNN/status/1251274252772429826
  Officials in Wuhan, where the novel coronavirus was first reported late last 
  year, on Friday added 1,290 coronavirus deaths to the city's toll. They also 
  added 325 confirmed cases to the city tally. https://cnn.it/2RNBAvj 

➤ @CNN | Apr 17, 2020 @ 15:40:05 | https://twitter.com/CNN/status/1251279291851177986
  2% of known recovered patients in South Korea have retested positive for 
  coronavirus, according to the country's Centers for Disease Control and 
  Prevention https://cnn.it/3buF4uo 

➤ @cnni | Apr 17, 2020 @ 15:40:05 | https://twitter.com/cnni/status/1251279293725974528
  Younger children in Denmark are returning to school this week as the country 
  starts gradually to reopen, with the number of coronavirus cases dropping 
  https://cnn.it/2yjEfWN 

➤ @CNN | Apr 17, 2020 @ 16:41:05 | https://twitter.com/CNN/status/1251294641124761600
  The Amazon founder and CEO bought a $16 million apartment this month that is 
  adjacent to the $80 million in condos he already owns in a New York City 
  apartment building, according to city real estate records
  https://cnn.it/3buQS05 

➤ @cnni | Apr 17, 2020 @ 16:45:10 | https://twitter.com/cnni/status/1251295670918696961
  The Amazon founder and CEO bought a $16 million apartment this month that is 
  adjacent to the $80 million in condos he already owns in a New York City 
  apartment building, according to city real estate records
  https://cnn.it/2VEdOD3 

➤ @CNN | Apr 17, 2020 @ 16:50:01 | https://twitter.com/CNN/status/1251296891117228033
  Emergency room doctors say they are running into a new crisis as they 
  struggle to treat patients with Covid-19 -- a shortage of dialysis machines and 
  supplies https://cnn.it/2Vjy3Hn 

```

### Stream popular tweets about a topic {docsify-ignore}
_Popular tweets_ are tweets that have been liked, retweeted, or viewed above a certain threshold, and are often trending tweets relating to the query.
```bash
birdhouse listen --popular --language english --omitreplies '#coronavirus'
```
```
Streaming popular tweets for #coronavirus

➤ @piersmorgan | 1 day ago 
  BREAKING: UK #coronavirus deaths rise again - 870 more victims recorded in 
  past 24hrs. 
  Total now heading over 14,000.
  This doesn't include 1000s more who are believed to have died in care homes & 
  at home.
  This is a devastating ongoing catastrophe.

➤ @TeamPelosi | 1 day ago 
  The #coronavirus crisis is a public health emergency that called for a 
  coordinated federal response based on science, evidence, and data from Day 1. 
  It still does.
   
  Testing, testing, testing – only – can tell us where it is and who is impacted 
  as the basis for the way forward. 
  https://twitter.com/TeamPelosi/status/1250783571960377346/video/1 

➤ @DavidCornDC | 1 day ago 
  Trump declares the #coronavirus crisis should be "quickly forgotten" when 
  the first wave passes. @RepAdamSchiff & other Ds/Rs say no, we need a 9/11 
  commission-like investigation. In my latest piece, Schiff explains why. Please 
  read, RT, and share.
  https://www.motherjones.com/politics/2020/04/adam-schiff-why-we-need-a-coronavir
  us-commission-to-investigate-what-went-wrong/ 

➤ @Kaepernick7 | 1 day ago 
  Structural racism makes Black & Brown ppl more likely to die from #COVID19. 
  We've launched the Know Your Rights Camp COVID-19 Relief Fund to directly 
  impact the disproportionate effect #coronavirus is having on our communities. 
  #WeGotUs 🖤✊🏾 Donate at: http://knowyourrightscamp.com/covid19  
  https://twitter.com/Kaepernick7/status/1250800957325299714/video/1 

➤ @RealCandaceO | 1 day ago 
  So @GavinNewsom is giving out 125 million dollars to support illegal 
  immigrants during the #coronavirus.
  
  It’s a good thing I don’t live in the communist state of California or I’d 
  outright refuse to pay state taxes. 
  
  EVERY RED CENT OF FUNDING SHOULD GO TO STRUGGLING AMERICANS!

➤ @10DowningStreet | 1 day ago 
  Thanks to your sacrifices, social distancing is working. But if we stop now, 
  we risk increasing the spread of #coronavirus.
  
  We’re extending the rules by at least three weeks, and will not change the 
  rules until five tests are met ⬇️ 
  https://twitter.com/10DowningStreet/status/1250844186829619201/video/1 

➤ @TomFitton | 1 day ago 
  Sen Kennedy is being attacked for his truth-telling on the #coronavirus 
  shutdown that is destroying our national fabric. We need to give Americans 
  their lives back! https://twitter.com/SenJohnKennedy/status/1250765434560880641 
  

➤ @Jim_Jordan | 1 day ago 
  House Democrats are now considering #coronavirus legislation that PAYS 
  states to let criminals out of prison. 
  
  But those same Democrats also argue that gun stores and your #2ndAmendment 
  rights are “non-essential” to protect yourself. 
  
  You can’t make this up! 
  https://twitter.com/Jim_Jordan/status/1250890449545551878/photo/1 

➤ @tomgrundy | 13 hours ago 
  Are @HongKong’s social distancing measures being used as an excuse to crack 
  down on the ongoing protest movement?
  
  HKFP's  @elson_tong rounds up key incidents that have caused citizens to 
  question whether enforcement has become politicised.
  
  https://hongkongfp.com/2020/04/17/explainer-after-months-of-protests-is-hong-kon
  g-selectively-enforcing-covid-19-laws/  #coronavirus 
  https://twitter.com/tomgrundy/status/1251101772925419521/photo/1 

➤ @DineshDSouza | 9 hours ago 
  It seems that out of sheer embarrassment at issuing preposterously bad 
  projections, the CDC is now counting “probable” #Coronavirus cases to boost the 
  numbers and the death count. In short, the new data will no longer be 
  trustworthy and can be viewed as self-serving propaganda

➤ @TomFitton | 8 hours ago 
  Will governors (and mayors) arrest desperate Americans on food bank lines 
  who aren't wearing masks or aren't social distancing?  The best way to protect 
  someone's health is to keep them employed and give them their lives back.  
  #coronavirus https://twitter.com/TomFitton/status/1245472779987816448 

➤ @TomFitton | 6 hours ago 
  I won't snitch on you, fellow Americans, if you go to church, take your 
  child to the playground, show your unmasked face in public, buy a non-essential 
  item, go for a drive to visit your family or just because, or try to work to 
  feed your family. #Coronavirus LIBERATE AMERICA

➤ @DineshDSouza | 6 hours ago 
  New York boosted its #Coronavirus death toll by 30% by throwing in a bunch 
  of people who were never tested for the virus. This mirrors the Left’s strategy 
  of inflating the number of poor or homeless to boost federal appropriations. 
  This epidemic too is now a political racket

➤ @DrDenaGrayson | 5 hours ago 
  March 6: “Anybody that needs a test gets a test.” @realDonaldTrump 
  
  April 16: only 3.4 million #coronavirus tests have been done in TOTAL, 
  representing *only 1.2%* of Americans.
  
  To reopen, each person must be tested frequently.
  
  WHERE. ARE. THE. TESTS⁉️
  
  https://twitter.com/VicBergerIV/status/1251192995883487232/video/1 

➤ @superm | 1 hour ago 
  Thank you to healthcare workers & everyone on the frontline in this fight 
  against #COVID19. You are heroes! We want to show our support by joining 
  @glblctzn & @WHO for One World: #TogetherAtHome —a one-night special music 
  event!
  
  #SuperM #GlobalCitizen #coronavirus #HealthForAll 
  https://twitter.com/superm/status/1251284302815358976/photo/1
```

### Stream tweets containing a specific phrase {docsify-ignore}
Using the `-f`/`--filter` option will filter out tweets that don't contain the filter text. Multiple filters will be treated as a logical OR, meaning that tweets will be printed if they contain any of the filter texts.
```bash
birdhouse listen @CNN --filter 'coronavirus' --filter 'covid'
```
```
Streaming tweets by @CNN containing 'coronavirus' or 'covid'

➤ @CNN | 1 hour ago 
  Officials in Wuhan, where the novel coronavirus was first reported late last 
  year, on Friday added 1,290 coronavirus deaths to the city's toll. They also 
  added 325 confirmed cases to the city tally. https://cnn.it/2RNBAvj 

➤ @CNN | 1 hour ago 
  2% of known recovered patients in South Korea have retested positive for 
  coronavirus, according to the country's Centers for Disease Control and 
  Prevention https://cnn.it/3buF4uo 

➤ @CNN | 1 hour ago 
  Colin Kaepernick announced he was contributing $100,000 to a coronavirus 
  relief fund, which will go toward aiding black and brown communities affected 
  by the pandemic. https://cnn.it/34VCbkd 

➤ @CNN | 56 minutes ago 
  The Biden campaign launched a new counterattack on President Trump and his 
  response to the coronavirus pandemic, zeroing in on his approach to dealing 
  with China throughout the crisis https://cnn.it/34L4ly1 
```

### Stream tweets starting from now {docsify-ignore}
Birdhouse will pad each Twitter handle and hashtag with ten previous tweets before it starts streaming. You can toggle birdhouse to only show tweets starting from now with the `-n`/`--now` flag.
```bash
birdhouse listen @iamdevloper --now --url
```
```
Streaming tweets by @iamdevloper from now...
```

<hr>
<div style="text-align:center">
	<a class="edit-link" href="https://github.com/wcarhart/docs/blob/master/docs/birdhouse/listen.md" target="_blank"><i class="fas fa-edit"></i> Edit this page</a>
</div>