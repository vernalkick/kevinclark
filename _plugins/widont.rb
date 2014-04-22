require 'liquid'

module WidontFilter

  # Return the element's text after applying the filter
  def widont(text)
    text.strip!
    text[text.rindex(' '), 1] = '&nbsp;' if text.rindex(' ')
    return text
  end

end

Liquid::Template.register_filter(WidontFilter)
