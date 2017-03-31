---
layout: post
title: Subscribe
---

## RSS

<a id="rss-url" href="/feed.xml">https://wordsmithweekly.com/feed.xml</a>

<button id="rss-button" class="content__button">Copy Link To Clipboard</button>

## Email newsletter

Coming <s>soon</s> whenever I get around to it :)

<script>
  var rss = document.querySelector('#rss-button');
  rss.addEventListener('click', function() {
    window.getSelection().removeAllRanges();
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
    window.getSelection().removeAllRanges();
  });
</script>
