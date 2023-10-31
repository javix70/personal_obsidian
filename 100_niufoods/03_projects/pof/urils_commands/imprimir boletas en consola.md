`
```ruby
  def to_esc_pos(template)
	text_print = Escpos::Printer.new
	text_print.write template.render
	puts template.render.to_s
	binding.pry
	text_print.to_base64
  end
```