
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


# Typer

#$('[data-typer-targets]').typer()

# $('[data-type]').each (index, phrase) =>
#   phrase = $(phrase)
#   text = phrase.text()
#   console.log(text)
#   phrase.text('')
#   letters = text.split("")
#   console.log(letters)

#   for letter in letters
#     setTimeout ->
#       phrase.append(letter)
#     , 5000

