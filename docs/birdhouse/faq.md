# FAQ

### What is birdhouse written in?
Birdhouse is written entirely in Bash. It depends on [koi](https://github.com/wcarhart/koi) to parse command line arguments and [jq](https://github.com/stedolan/jq) to parse JSON content.

### Can I use birdhouse without a set of Twitter API keys?
Birdhouse requires access to the Twitter API to pull content from Twitter. In most cases, this means that birdhouse will not work without a set of Twitter API keys. However, if someone you know has access to Twitter API keys, they can generate a session token for you to use. This token allows you to access the API without explicit API keys (this helps maintain the security of the API keys). Once you have such a token, you can initialize birdhouse to use it with `birdhouse regenerate $token`.

### Can I contribute to birdhouse?
Yes, birdhouse is under active development. If you notice a bug or want to add a feature, head over to [the repository](https://github.com/wcarhart/birdhouse) and open a new PR. For more information, see [Contributing](/development?id=contributing).

<hr>
<div style="text-align:center">
	<a class="edit-link" href="https://github.com/wcarhart/docs/blob/master/docs/birdhouse/faq.md" target="_blank"><i class="fas fa-edit"></i> Edit this page</a>
</div>