---
title: Better Looking Bullet Placeholders
tags:
---

A common pattern these days, is to put bullets as a field's placeholder to indicate a credit card number, a discount or a password field. The problem is that, if you just put `•••• •••• •••• ••••`, the bullets end up too close to each other, so we need to add a bit of letter-spacing for these fields only.

Here's a snippet of CSS that does just that:

``` css
input[placeholder*="••••"]::-webkit-input-placeholder {
    letter-spacing: .1em;
}
```

That selector looks for an input with a placeholder that contains four bullets in a row[^1] and applies a bit of letter-spacing to it. There you have it. [Better looking placeholders][placeholders]!

[^1]: Targetting placeholders with just one bullet would work just as well, but by targetting four bullets we make sure that a placeholder that contains just one bullet (and some text maybe) wouldn't be affected by this.

[placeholders]: http://cl.ly/image/3u0Q0U2H3n3i
