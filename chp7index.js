// L-31 Walking the DOM

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
// This is because the JavaScript code is executed before the HTML body tag has loaded, 
//so the document body property is null. 
// To avoid this, you can either wrap your JavaScript code in a DOMContentLoaded event listener, 
// or move the <script> element to the end of your HTML document.

// L-32 Accessing Children of an Element

// Children of an element
// Direct, as well as deeply nested elements of an element are called its children

// Child nodes → Elements that are direct children 
// for example hend & body are children of <html>

// Descendant nodes →  All nested elements, children, thin children and so on....

// first Child,last Child & child Nades

// element first Child → first child element
// element last Child  → last child element
// element child Nodes → All Child nodes

console.log(document.body.firstChild)
#text //text node is a blank space

console.log(document.body.lastChild)
<script type=​"module" src=​"./​lazy_load.js">​</script>​

console.log(document.body.childNodes)
NodeList(14) [text, iframe#backgroundImage, text, ntp-app, text, script, text, link, text, link, text, link, text, script]


following is always true:
elem.childNodes[0] === elem.firstChild
elem.childNodes[elem.childNodes.length - 1] === elem.lastChild

//There is also a method called elem.hasChildNodes() that can be used to check whether an element has any child nodes.
document.body.hasChildNodes()
true

//childNodes property looks like an array, but it is not actually an array. 
//It is a collection, and it can be converted into an array using the Array.from(collection) method. 
//However, array methods will not work on the collection.

//array methods work on childNodes after converting it using Array.from().
let arr = Array.from(document.body.childNodes)
console.log(arr)
(14) [text, iframe#backgroundImage, text, ntp-app, text, script, text, link, text, link, text, link, text, script]

// L-33 Parents & Siblings of an Element





































