---
title: Responsive Layouts
status: live
categories:
- Responsive Web Design
---

<figure>
	<img src="/assets/images/articles/responsive-layouts/layouts.png" alt="">
</figure>

[Responsive Web Design][responsive-book] is what everybody’s talking about now. It arrived like a revelation at a time when designers didn’t know what to make of the slew of new devices gaining traction in the market. When I first read [Ethan’s article][responsive-article], everything made so much sense. The way we did things previously was definitely a hack and looking back, it just felt silly. So, we’ve pretty much all embraced the multi-device reality and changed our whole process to create websites that adapt to the device they're viewed on.

That means pixel-perfect Photoshop comps had to go. There’s no way that we can represent in a fixed canvas the [content choreography][content-choreo] that needs to happen when the user changes the size of the browser. So we moved away from Photoshop to the browser, being the source of the absolute truth. Today, many designers work almost exclusively in the browser.

There’s a problem though. There’s way too much friction between the idea in your head and it's execution in HTML and CSS. That slows down innovation and hinders easy exploration. I think that can explain the resurgence of really simple “single-column” websites that are, in my opinion, a bit boring. Of course, [Responsive Web Design][responsive-book] is way easier if you’re willing to make everything fit in one column, but I think achieving dynamic layouts is part of the challenge of making a *good* responsive website.

> Having a one-column website that just scales the font-size up to accomodate for larger screens misses the point because it forgets the larger viewports in favor of a one-size-fits-all approach.

If we look at the print industry, most of our websites lend a lot more similarities to the magazine than to the book. We often use images, quotes and video to make our content dynamic and engage the reader in an experience. In magazines, the layout plays a large part of the reading experience.

### Content, layout, mobile, repeat

I have developped a process that works really well for me. First, you *have* to start with some content. This will inform how you can use grids and layout to enhance that content and complement it. I always start thinking about what I want to do in larger viewports *first*, because you have much more freedom to do interesting things than on a small screen. Once I’ve achieved something I’m happy with, then I start thinking more deeply about how that expercience can be translated on mobile devices. Often, that’s when you’ll know if you have hierarchy issues or unnecessary content. That’s when you go *back* and alter your previous design to take into consideration what you’ve learned while designing the mobile experience.

### Have fun with it!

We're all figuring this out as we go and I think this trend is merely a byproduct of us getting used to a lot of changes in our process. Yes, some things be harder to pull off using percentages and fluid grids, but it's part of the challenge of making a responsive website! And if stuff breaks, so what? Don't give up on a layout because it's hard to implement. Don't let the tools rule what you do, [adapt][adapt] the tools to do what you want.

[responsive-book]: http://www.abookapart.com/products/responsive-web-design
[responsive-article]: http://alistapart.com/article/responsive-web-design
[content-choreo]: http://trentwalton.com/2011/07/14/content-choreography/
[adapt]: http://www.quotationspage.com/quote/692.html
