module ImplicitLayout
  def read_yaml(*args)
    super
    self.data['layout'] ||= 'post'
  end
end

Jekyll::Post.send(:include, ImplicitLayout)