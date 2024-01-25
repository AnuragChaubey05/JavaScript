// L-41 innerHTML, outerHTML and other properties

//console.log shows  the element of the Dom tree
console.log(document.getElementsByTagName('span')[0])
<span> Hey I am span </span>

// console.dir shows the element as an object with its properties
console.dir(document.getElementsByTagName('span')[0])
span

//tagName / nodeName - Used to read tag name of an element.
// tagName – only exists for Element nodes
// nodeName – defined for any node (text, comment, etc)

document.body.firstChild.nodeName //'#text'
document.body.firstElementChild.nodeName //'SPAN'

//innerHTML and outerHTML
The innerHTML property allows to get the HTML inside the element as a string. (valid for element nodes only)
The outerHTML property contains the full HTML, innerHTML + the element itself.
innerHTML is valid only for element nodes. For other node types we can use nodeValue or data.

// innerHTML
first.innerHTML
'<b>Hello</b> Hey I am span '
first.innerHTML = "<i>Italic bave </i>"
'<i>Italic bave </i>'

// outerHTML
first.outerHTML
'<span id="first"><i>Italic bave </i></span>'
first.outerHTML= "<div>Hola</div>"
'<div>Hola</div>'

// nodeValue or data
document.body.firstChild
" Hello world "

document.body.firstChild.data
'\n\n  Hello world\n  '

document.body.firstChild.nodeValue
'\n\n  Hello world\n  '

//textContent
//Provides access to the text inside the element: only text, minus all tags.
console.log(document.body.textContent)

 
//The hidden property
//The “hidden” attribute and the DOM property specifies whether the element is visible or not. 
<span id="first" hidden><b>Hello</b> Hey I am span </span>
first.hidden = false
false
first.hidden = true
true

// L-42 HTML Attributes and their methods











