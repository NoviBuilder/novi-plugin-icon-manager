# novi-plugin-icon
Novi Builder Plugin for changing icons

## How to Install
You should follow several simple steps to install this plugin:
* Copy the novi-plugin-icon-manager.js file to your path/to/novibuilder/plugins folder.
* Launch NoviBuilder 

## What you are able to do
* Change icons

## Developer Settings
* querySelector — contains a css selector which defines the Plugin container.

## Usage
For use plugin your element must match the CSS selector of querySelector setting.

For example querySelector value is ".novi-icon".
In this case you need to add element with class .novi-icon:
```html
<span class="novi-icon">
...
</span>
```