<h1 align="center">Scrolling to the anchor on link click</h1>
<h4 align="center">A function that smoothly scrolls the page to the anchor attached to the link.</h4>

<h2 align="center">What for</h2>

  When you need to create links on the site that lead to some «anchors», you have to write code (**Oh yes, I discovered America**). Also, for a better User Experience, consider smooth scrolling. Everything is already done in this repository.

<h2 align="center">What should be done</h2>

You just need to add an `id` attribute to the anchor, then add the special `data-scroll-link` attribute to the link leading to the anchor and enter the `id` of the anchor in its value. All was done.

<h2 align="center">Code example</h2>

```html
<nav class="nav">
  <a class="nav__link" href="" data-scroll-link="about">About us</a>
  <a class="nav__link" href="" data-scroll-link="features">Features</a>
  <a class="nav__link" href="" data-scroll-link="contact">Contact us</a>
</nav>
```

```html
<section class="section" id="about">
  <h2 class="section__title">About us</h2>
</section>

<section class="section" id="features">
  <h2 class="section__title">Features</h2>
</section>

<section class="section" id="contact">
  <h2 class="section__title">Contact us</h2>
</section>
```

The script will take the value of `data-scroll-link` and jump to the element with `id` with the same value. So a link with a `data-scroll-link` value of `about` will be anchored with an id of `about`, a link with a value of `features` will be anchored with an id of `features`, etc.
