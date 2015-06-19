# Blog settings
# ------------------------------------------------------------------------------

activate :blog do |blog|
  blog.permalink = "articles/{title}"
  blog.sources = "articles/{year}-{month}-{day}-{title}.html"
  blog.layout = "article"
  blog.default_extension = ".md.erb"
  blog.summary_length = 30
  blog.summary_generator = Proc.new do |resource, rendered, length, ellipsis|
    rendered = rendered.gsub(%r{</?[^>]+?>}, '')
    rendered = truncate_words(rendered, length: length)
    rendered
  end
end


# Page options, layouts, aliases and proxies
# ------------------------------------------------------------------------------

# Use "pretty" URLS
activate :directory_indexes

# Use smartypants
set :markdown, :smartypants => true

page "/feed.xml", layout: false

Time.zone = "America/New_York"


# Helpers
# ------------------------------------------------------------------------------

helpers do
  def navigation_link(link_title, link_path)
    page_path = '/' + current_page.destination_path.gsub(/(index\.html|\/.*)/, '')

    "<a href='#{link_path}' #{"class='current'" if link_path == page_path}>#{link_title}</a>"
  end

  def figure(url, caption = nil, options={})
    types = {
      image: /.*\.(png|gif|jpe?g|svg)/,
      video: /https?:\/\/.*youtube\.com.+?v=(\S+)/
    }

    if url =~ types[:video]
      content =  "<div class='fluid-width-video-wrapper'>"
      content += "<iframe src='//www.youtube.com/embed/#{$1}' allowfullscreen></iframe>"
      content += "</div>"
    else
      content = "<img src='#{url}' alt='#{escape_html(caption) || "Post image"}' />"
    end

    markup =  "<figure class='#{options[:class]}'>"
    markup += content if content
    markup += "<figcaption>#{caption}</figcaption>" if caption
    markup += "</figure>"
    markup
  end
end


# Assets
# ------------------------------------------------------------------------------

set :css_dir, 'assets/stylesheets'
set :js_dir, 'assets/javascripts'
set :images_dir, 'assets/images'

# Autoprefixer
activate :autoprefixer do |config|
  config.browsers = ['last 2 versions', 'Explorer >= 9']
  config.cascade  = false
  config.inline   = true
end


# Build-specific configuration
# ------------------------------------------------------------------------------

configure :build do
  activate :minify_css
  activate :minify_javascript
end
