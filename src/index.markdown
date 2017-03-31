---
layout: default
---
<h1>Latest posts</h1>
<ol class="posts">
  {% for post in site.posts limit:5 %}
    <li class="post">
      <a class="post__link" href="{{ post.url }}">
        <p class="post__title">
          {{ post.title}}
          <span class="post__date">
            {{post.date | date: '%B %d, %Y' }}
          </span>
        </p>
        <p class="post__summary">{{ post.summary }}</p>
      </a>
    </li>
  {% endfor %}
</ol>
<a href="/blog"><button class="content__button">More posts</button></a>
