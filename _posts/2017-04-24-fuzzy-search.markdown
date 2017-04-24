---
layout: post
title: Documenting Fuzzy Search Interfaces
date: 2017-04-24 10:46:59
permalink: blog/fuzzy-search
summary: When the conventions for normal text boxes don't cut it.
---

The Command Menu in Chrome DevTools suppports many commands: open files,
jump to tabs, toggle settings, change the UI, and so on.

The Command Menu supports fuzzy search. For example, there's a command for
disabling JavaScript on the page. The exact syntax for the command is
`Disable JavaScript`. But you don't need to type all of that. You can
just type `JS`, and the Command Menu correctly filters out most other commands.

![Disabling JS via the Chrome DevTools Command Menu][demo]

[demo]: /imgs/disablejs.gif

I'm still not sure how to document a UI like this. My initial
idea was to document it like any other text box. For example:

<blockquote class="content__quote">
  To disable JavaScript, type <code>Disable JavaScript</code>.
</blockquote>

But that's inefficient. You don't need to type all of those characters.
Furthermore, in some cases, it's more effective to type one of the other
words in the command. For example, the `Show Rendering` command shows the
Rendering tab. There's no other command that includes the word `Rendering`,
but there are many other commands that include the word `Show`, so typing
`Rendering` by itself is by far the fastest way to execute that command.
So, maybe the best way to document this UI would be something like this:

<blockquote class="content__quote">
  To disable JavaScript, start typing <code>JavaScript</code> and select
  <code>Disable JavaScript</code>.
</blockquote>

This phrasing signals to users that 1) they don't need to type out the
entire command, and 2) they can use any word from the command to filter
out the results.
