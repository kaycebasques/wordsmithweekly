---
layout: post
title: Inline Feedback
date: 2017-01-27 17:10:35
permalink: blog/inline-feedback
summary: An uncommon documentation metric that deserves more attention.
---

One metric that I'm excited about is inline feedback. The basic idea is to
engage users with questions on how things are going as they progress through
a doc.

Take Heroku's [Getting Started on Heroku with Python][heroku] tutorial for
example.

<img alt="A screenshot from Heroku's tutorial." class="content__img"
     src="/imgs/inline-feedback.png"/>

The text of the primary button reflects the action that the user just
completed. This is also a clever way to summarize the knowledge / skills that
the user just acquired.

Heroku's implementation is particularly effective, because readers are forced
to engage in order to proceed to the next section. My implementation, on the
other hand, will be on the bottom of sections of a single page, so I'm
expecting to get less engagement.

The key is to track which feedback button users click, and to make it easy
for them to report their problems. The goal, when it comes to tutorials, is to
have more data on where exactly users are bailing.

The approach isn't just limited to tutorials. I'm planning on using this
system to ask a whole range of questions in my docs. For example, sometimes
I write about upcoming features. I can use this system to
ask specific questions about what readers think about those new features.
I personally have a form of [banner blindness][bb] when it comes
to feedback widgets, though, and I suspect a lot of my users do, likewise.
I'm hoping that the deeply relevant, customized questions will break through
that.

I'll report back when my own system is implemented and let you know how it's
going.

[heroku]: https://devcenter.heroku.com/articles/getting-started-with-python#set-up
[bb]: https://en.wikipedia.org/wiki/Banner_blindness
