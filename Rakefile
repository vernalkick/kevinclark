require 'date'
require 'filewatcher'
require 'listen'

task :default => :deploy

task :generate do
  generate
end

task :generatetest do
  generate

  listener = Listen.to('.', ignore: [%r{_site}]) do |modified, added, removed|
    generate
  end

  listener.start

  trap("INT") do
    Thread.new {
      listener.stop
      puts "     Halting auto-regeneration."
      exit 0
    }.join
  end

  sleep

end

task :watch do

  jekyll = Process.spawn("jekyll serve")
  filewatch = Process.spawn("filewatcher _site 'sass --style compressed assets/stylesheets/master.scss:_site/assets/stylesheets/master.css'")
  sass = Process.spawn("sass --watch assets/stylesheets/master.scss:_site/assets/stylesheets/master.css")
  coffee = Process.spawn("coffee --watch --compile --output _site/assets/javascripts/ assets/javascripts/")

  processes = [jekyll, sass, coffee, filewatch]

  trap("INT") {
    processes.each { |pid| Process.kill(9, pid) rescue Errno::ESRCH }
    exit 0
  }

  processes.each { |pid| Process.wait(pid) }
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

task :test do
  fileContent = ''
  path = ENV['path']

  File.open(path, "r") do |f|
    f.each_line do |line|
      fileContent += line
    end
  end

  charLimit = 140
  urlLength = 22

  title = fileContent[/title: (.*)/, 1]
  image = fileContent[/(http:\/\/.*\.(jpg|gif|png))/, 1]
  slug = path[/\d{4}-\d{2}-\d{2}-(.*)\./, 1]
  url = "http://kevinclark.ca/articles/#{slug}/"

  availableLength = charLimit - urlLength

  #truncatedTitle = title.truncate(availableLength + 1)

  if image && title.length < availableLength - urlLength
    puts "#{title} #{url} #{image}"
  elsif title.length < availableLength
    puts "#{title} #{url}"
  else
    puts "#{truncate(title, availableLength)} #{url}"
  end
end

def generate
  puts "## Generating site with Jekyll"
  sh "jekyll build"
  sh "sass --style compressed assets/stylesheets/master.scss:_site/assets/stylesheets/master.css"
  sh "coffee --compile --output _site/assets/javascripts/ assets/javascripts/"
  sh "find _site -name '*.scss' -delete"
  sh "find _site -name '*.coffee' -delete"
end

def truncate(string, length)
  # length = length - 1
  # return string unless string.length > length
  string[0...length - 1].rstrip + "…"
end

desc "push to git repo"
task :push do
  sh "git push origin master"
  sh "git push prod master"
end

desc "add files, push live"
task :deploy => [ :add, :push ] do
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
    date: #{DateTime.now.strftime("%Y-%m-%d %H:%M:%S %:z")}
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
    date: #{DateTime.now.strftime("%Y-%m-%d %H:%M:%S %:z")}
    ---

    EOS
  end
end

# Helper method to open a file in the default text editor.
def open_in_editor(file)
  system ("open -a 'Sublime Text' #{file}")
end
