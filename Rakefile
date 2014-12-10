require 'date'

# Adapted from # https://github.com/jberkel/zegoggl.es/blob/master/Rakefile

task :default => :deploy

desc "build the site with jekyll"
task :build do
  sh "jekyll build -s ./_source ./website"
end

desc "testing"
task :test do
  sh "git push origin master"
  sh "git push prod master"
end

desc "clean"
task :clean do
  rm_rf 'website/*'
end

desc "add changes to git repo"
task :add do
  sh "git add ."
  message = ENV['MESSAGE'] || begin
    puts "commit message: "
    STDIN.gets.strip
  end
  sh "git commit -m '#{message}'"
end

desc "push to git repo"
task :push do
  # ensure_committed
  sh "git push origin master"
end

desc "build site, upload to NearlyFreeSpeech, then deploy to github"
task :deploy => [ :add, :build, :upload, :sitemap, :ping, :push ] do
  sh "working..."
end

def ensure_committed
  system "git diff --quiet HEAD"
  raise "uncommitted changes detected. commit changes first!" unless ($?.success? || ENV['FORCE'])
end

desc 'Generate and publish the entire site, and send out pings'
task :publish => [:build, :push, :upload, :sitemap, :ping] do
end

desc 'create a new draft post'
task :post do
  title, slug = get_title
  file = File.join(File.dirname(__FILE__), '_posts', slug + '.md')
  create_blank_post(file, title)
  open_in_editor(file)
end

desc 'create a new link post'
task :linked do
  title, slug = get_title
  link = get_link
  file = File.join(File.dirname(__FILE__), '_posts', slug + '.md')
  create_link_post(file, title, link)
  open_in_editor(file)
end

desc 'List all draft posts'
task :drafts do
  puts `find ./_source/_posts -type f -exec grep -H 'published: false' {} \\;`
end

# Helper method for :draft and :post, that required a TITLE environment
# variable to be set. If there is none, the task will exit.
#
# If there is a title given, then this method will return it and a escaped
# version suitable for filenames.
def get_title
  unless title = ENV['title']
    puts "USAGE: rake post link='the post title'"
    exit(1)
  end
  return [title, "#{Date.today}-#{title.downcase.gsub(/[^\w]+/, '-')}"]
end

def get_link
  unless link = ENV['link']
    puts "USAGE: rake link link='http://carpeaqua.com' TITLE='the post title'"
    exit(1)
  end
  return link
end

# Helper method for :draft and :post, that will create a file at a given
# location and fill it with an empty post.
def create_blank_post(path, title)
  # Create the directories to this path if needed
  FileUtils.mkpath(File.dirname(path))

  # Write the template to the file
  File.open(path, "w") do |f|
    f << <<-EOS.gsub(/^    /, '')
    ---
    title: #{title}
    tags:
    ---

    EOS
  end
end

# Create a link style post.
def create_link_post(path, title, link)
  # Create the directories to this path if needed
  FileUtils.mkpath(File.dirname(path))

  # Write the template to the file
  File.open(path, "w") do |f|
    f << <<-EOS.gsub(/^    /, '')
    ---
    title: #{title}
    link: #{link}
    tags:
    ---

    EOS
  end
end

# Helper method to open a file in the default text editor.
def open_in_editor(file)
  system ("open -a 'Sublime Text' #{file}")
  #sh "subl #{file}"
end
