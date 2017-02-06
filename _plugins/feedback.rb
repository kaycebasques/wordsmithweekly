require 'json'

module Jekyll
  class Feedback < Liquid::Tag
    def initialize(tag_name, text, tokens)
      super
      @text = text
      @tokens = tokens
    end
    def render(context)
      "#{context.environments.first["page"]}"
    end
  end
end

Liquid::Template.register_tag('feedback', Jekyll::Feedback)
