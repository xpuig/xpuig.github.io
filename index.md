---
layout: default
title: Home
---

<section id="home">
    <div class="row align-items-center">
        <div class="col-12">
            <h1>{{ "Hello World" | upcase }} 👋</h1>
            <p>Soy diseñador de producto y a ratos hago lo que puedo con el código.</p>
            <p>Me he especializado en Design Research en <a href="https://www.uxerschool.com" target="_blank">@Uxer School</a> y en Usabilidad en la <a href="https://www.uoc.edu" target="_blank">@UOC</a>.<br>
            Actualmente trabajo en Yournewself como UX/UI y diseñador de producto.</p>
            <p>Echa un vistazo a mi <a href="https://www.linkedin.com/in/xavipuighernandez/" target="_blank">Linkedin</a>.</p>
        </div>
        <!--<div class="col-sm-12 col-md-6">
            <img src="assets/img/bg_home.gif">
        </div>-->
    </div>
</section>

<!--<section id="hero">
    <img src="assets/img/0cvffgS.gif">
</section>-->

<section id="blog">
    <h2>{{ "Últimos posts" | upcase }}</h2>

    <ul class="home_posts">

    {% for post in site.posts %}
        <li class="post">
        <h3>
            <a href="{{ post.url }}">{{ post.title }}</a>
        </h3>
        {{ post.excerpt }}
        </li>
    {% endfor %}
    </ul>
</section>
