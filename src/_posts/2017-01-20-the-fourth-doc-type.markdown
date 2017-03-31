---
layout: post
title: The Fourth Doc Type
date: 2017-01-20 17:13:17
permalink: blog/the-fourth-doc-type
summary: "The holy trinity for technical writers is tutorials,
guides, and references. But maybe it's time to get a little heretical and
introduce a fourth doc type into our establishment."
---

According to [levels of processing][LOP] theory, the more you have to
think about something, or the more energy you spend, the better you remember
it. E.g. a doc with images is better than one without, because the reader
spends extra energy thinking about how the images map to the text.

On that note, my colleague Rob Dodson recently made an interesting
observation about the limitations of tutorials:

<blockquote class="content__quote">
  I think tutorials also tend to be more of an exercise in copying, rather than
  challenging the user to think.
</blockquote>

What Rob's getting at here is that there's a sort of *copy-paste*
nature to a lot of tutorials. It's easy to coast through many tutorials without
truly processing what you're doing.

In some cases, completing the task is good enough. Maybe it's a rare task that
the reader won't need to repeat often. In which case, it's a waste to
structure the tutorial in a such a way that the reader commits the task to
long-term memory.

But when we're explaining mission-critical tasks, or tasks that the reader will
have to repeat many times, maybe we're doing a disservice to our readers by
presenting knowledge in a format that they are likely to forget.

I've got two suggestions for how we might incorporate
a levels of processing approach into our docs more. One's short-term, the
other's long-term.

In the short-term, I suggest that we engage our readers in more
dialogue. Take this section from my latest tutorial, [Get Started With
Analyzing Network Performance In Chrome DevTools][tutorial]:

<img alt="A screenshot from one of my tutorials that could benefit from levels
          of processing" src="/imgs/depth-of-processing.png"
     class="content__img"/>

Rather than just telling them what to do, perhaps I could explain to them
the goals, and then challenge them to find the UI features which are related
to those goals. Not the best example, but you get the gist.

In the long-term, I suggest that we introduce a fourth doc type into our
standard toolbox: homework. The core elements of a homework-based doc type
are:

* Give the readers all of the conceptual and practical knowledge they need
  to solve the problems.
* State the homework problems in a general way, that allows the readers to
  complete the tasks as they see fit, while also providing helpful constraints
  so they don't get swamped in uncertainty.
* Provide a process for readers to submit their solutions and receive
  feedback.

By baking the submit-solutions-receive-feedback mechanism into the doc type,
we'd also be getting a treasure trove of data on how our readers go about
problem-solving.

Check out [Chapter 1: Boolean Logic][HW] from the Elements of Computing
Systems for an excellent example of homework-based learning.

All of this is probably nothing new to you. We all encountered this format
for years in school. And that's exactly why it's so weird that we're not doing
this more.

[LOP]: https://en.wikipedia.org/wiki/Levels-of-processing_effect
[tutorial]: https://developers.google.com/web/tools/chrome-devtools/network-performance/
[HW]: http://www.nand2tetris.org/chapters/chapter%2001.pdf
