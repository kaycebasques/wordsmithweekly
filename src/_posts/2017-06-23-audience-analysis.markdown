---
layout: post
title: Audience Analysis With Inline Feedback
date: 2017-06-23 16:12:46
permalink: blog/audience-analysis
summary: "Question: What's the best way to figure out who's your audience?"
---

Answer: Just ask them.

I've built an "inline feedback" widget that lets me ask arbitrary questions
to the readers of my docs.

For example, I recently wrote an [interactive tutorial on using Chrome
DevTools to view and change CSS][CSS]. Most readers of the DevTools docs are
web developers, but for this particular doc, my hunch is that there is a
sizable minority of designers.

[CSS]: https://developers.google.com/web/tools/chrome-devtools/css/

To find out, I just ask my users at the top of the doc what type of role
they identify with.

![Audience analysis in the CSS
tutorial](/imgs/audience-analysis.png){:.content__img}

When they click a button, the result gets logged as a Google Analytics event.

I'd tell you the results, but there's probably something in my terms of
employment against that ;)

More on inline feedback:

* [Inline Feedback](/blog/inline-feedback) blog post.
* The source code for the [CSS interactive tutorial][css-src] and the
  [inline feedback widget][multichoice].
* In [Get Started With Analyzing Runtime Performance][runtime] I use inline
  feedback to learn about how much experience my readers have.

[css-src]: https://raw.githubusercontent.com/google/WebFundamentals/master/src/content/en/tools/chrome-devtools/css/index.md
[multichoice]: https://raw.githubusercontent.com/google/WebFundamentals/master/src/content/en/_shared/multichoice.html
[runtime]: https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/
