---
title: Responsive Web Typography
link: http://elliotjaystocks.com/blog/responsive-web-typography/
---


<figure>
  <img src="http://elliotjaystocks.com/assets/5345c962d6af684c8c0002a5/article_rwt2.png" alt="Article illustration for Advanced web typography: Responsive web typography">
</figure>

Responsive Web Design is not merely concerned with layout — done properly, there are a number of considerations one should take into account with typography. After all, <a href="http://ia.net/blog/the-web-is-all-about-typography-period/">the web is 99% typography</a>, right?

### Responsive body type

For me, my principle concern around web type in a responsive world is all about <em>measure</em>. After all, when you have viewports that can grow (or shrink) indefinitely, the length of a line can very quickly become uncomfortably long (or short). If I have one major criticism of early-adopting responsive sites, it’s that many of them didn’t take this into consideration, and although the situation is improving, it’s a mistake a I still see a lot of people make.

Robert Bringhurst suggests that:

> The optimum measure is <a href="http://webtypography.net/2.1.2">around 45 to 75 characters per line</a>. I agree that this is a good indicator, although like most things in design, I prefer to just do it by feel: it soon becomes obvious if something doesn’t feel right. Whenever I have a line of type that starts to feel like it’s getting uncomfortably long as my viewport grows wider, I throw in a media query to remedy the situation.

For the last year or two, my approach to media queries (with particular reference to measure) has been to:

- increase the font size, or
- decrease the padding on the containing element, or
- do both.

You can see this in effect on this very site. Here’s a simplified version of the <span class="caps">CSS</span> that controls this part of the design:

```
@media screen and (min-width:1200px) {
  body { font-size:110%; } /* Increase the font size */
}

@media screen and (min-width:1400px) {
  html { padding:0 15%; } /* Reduce the container width */
}

@media screen and (min-width:1600px) {
  body { font-size:125%; } /* Increase the font size */
}

@media screen and (min-width:1800px) {
  html { padding:0 20%; } /* Reduce the container width */
}
```

Of course, I’ll admit that this is much easier to do on simpler sites like blogs, but the principle is the same no matter how complex the design: as your overall space grows, adapt your measure by tweaking the font size and the element’s width.

<a href="http://trentwalton.com/2012/06/19/fluid-type/">Trent Walton has a great technique</a> for keeping your eye on an optimum measure that’s especially handy if you prefer hard facts over the ‘feel’ approach: simply place an asterisk at character 45 and character 75, and add in a new breakpoint every time the two asterisks appear on the same line. Sorted!

<figure>
  <img src="http://elliotjaystocks.com/assets/5345b1be4f720a79900003bc/article_trent.png" alt="Trent Walton’s site">
  <figcaption><a href="http://trentwalton.com/2012/06/19/fluid-type/">Trent Walton</a>’s asterisk technique</figcaption>
</figure>

It’s worth noting that you could just put in a <code>max-width</code> declaration once you’ve got a measure you feel is optimal for large screens, but personally I feel like <code>max-width</code> flies in the face of <span class="caps">RWD</span>: because we don’t know the size of future viewports, we should let things be as open as possible. I admit, though, that this can end up with gigantic text on large monitors (as an experiment, I took this to its logical conclusion with <a href="http://csszengarden.com/217/">my recent <span class="caps">CSS</span> Zen Garden theme</a>), so use your own discretion. Oh, and as an interesting side note in case you live in a cave and missed this last year, Marko Dugonjić conducted <a href="http://webdesign.maratz.com/lab/responsivetypography/">an interesting experiment</a> with font size in relation to the user’s proximity to the screen. <a href="http://vimeo.com/74368443">His talk from last year’s Kerning conference</a> is well worth a watch.

And, if you haven’t done so already, take a look at &nbsp;<a href="http://css-tricks.com/viewport-sized-typography/">using viewport units for viewport-sized typography</a>. This is an interesting development, although I’ll admit that I haven’t yet looked into it that deeply.

### Responsive display type

When dealing with display type, we often want deeper control over our headings, and that’s where <a href="http://fittextjs.com/">Fittext.js</a> comes in. Just like when I mentioned <a href="http://letteringjs.com/">Lettering.js</a> in <a href="http://elliotjaystocks.com/blog/kerning/">yesterday’s post on kerning</a>, I don’t think (yet another of) Dave’s awesome plugins needs much explanation, since it’s been around a while now, but in short it forces your type to perform more like an image; specifically, an image set to 100% of the container’s width. You can see it in action on my site in all of my ’Tomorrow’s Web Type Today’ series of blog posts (<a href="http://elliotjaystocks.com/blog/the-fine-flourish-of-the-ligature/">1</a>, <a href="http://elliotjaystocks.com/blog/expert-subsets-for-css-in-123/">2</a>, <a href="http://elliotjaystocks.com/blog/say-it-with-a-swash/">3</a>, <a href="http://elliotjaystocks.com/blog/stylesets/">4</a>).
If we’re to take our typography to the next level, though, we need to focus on the details, not just the big-picture stuff that’s easier to spot like measure and image-like display type.

Something that’s often overlooked is that changes to font size or container width should also result in changes to leading (or `line-height` in <span class="caps">CSS</span>). I’ve seen so many sites (my own included, I should add) that exhibit unpleasant gaps between lines when viewed at certain sizes. The same can be said of margin or padding values between paragraphs, or lists, or headings. To achieve a more balanced `line-height` value, there are some very clever maths you can do to make sure your values are directly proportional to your font size. Or you can just do it by feel, which is the method I prefer. If it doesn’t look right, change the number a bit!

Let’s not forget that we work in an inherently flexible medium; there are no hard and fast rules here. Responsive Web Typography is all about treating type with the respect it deserves in a variety of contexts, over which you don’t have finite control.
