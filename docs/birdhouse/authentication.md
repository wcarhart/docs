# Authentication
Birdhouse relies on the [Twitter API](https://developer.twitter.com) to fetch tweets and other content from Twitter. In order to interact with the Twitter API, you must have a set of Twitter API keys. If you don't already have these, you easily apply for them [here](https://developer.twitter.com/en/apply-for-access).

Once you have access to your Twitter API keys, you'll need to initialize birdhouse to use them. You will need your _API key_ and your _API secret key_. You can use the command `birdhouse init $APIKEY $APISECRETKEY` to initalize birdhouse. If for whatever reason you need to regenerate your session token, use the command `birdhouse regenerate`.

For more information, and options, about the `init` command, see [init](/init).

For more information, and options, about the `regenerate` command, see [regenerate](/regenerate).

*[Can I use birdhouse without a set of Twitter API keys?](faq?id=can-i-use-birdhouse-without-a-set-of-twitter-api-keys)*

<hr>
<div style="text-align:center">
	<a class="edit-link" href="https://github.com/wcarhart/docs/blob/master/docs/birdhouse/authentication.md" target="_blank"><i class="fas fa-edit"></i> Edit this page</a>
</div>