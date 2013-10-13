module ImplicitLayout
  def read_yaml(*args)
    super
    self.data['layout'] ||= 'post-indv'
  end
end

Jekyll::Post.send(:include, ImplicitLayout)