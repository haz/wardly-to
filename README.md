#Wardly-TO
Wardly-TO is a symbol font that makes is easy to create a map of the wards in the city of Toronto using only HTML and CSS (and optionally javascript). Each ward can be styled independently with CSS for making simple visualizations. And since it's a font, it scales bigger and smaller while staying sharp as a tack.

**Note**: Wardly-TO is a fork of the [Stately](https://github.com/intridea/stately) project.

##Files
    map.svg      - SVG map used to create the font
    assets/font  - Folder containing the web-font files
    assets/css   - Folder containing compiled CSS files
    assets/js    - Folder containing compiled JS files
    .html - Basic Demo
    wardlyto.svg  - SVG font file
    wardlyto.ttf  - TrueType font file
    

##What is Wardly-TO?
Each ward is a glyph within the font. Each ward is positioned and sized relative to the the rest of the wards, so that when each character is stacked on top of one another, it creates a full map.
The pertinent characters are uppercase A-R and lowercase a-z.

##Basic Use Case
You can use wardly-to however you like, but some base CSS, HTML, and JS examples are included.
Grab the wardly-to assets folder and add it to your project. Then add the wardly.css (and optionally wardly.js which requires jquery) to the head of your document.

```html
<link rel="stylesheet" href="assets/css/wardly.css">
<script src="http://code.jquery.com/jquery-latest.js"></script>
<script src="assets/js/wardly.js"></script>
```

If you would like to avoid using javascript, add this markup to the page:

```html
<ul class="wardly" id="plain"> 
    <li class="foo">a</li>
    <li>b</li>
    <li class="foo">c</li>
    <li class="foo">d</li>
    <li>e</li>
    <li>f</li>
    <li>g</li>
    <li>h</li>
    <li>i</li>
    <li>j</li>
    <li>k</li>
    <li>l</li>
    <li>m</li>
    <li>n</li>
    <li>o</li>
    <li>p</li>
    <li>q</li>
    <li>r</li>
    <li>s</li>
    <li>t</li>
    <li>u</li>
    <li>v</li>
    <li>w</li>
    <li>x</li>
    <li>y</li>
    <li>z</li>
    <li>A</li>
    <li>B</li>
    <li>C</li>
    <li>D</li>
    <li>E</li>
    <li>F</li>
    <li>G</li>
    <li>H</li>
    <li>I</li>
    <li>J</li>
    <li>K</li>
    <li>L</li>
    <li>M</li>
    <li>N</li>
    <li>O</li>
    <li>P</li>
    <li>Q</li>
    <li>R</li>
</ul>
```
    
Set the size and base map color in your CSS:

```css
.wardly {
    width: 300px;     /* width and font size must match */
    font-size: 300px; /*width and font size must match */
    color: #f0f0f0;
}
```
    
Style Individual State:

```css
.wardly .foo { 
   color: #FF0000;
}
```
        
##Live Example

Coming soon...

##Resources

Check out the [Stately](https://github.com/intridea/stately) project by [Ben Markowitz](http://www.intridea.com/). Wardly-TO is basically just a skin on the brilliant idea Ben had. He has pointers on how to roll your own as well if you want to give it a go.

##Credits

Created by [Ben Markowitz](http://www.benmarkowitz.com) at [Intridea](http://www.intridea.com).

Modified by [Christian Muise](http://www.haz.ca/) at [Floating Tree](http://www.floatingtree.ca).

##License

MIT License. See LICENSE for details.

##Copyright

Copyright (c) 2013 Floating Tree.

Copyright (c) 2013 Intridea, Inc.
