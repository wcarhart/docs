<p align="center"><img alt="lurker logo" src="_media/logo.png" /></p>

<h1 align="center">lurker</h1>
<h5 align="center">Hacker News terminal client</h5>
<div align="center">
  <span class="ghbns">
  	<a class="github-button" href="https://github.com/wcarhart/lurker/subscription" data-color-scheme="no-preference: dark; light: light; dark: dark;" data-icon="octicon-eye" data-size="large" data-show-count="true" aria-label="Watch wcarhart/lurker on GitHub">Watch</a>
  </span>
  <span class="ghbns">
  	<a class="github-button" href="https://github.com/wcarhart/lurker" data-color-scheme="no-preference: dark; light: light; dark: dark;" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star wcarhart/lurker on GitHub">Star</a>
  </span>
  <span class="ghbns">
  	<a class="github-button" href="https://github.com/wcarhart/lurker/fork" data-color-scheme="no-preference: dark; light: light; dark: dark;" data-icon="octicon-repo-forked" data-size="large" data-show-count="true" aria-label="Fork wcarhart/lurker on GitHub">Fork</a>
</span>
  <span class="ghbns">
  	<a class="github-button" href="https://github.com/wcarhart" data-color-scheme="no-preference: dark; light: light; dark: dark;" data-size="large" data-show-count="true" aria-label="Follow @wcarhart on GitHub">Follow @wcarhart</a>
  </span>
</div>

Love [Hacker News](https://news.ycombinator.com/) but don't want to leave the terminal? Lurker allows you to [lurk](https://www.techopedia.com/definition/8155/lurker) through tech news without leaving the command prompt. Easily install with `brew install wcarhart/tools/lurker`.

Lurker is written entirely in Bash. To get started, see [Installation](/installation) or [Usage](/usage).

### Get recent tech news {docsify-ignore}
```bash
lurker
```
```
1. Zoom Acquires Keybase (blog.zoom.us)
   805 points by vikram7 3 hours ago | 323 comments
2. GCC 10.1 Released (gcc.gnu.org)
   122 points by nayefc 1 hour ago | 33 comments
3. Pentagon official: FCC decision on 5G threatens GPS, national security (thehill.com)
   72 points by anigbrowl 2 hours ago | 64 comments
4. The AMD Ryzen 3 3300X and 3100 CPU Review: A Budget Gaming Bonanza (www.anandtech.com)
   60 points by jjuhl 1 hour ago | 25 comments
5. The new dot com bubble is here: it’s called online advertising (2019) (thecorrespondent.com)
   168 points by gws 4 hours ago | 79 comments
6. Ask HN: Keybase Alternatives? 
   184 points by capableweb 2 hours ago | 43 comments
7. GeckoView for Android (mozilla.github.io)
   231 points by selvan 5 hours ago | 86 comments
8. Show HN: Beamsplitter – a new possibly universal hash (github.com)
   44 points by ohvirginia 1 hour ago | 18 comments
9. Debt Collectors Are Transforming the Business of State Courts (www.pewtrusts.org)
   18 points by burritofanatic 1 hour ago | 7 comments
10. Norsk Data (en.wikipedia.org)
    174 points by scottlocklin 23 hours ago | 41 comments
```

### Read comments {docsify-ignore}
```
> read 12
Hello, World – Zerodha, India's largest stock broker (zerodha.tech)
47 points by iamd3vil 6 hours ago | 6 comments
    obulpathi | 43 minutes ago:
    I like the varsity website: https://zerodha.com/varsity/module/innerworth/
        rohan1024 | 16 minutes ago:
        Thanks for sharing this.
    greatwhitenorth | 15 minutes ago:
    I hope all the positive replies here are from those who actually used Zerodha themselves over a 
    period of time. When I tried it last year, the website was buggy and even saw HTML errors in 
    response. I moved away to a traditional broker as a result of that.
    p2hari | 50 minutes ago:
    I have been closely following the progress of Zerodha in such a complex market and also an early 
    customer for them from the time of its launch. With some of the best competitions around like 
    Sharekhan, 5paisa, and Karvy it was nice to see how they started with zero brokerage concepts like 
    Robin. I did not know it is now the largest stockbroker in India. And really nice to see the tech 
    blog starting. I thought it would be a larger team and using a different tech stack and never 
    expected this. And yes, like-minded developers really add more value to the product
    wadkar | 35 minutes ago:
    Recently came across Zerodha and had to set it up for a friend. Really good UX, and they've done a 
    good job maintaining with the rapid tech progression.
    
    Also, thanks for the ERPNext.org suggestion - sometimes I wonder how many open source gems I have 
    yet to see. (No, please don't link me to one more awesome-X list :P)
    itsspring | 1 hour ago:
    Bootstrapped, 10 years old and their tech looks great (from a customer UX perspective). Cool that 
    they’re launching a tech blog. I’ve learned a lot from business engineering blogs over the past 
    decade
```

### Get information on users {docsify-ignore}
```
> user dang
User ID: dang
Karma: 17476 points
Created: August 18, 2007 (12 years ago)
About:
  _The constellations in the sky stood steeply on their heads, all the stars had made an about 
  turn, but the moon, buried under the featherbed of clouds which were lit by its unseen presence, 
  seemed still to have before her an endless journey and, absorbed in her intricate heavenly 
  procedures, did not think of dawn._
  
  Please send HN questions to hn@ycombinator.com.
```

## Installation {docsify-ignore}
Easily install lurker with `brew install wcarhart/tools/lurker`. For more installation options, see [Installation](/installation).

## Contributing {docsify-ignore}
Lurker is under active development and welcomes contributions. If you see a bug or would like to request a new feature, please [open a new issue on GitHub](https://github.com/wcarhart/lurker/issues/new).

If you'd like to contribute to lurker, please use the following steps to get started.

1. Fork or clone the lurker repository.
```bash
git clone https://github.com/wcarhart/lurker.git ~/lurker
```

2. Implement your changes or updates.

3. Run `shellcheck` on the file `lurker` locally.
```bash
cd ~/lurker
shellcheck lurker
```

4. Once `shellcheck` passes, open a [PR on GitHub](https://github.com/wcarhart/lurker/pull/new/master). The CI will run the same tests you ran locally to confirm that everything looks good.

## License {docsify-ignore}
Lurker is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).
```
MIT License

Copyright (c) 2020 Will Carhart

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

<hr>
<div style="text-align:center">
	<a class="edit-link" href="https://github.com/wcarhart/docs/blob/master/docs/lurker/overview.md" target="_blank"><i class="fas fa-edit"></i> Edit this page</a>
</div>