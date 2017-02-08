---
layout: post
title: Subscribe
---

I've got a simple RSS feed. It doesn't include the full content of the posts,
but it does have a summary of each, akin to what you see on the homepage.

<button id="rss" class="content__button">Get Link to RSS Feed</button>

<p id="rss-response" style="display:none">The link to the feed should be
  copied to your clipboard now. If not, here's the direct link:
  <a href="/feed.xml" id="rss-url">https://wordsmithweekly.com/feed.xml</a></p>

Email newsletter coming <s>soon</s> whenever I get around to it :)

<script>
  var rss = document.querySelector('#rss');
  rss.addEventListener('click', function() {
    var url = document.querySelector('#rss-url');
    var range = document.createRange();
    range.selectNode(url);
    window.getSelection().addRange(range);
    try {
      if (document.execCommand('copy')) {
        ga('send', 'event', 'Subscribe', 'click', 'RSS', 1);
      }
    } catch (err) {
      ga('send', 'event', 'Subscribe', 'click', 'RSS', 0);
    }
    document.querySelector('#rss-response').style.display = 'block';
    window.getSelection().removeAllRanges();
  });
</script>
