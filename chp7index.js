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

// $0: Represents the currently selected DOM element in the Elements panel.
$0 
<button class="md:hidden text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-3 py-2">Login</button>

// $1: Represents the previously selected DOM element.In other words, 
// it's the element that was selected before the current one.
$1
<body cz-shortcut-listen=​"true">​…​</body>f.js">​</script>​
 
// white space is act as text element
// Notes on DOM collections:

// They are read-only. This means you can't directly modify the elements in the collection,
//but you can add or remove elements from the document using other methods.
for ex $1 = $0 will change  the reference not the element.
      
// They are live.* They are live: elem.childNodes variable (reference) will automatically update if childNodes of elem is changed.   
// They are iterable using a for...of loop. 

//Siblings and the parent
// Siblings are nodes that are children of the same parent.

$1.nextElementSibling 
$1.previousElementSibling
      
// for example:
// <head> and <body> are siblings
// Siblings share the same parent. In the above example its html
// <body> is said to be the "next" or "right" sibling of <head>.
// <head> is said to be the "previous" or "left" sibling of <body>.

// The next sibling is in nextSibling property, and the
// previous one in previousSibling property.
// The parent is available as parentNode.

// The parentNode method will always return the parent, but parentElement will 
// return null  if the parent happens to be something other than an element.

// alert(document.documentElement.parentNode);//document
// alert(document.documentElement.parentNode.parentNode);// null
 

<body>
  <div>
    <div class="first">first</div>
    <div class="second">second</div>
  </div>
  <script>
      console.log(document.body.firstChild)
      a = document.body.firstChild
      console.log(a.parentNode)
      console.log(a.parentElement)
      console.log(a.firstChild.nextSibling)
  </script>
</body>


// L-34 Element only Navigation

const changeBgRed = () => {
  document.body.firstElementChild.style.background = "red"
}

let b = document.body
console.log("First child of b is: ", b.firstChild)
console.log("First Element child of b is: ", b.firstElementChild)

First child of b is:  #text
First element of b is:  nav

//document.body.firstElementChild.style.background = "red"

//$0.children
HTMLCollection(3) [li, li, li]

//$0.children[0].style.background = "blue";

// L-35 Table Navigation 

let t = document.body.firstElementChild.firstElementChild

console.log(t)
console.log(t.rows)
console.log(t.caption)
console.log(t.tHead)
console.log(t.tHead.firstElementChild)
console.log(t.tFoot)
console.log(t.tBodies)
console.log(t.rows)
console.log(t.rows[0])
console.log(t.rows[1].rowIndex)
//run this
console.log(tr.cells)
console.log(tr.sectionRowIndex)
console.log(tr.rowIndex)
console.log(td.cellIndex)


//quiz
typeof document
'object'
typeof window
'object'

//L-36 Searching the DOM





















