---
layout: index.html
title: By zero
---
<ul class="posts">
{%- for post in collections.post %}
  <li>
    <a href={{ post.url }}>
        <h1>{{ post.data.title }}</h1>
        <p>{{ post.data.description }}</p>
    </a>
  </li>
{% endfor -%}
</ul>