Fix-Placeholder-jQuery-plugin
=============================

jQuery plugin that adds placeholder support in older browsers.

Usage
---

It's simple. Just call it in elements you want to add placeholder support after the DOM is ready. It automatically detects if the browser supports the feature and adds the fallback if it does not.

```
$(function() {
  $('[placeholder]').fixPlaceholder()
})
```
As this plugin won't recognize elements added in the DOM after the first usage, you need to run it manually. Example:

```
$('<input>').attr('name', 'my_input').appendTo('#my_form').fixPlaceholder()
```
You can use ```placeholder``` class in your stylesheet to apply specific styles - such as a different font color - in empty fields that use this plugin. Example:

```
.placeholder {
  color: #AAA;
}
```