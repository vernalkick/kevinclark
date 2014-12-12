module Jekyll
  class VideoFigureTag < Liquid::Tag

    @url = nil
    @caption = nil

    VIDEO_URL = /https?:\/\/\S+?v=(\S+)/
    VIDEO_URL_AND_CAPTION = /https?:\/\/\S+?v=(\S+)\s+("|')(.*)("|')/

    def initialize(tag_name, markup, tokens)
      super

      if markup =~ VIDEO_URL_AND_CAPTION
        @url = $1
      elsif markup =~ VIDEO_URL
        @url = $1
        @caption = $3
      end
    end

    def render(context)
      source =  "<figure>"
      source += "<div class='fluid-width-video-wrapper'>"
      source += "<iframe width='1280' height='720' src='//www.youtube.com/embed/#{@url}' frameborder='0' allowfullscreen></iframe>"
      source += "</div>"
      source += "<figcaption>#{@caption}</figcaption>" if @caption
      source += "</figure>"

      source
    end

  end
end

Liquid::Template.register_tag('video', Jekyll::VideoFigureTag)
