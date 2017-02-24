---
layout: post
title: Maintaining Cross-References
date: 2017-02-24 12:37:26
permalink: blog/cross-references
summary: A low-tech solution for keeping cross-references up-to-date.
---

When I cross-reference a doc, I use the "see X" formula. E.g. "see
<a href="https://developers.google.com/web/tools/chrome-devtools/javascript">
Get Started With Debugging JavaScript</a> to learn the basics of debugging in
DevTools", where the link matches the name of the doc.

Maintaining the cross-references to the docs can be a pain. I'm thinking about
using a more programmatic approach.

All of the cross-references will be stored in a single file, say `cross-refs.html`:
    
    {% raw %}{% setvar js_get_started %}<a href="...">Get Started With
    Debugging JavaScript</a>{% endsetvar %}{% endraw %}

And then, whenever I need to reference that doc, I'll just use the variable:

    {% raw %}{% include "cross-refs.html" %}
    See {{ js_get_started }} to learn the basics of debugging.
    {% endraw %}

I'm also thinking about using this approach for maintaining keyboard
shortcuts.

In other words, I'm revisiting single-sourcing.

The coolest solution I've seen is Sphinx's [`:ref:`][ref] directive, which
ensures that the link text always matches the name of the title, without
creating extra noise, unlike my separate file solution above.

[ref]: http://www.sphinx-doc.org/en/stable/markup/inline.html#role-ref
