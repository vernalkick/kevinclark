# A sample Guardfile
# More info at https://github.com/guard/guard#readme

guard 'sass', :input => 'assets/styles/scss', :output => 'assets/styles/css', :all_on_start => true

guard 'jekyll-plus', :serve => true do
  watch /.*/
  ignore /^_site/
end