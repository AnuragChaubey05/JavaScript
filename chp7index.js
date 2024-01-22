// L-32 Walking the DOM

// changing color of a
document.getElementsByClassName("cursor-pointer")[5].style.color = "orange"

// text node,element node,comment nodes
// When an HTML element is an item in the DOM, it is referred to as an element node.
// Any lone text outside of an element is a text node,
// An HTML comment is a comment node. 

// When an erroneous HTML code is encountered. 
// Autocorrect can be used to fix the code by moving it to the correct location within the body tags. 
// For instance, if the code "</body>" is found before the closing </html> tag, autocorrect can move it to the correct position.
// Another example is when a closing tag is missing. 
// Autocorrect can be used to insert the missing tag, such as if a <table> tag is found without a corresponding </tbody> tag.

//DOM
document.documentElement // return html tag
document.head // return head tag
document.title // return string
document.body // return body tag

//document.title ="kand"
// It does not return title tag it returns string
typeof document.title
'string'
      
typeof document.documentElement
'object'

// the document body can sometimes be null if the JavaScript is written before the body tag. 
// This is because the JavaScript code is executed before the HTML body tag has loaded, so the document.body property is null. 
// To avoid this, you can either wrap your JavaScript code in a DOMContentLoaded event listener, 
// or move the <script> element to the end of your HTML document.

// L-33 Accessing Children of an Element


