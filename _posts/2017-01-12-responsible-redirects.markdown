---
layout: post
title: Responsible Redirects
date: 2017-01-12 17:40:09
permalink: blog/responsible-redirects
summary: "A pattern for handling redirects when there isn't a one-to-one
mapping between the old docs and the new."
---

<img src="/imgs/alice-cards.svg" class="content__leader"
     alt="An Irrelevant Image Of Alice"/>

I'm currently undertaking a big refactor of the Chrome DevTools docs. The
refactor involves a re-org of each of the doc sets, including all of the
sections within the docs. One of the challenges of this project
is how to responsibly redirect readers from the old content to the new.

I don't think straight redirects are the answer, because there isn't a
one-to-one mapping between the old docs and the new. Imagine if someone goes
to the old doc, looking for a refresher on a topic. They get redirected to
the new doc, and the new doc doesn't contain that topic. That's a
frustrating experience. Even if the new doc did contain the topic, though,
the reader would have to search around for the topic, and perhaps that
would take more time or energy than they are willing to spend.

Instead, I'm including a deprecation notice at the top of each section, along
with links to related content in the new docs. Here's an example:

![A section of documentation that has a deprecation notice at the top
and links to where readers can find up-to-date
information.](/imgs/responsible-redirect.svg)

In addition to the deprecation notices, I've also removed the docs
from the table of contents so that new readers do not stumble upon them. They
still show up in search engines, though.

It's a fair bit of work, but it's the most user-friendly migration path
that I can think of. A bonus perk of this approach is that the links in the
deprecation notices help me make sure that I've comprehensively migrated all
of the old content.
