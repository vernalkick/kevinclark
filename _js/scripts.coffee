
# Variables

body = $("body")
nav_toggles = $(".open-nav, .close-nav")


# Mobile navigation

nav_toggles.click ->
  if body.is(".nav-visible")
    body.removeClass("nav-visible")
  else
    body.addClass("nav-visible")
  return false
