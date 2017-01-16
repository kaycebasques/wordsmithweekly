---
layout: post
title: Effective Education
date: 2017-01-06 09:37:00
permalink: blog/effective-education
summary: "Technical writers, and the knowledge professions in general, are
in the business of education. How do we impart knowledge to others
as quickly and effectively as possible? Where should we look for models of
effective education?"
---

<p>
  <img src="/imgs/mh.svg" class="content__leader"
       alt="An Irrelevant Image Of The Mad Hatter"/>
  Warren Buffett's business partner, Charlie Munger, is famed for his ability
  to apply the "big ideas" from across the disciplines to reach conclusions
  that few others can see.
</p>

That's no small feat. There are a lot of disciplines, and a lot of
big ideas within those disciplines. Charlie needed a system for retaining and
recalling all that knowledge. To find that system, he turned to the king (or
queen, if you're the matriarchy type) of all his big ideas: incentives.

Incentives make the world go round. If you want to understand
why something in society is working, or why it's miserably dysfunctional,
figure out the incentives that are causing it, says Charlie.

Finding the most effective educational system was simply a matter of finding
the field that has the best incentives for effective education.

That field is pilot school. When you're responsbile for teaching someone how
to careen a metal tube through the sky, with the lives of hundreds of innocent 
bystanders at stake, you're going to think long and hard about how to
effectively impart that knowledge.

With that said, here are the six elements of pilot school that make it so
effective, according to Charlie:

<blockquote class="content__quote">
  <ol class="content__quote-list">
    <li>
      His formal education is wide enough to cover practically everything
      useful in piloting.
    </li>
    <li>
      His knowledge of practically everything needed by pilots is not taught
      just well enough to enable him to pass one test or two; instead, all his
      knowledge is raised to practice-based fluency, even in handling two or
      three intertwined hazards at once.
    </li>
    <li>
      Like any good algebraist, he is made to think sometimes in a forward
      fashion and sometimes in reverse; and so he learns when to concentrate
      mostly on what he wants to happen and also when to concentrate mostly
      on avoiding what he does not want to happen.
    </li>
    <li>
      His training time is allocated among subjects so as to minimize damage
      from his later malfunctions; and so what is most important in his
      performance gets the most training coverage and is raised to the highest
      fluency levels.
    </li>
    <li>
      "Checklist" routines are always mandatory for him.
    </li>
    <li>
      Even after original training, he is forced into a special
      knowledge-maintenance routine: regular use of the aircraft simulator to
      prevent atrophy through long disuse of skills needed to cope with rare
      and important problems.
    </li>
  </ol>
  <p class="content__quote-citation">
    "The Need for More Multidisciplinary Skills from Professionals:
    Educational Implications", Poor Charlie's Almanack (Third Edition), p. 306
  </p>
</blockquote>

Wrapping up, here's some random thoughts on how we might apply this
education system to technical writing.

**Practice-Based Fluency (#2)**

Make docs as interactive as possible. To me, this is more obvious for
tutorials, but there's no reason to stop there. For example, maybe API
references can incorporate interactive elements. At the bottom of a
function's reference, there could be a sandbox for trying out that
function, or a set of problems that challenge you on how to use the function
in different scenarios.

In my own products, I'm slowly but surely shipping a whole set of interactive
tutorials for Chrome DevTools. [Get Started with Debugging JavaScript in Chrome
DevTools](https://developers.google.com/web/tools/chrome-devtools/javascript/)
is my latest shipment.

**Forward- And Reverse-Thinking (#3)**

When figuring out what topics to document, think not only about what the
user is trying to accomplish, but also what they are trying to avoid.

For example, frontend developers use the Chrome DevTools Network panel to
analyze page load speed. The user's goal, then, is to "make pages load
faster". But in practice, you solve this by thinking in reverse, i.e. by
spotting bottlenecks.

**Prioritized Training (#4)**

When it comes to docs, I think there's a cult of "completeness". By that I mean
there's an unspoken assumption that we need to document our products
comprehensively. This unquestioned assumption might be harming our users.
I think it's pretty common to write one tutorial, guide, and reference
for a mission-critical topic, consider the job done, and move on to some
other topic, possibly lower-priority. *Maybe our users need more content
than just one tutorial / guide / reference to really master the topic*. In
which case, our time and energy would be better spent creating more content
on the mission-critical topic.

**Checklist Routines (#5)**

Preface the headings in your tutorials with "Step 1", "Step 2", and so
on. Organize tasks and workflows into numbered-lists as much as possible.

**Knowledge-Maintenance Routines (#6)**

Duolingo has an excellent knowledge-maintenance routine. Duolingo keeps track
of how long it's been since you completed a lesson, and
sends you a reminder to brush up on your skills when you've been slacking.
Maybe we can port this model to our docs?

This would require a new model, though: an initial lesson catered
to first-time learners, and then follow-up lessons structured as review
content.

## Discussion

Agree? Disagree? Got more ideas on this topic?

* [Twitter][twitter]
* [r/technicalwriting][reddit]
* [Hacker News][HN]

[twitter]: https://twitter.com/intent/tweet?text=%40kaycebasques%20re%3A%20%22Effective%20Education%22...
[reddit]: https://www.reddit.com/r/technicalwriting/comments/5oegf0/effective_education/
[HN]: https://news.ycombinator.com/item?id=13414089
