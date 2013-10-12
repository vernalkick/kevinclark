---
title: Looking at Progressive Enhancements the Wrong Way
status: live
categories:
	- Development
	- Opinion
---

<figure>
	<img src="/assets/articles/looking-at-progressive-enhancements-the-wrong-way/browsers.jpg" alt="">
	<figcaption>A few websites that don't work at all with Javascript disabled. From left to right: <a href="http://basecamp.com">Basecamp</a>, <a href="http://newcorsa.co.uk/">Corsa Colours</a>, <a href="http://www.mcdonalds.co.uk/ukhome/promotions/favourites.html">McDonnalds</a>, <a href="http://www.toolofna.com/">Tool</a>, <a href="http://www.squarespace.com/">Squarespace</a>.</figcaption>
</figure>

[Tom Dale][tom] recently wrote a toughtful [counter argument][against pe] to [Dan Mall][dan]'s [Sigh, JavaScript][sigh][^footnote]. You should read the whole piece, but basically, Dale argues that progressive enhancement is dead and that websites should only focus on using bleeding edge technologies to create the best experience for most users, even if that means than those who use older browsers or are on a poor connection just can't use your site:

> Embracing JavaScript from the beginning will let you build faster apps that provide UIs that just weren’t possible before. For example, think back to the first time you used Google Maps after assuming MapQuest was the best we could do. Remember that feeling of, “Holy crap, I didn’t know this was possible in the browser”? That’s what you should be aiming for.

> Don’t limit your UI by shackling yourself to outmoded mantras, because your competitors aren’t.

<!--more-->

I completely agree with his goals (use the best technology out there to craft the best experience possible), but I have to *disagree* with his conclusion. More specifically, I think he's looking at progressive enhancements the wrong way.

To me (at least), progressive enhancements isn't something that prevents you from being on top of new technologies, it's pretty much the exact opposite. Progressive enhancements is what allows you to be bold and push things forward, because you know that even with everything turned off, your website is still going to work (even if the experience isn’t as great as it could be with JS turned on). It’s a safety net that allows you to walk on that tightrope without having to take any risks. The browser doesn’t support CSS3? Alright, the corners won’t be rounded. The browser doesn’t support Javascript? Fine, the content will still be available in some way.

We’re putting a lot of effort these days into making sure that our work is future proof, why not go the extra mile and make sure it’s accessible, JavaScript or not? It doesn’t have to be identical, it just needs to work. That's the spirit of progressive enhancements: making the best of every situation.

Is progressive enhancements more work? Yes. Is it worth it? Definitely.

[tom]:https://twitter.com/tomdale
[against pe]: http://tomdale.net/2013/09/progressive-enhancement-is-dead/
[dan]:https://twitter.com/danmall
[pro pe]: http://danielmall.com/articles/progressive-enhancement/
[sigh]: http://danielmall.com/articles/progressive-enhancement/
[^footnote]: You should also read [Dan][dan]'s follow-up post: "[Progressive Enhancement. Still Alive & Kickin][pro pe]".