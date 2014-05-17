---
title: Index cards
tags:
---

I find questions about writers’ tools both fascinating and repulsive: fascinating because learning about the habits and techniques of people whose work you admire is endlessly interesting, and occasionally even imparts useful knowledge. (If John McPhee swears by index cards as a method for determining a story’s structure, you ought to at least give it a try.) But discussions of tools also tend to be far too precious, leading people to imagine that if they cannot wake early and slip out to their private writer’s cabin, then they cannot possibly write and so ought to stay in bed. The fetishization of tools is a mechanism for procrastination and should be rejected as such.

But assuming we recognize that risk and take pains to avoid it, talking about our tools can be instructive. Routines and tools do matter—not only for writers but for any skill or trade. A good chef’s knife makes a good cook better, while a dull blade will limit her skills. A cook with a mandoline will have opportunities that one without will lack. It’s just as ignorant to say that tools don’t matter at all as it is to pronounce them magical.

Late last year, Jeremy Keith wrote about what it means to publish online today:

> Publishing on your own website is still just too damn geeky. The siren-call of the silos is backed up with genuinely powerful, easy to use, well-designed tools. I don’t know if independent publishing can ever compete with that.

The thing is, I like the geeky parts of publishing. That’s part of why I publish anything at all. Writing here was never just about sharing my writing but also about building systems for that writing: systems that could enable a particular kind of writing, which may even be unique to me (or as unique as anything gets, anyway). And so the process for how that writing comes together, and the tools I use to build it, are as important to me as the rhythm of any particular sentence.

I am similarly aligned with Jeremy on another point: that of preservation. Independent publishing on the web benefits by being free of concerns about what will happen to your work. No one owns this domain but me, and no one but me can take it down. I will not wake up one morning to discover that my service has been “sunsetted” and I have some days or weeks to export my data (if I have that at all). These URLs will never break. If nothing else, that security is a compelling reason to publish on your own site, never mind how geeky it is.

But preservation doesn’t only depend on control over a space: it also depends on the format of the stuff you’re trying to preserve. I’ve always published to my own domain; but for years that writing was preserved in the form of a database—something that needed to be manipulated by another tool to be useful or readable.

Increasingly, that database felt inaccessible to me, like a mysterious black box I couldn’t see into. I didn’t feel confident that, some years or decades from now, I would be able to access or read that writing in that form.

```
---
layout: book
title: Hild
subtitle: A Novel
author: Nicola Griffith
amazon-url: http://www.amazon.com/dp/0374280878
publisher: Farrar, Straus and Giroux
copyright: 2013
cover: /img/griffith-hild.jpg
excerpt: From the scant historical record of Hild of Whitby, Griffith spins an extraordinary story of a girl who learns to navigate the world of kings and thegns.
permalink: /reading/hild
---

From the scant historical record of Hild of Whitby, Griffith spins an extraordinary story of a girl who learns to navigate the world of kings and thegns. Hild is fierce and clever...
```

The stuff up at the top is a [YAML]() block. YAML is defined as a “a human friendly data serialization standard.” Another way to define it is a readable, plain-text method for indicating metadata. Even if you’ve never seen YAML before, you can probably figure this out at a glance. At the top, layout: book signals to Jekyll that this post uses the layout (or template) called “book.” (This site has three principle layouts—book, essay, and note—for each of the three kinds of posts.) Next is the title, which in this case is both the title of the book and the title of the post. Following that are `subtitle`, `author`, `amazon-url`, `publisher`, `copyright`, and `excerpt`, all of which are self explanatory.