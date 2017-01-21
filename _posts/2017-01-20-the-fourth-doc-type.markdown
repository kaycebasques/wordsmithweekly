---
layout: post
title: The Fourth Doc Type
date: 2017-01-20 17:13:17
permalink: blog/the-fourth-doc-type
summary: "The holy trinity for technical writers is tutorials,
guides, and references. But maybe it's time for a fourth doc type."
---

<img src="/imgs/rabbit.png" class="content__leader"
     alt="An Irrelevant Image Of The White Rabbit"/>

There's a phenomenon in psychology called [levels of processing][LOP] which,
I think, has a lot of implications for how we should go about this whole
"technical writing" thing. Levels of processing basically says that the more
energy you expend and the more you have to think about how something works,
the better you remember it. E.g. a doc with images is better than
a doc without, because the reader has to spend extra energy figuring out how
the images map to the text info.

On that note, my colleauge Rob Dodson recently made an interesting
observation about the limitations of tutorials:

<blockquote class="content__quote">
  I think tutorials also tend to be more of an exercise in copying, rather than
  challenging the user to think.
</blockquote>

Make no mistake, no one is arguing here that tutorials are ineffective. It's
better to have tutorials than to not. Tutorials are useful because they
provide a guided path for our readers to get hands-on experience with
our products. Using the levels of processing model, the act of following along
with a tutorial and doing the steps yourself is a deeper learning experience
than just reading about it.

What Rob's getting at here, though, is that there's a sort of *copy-paste*
nature to a lot of tutorials. It's easy to coast through many tutorials without
truly processing what you're doing. Read instruction. Click button.
Read next instruction. Type in command. Repeat until complete. Pat yourself on
the back.

I think this ability for readers to complete tutorials without really
processing what they're doing is an ironic side effect of the technical writer
community's desire to help their readers succeed. I've heard over and over
that tutorials need to be as straightforward and easy as possible, because
the worst thing we can do is give our readers a tutorial that they can't
complete. That may be true. I'm not going to take on that battle. All I'm
pointing out here is that levels of processing seems to suggest that we're
making it *too* easy on our readers.

Take programming for example. The more time I spend or frustration I
experience when debugging an issue, the less likely it is that I'll repeat that
mistake in the future.

I've got two suggestions for how we might incorporate
a levels of processing approach into our docs more. One's short-term, the
other's long-term.

In the short-term, I suggest that we engage our tutorial readers in more
dialogue. Take this section from my latest tutorial, [Get Started With
Analyzing Network Performance In Chrome DevTools][tutorial]:

<img alt="A screenshot from one of my tutorials that could benefit from levels
          of processing" src="/imgs/depth-of-processing.png"
     class="content__img"/>

Rather than just telling them what checkbox to check, perhaps I could structure
it like so: "On this panel, there is an option to emulate how a first-time
user experiences your site. Which one do you think it is?" The reader would
select their choice in an interactive, multiple-choice response box. The
tutorial responds with "correct!" or "sorry, it's actually **Disable
Cache**... the option you selected does _____". Only after
this dialogue does the tutorial give the instruction to check the checkbox.

In the long-term, I suggest that we introduce a fourth doc type into our
standard repetoire: quizzes. Or homework, challenges, or whatever name makes
the most sense to you. They would function just like they did in school. You
learn a general skill, and then the teacher gives you a set of problems for
you to apply that skill on. When it comes to learning experiences, this is
as deep as it gets.

The challenge is structuring the quizzes in a way that gives readers
readers room to solve them in their own way, while also being able to validate
that the answers are correct.
For a wonderful example of this approach, check out [Nand2Tetris][nand]. This
book teaches you how to build a computer from the ground up, starting with
logic gates. You can build the gates (in the hardware
emulator) however you see fit, so long as they pass the test suites provided
with the course.

[LOP]: https://en.wikipedia.org/wiki/Levels-of-processing_effect
[tutorial]: https://developers.google.com/web/tools/chrome-devtools/network-performance/
[nand]: http://www.nand2tetris.org/
