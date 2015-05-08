---
layout: page
title: 日本Dartユーザー会へようこそ！
tagline: Supporting tagline
---
{% include JB/setup %}

日本Dartユーザー会 (Dartlang Japan Users Group) は、
Dartを愛する日本の開発者のためのコミュニティです。

Dartのオフィシャルサイトは[こちら](https://www.dartlang.org/)

### 最近の投稿
    
<ul class="posts">
  {% for post in site.posts limit:5 %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

### メーリングリスト

Dartに関する質問やユーザー会への意見、要望、その他のためのメーリングリストがあります。

[Googleグループ](https://groups.google.com/forum/#!forum/dartlang-users-jp)

### 外部サイト

[公式サイト](https://www.dartlang.org/)




