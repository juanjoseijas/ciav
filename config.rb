###
# Global settings
###

# Enable Localization (i18n)
activate :i18n,  :mount_at_root => :es

# Enable Pretty URLs (Directory Indexes)
activate :directory_indexes
page "/404.html", :directory_index => false
set :relative_links, true

###
# Markdown settings
###

set :markdown_engine, :redcarpet
set :markdown, :autolink => true,
               :tables => true,
               :fenced_code_blocks => true,
               :footnotes => true

###
# Compass
###

# Change Compass configuration
# compass_config do |config|
#   config.output_style = :compact
# end

# Susy grids in Compass
# First: gem install susy
require 'susy'

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
page "robots.txt", :layout => false
page "humans.txt", :layout => false
page "/sitemap.xml", :layout => false

# Ignore content files (markdown)
ignore "content/*"

#
# With alternative layout
# page "/path/to/file.html", :layout => :otherlayout
#
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

# Proxy pages (http://middlemanapp.com/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", :locals => {
#  :which_fake_page => "Rendering a fake page with a local variable" }

###
# Helpers
###

# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes

# Reload the browser automatically whenever files change
# activate :livereload

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

# -- Markdown helper --

# CustomHelpers
require "lib/custom_helpers"
helpers CustomHelpers

set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'


# Enable LiveReload
activate :livereload

# Enable cache buster
activate :asset_hash

# Enable autoprefixer
activate :autoprefixer

# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  activate :minify_css
  activate :minify_html

  # Minify Javascript on build
  activate :minify_javascript

  # Enable cache buster
  activate :cache_buster

  # Use relative URLs
  activate :relative_assets

  # Enable favicon generator
  activate :favicon_maker

  # Compress PNGs after build
  # First: gem install middleman-smusher
  require "middleman-smusher"
  activate :smusher

  # Or use a different image path
  # set :http_path, "/Content/images/"
end



activate :deploy do |deploy|
  deploy.method = :git
  deploy.after_build = true
end
