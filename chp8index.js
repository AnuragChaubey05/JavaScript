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

// Attribute methods

// elem.getAttribute(name) – Method used to get the value of an attribute.
let first = document.getElementById("first");
let a = first.getAttribute("class")
console.log(a)

// elem.hasAttribute(name) – Method to check for existence of an attribute.
console.log(first.hasAttribute("class"))
console.log(first.hasAttribute("style"))
 
// elem.setAttribute(name,value) – Method used to set the value of an attribute.
first.setAttribute("hidden", "true")
first.setAttribute("class", "true sachin")

// elem.removeAttribute(name) – Method to remove the attribute from elem.
// first.removeAttribute("class")

// elem.attributes – Method to get the collection of all attributes.
console.log(first.attributes)

// data– attributes
// We can always create custom attributes but the ones starting with “data-” are reserved for programmers use. 
// They are available in a property named dataset.  
// If an element has an attribute named “data-one”, its available as element.dataset.one

console.log(first.dataset)
console.log(first.dataset.game)
console.log(first.dataset.player)

// L-43 HTML Insertion Methods

// insetion of an element

//innerHTML
let a = document.getElementsByTagName("div")[0]
a.innerHTML = a.innerHTML + "<h1>Hello World!</h1>";

// by createing an element
let div = document.createElement("div");
div.innerHTML = '<h1>Hello World!</h1>';
a.appendChild(div);

node.append(e) – append at the end of node
a.append(div);

node.prepend(e) – insert at the beginning of node
a.prepend(div);

node.before(e) – insert before node
a.before(div)

node.after(e) – insert after node
a.after(div)

node.replaceWith(e) – replaces node with the given node
a.replaceWith(div)

// L-44 insertAdjacentHTML, insertAdjacentElement and insertAdjacentText

// insertAdjacentHTML/Text/Element
// This method is used to insert HTML. The first parameter is a code word, specifying where to insert. Must be one of the following:

// “beforebegin” – Insert HTML immediately before element
first.insertAdjacentHTML('beforebegin', '<div class="test1"></div>');

//“afterbegin” – Insert HTML into element at the beginning
first.insertAdjacentHTML('afterbegin', '<div class="test3"></div>');

//“beforeend” – Insert HTML into element at the end
first.insertAdjacentHTML('beforeend', '<div class="test2"></div>');

//“afterend” – Insert HTML immediately after element
first.insertAdjacentHTML('afterend', '<div class="test4"></div>');

//The second parameter is an HTML string.

// Node removal
// To remove a node, there’s a method node.remove()
first.remove()

// L-45 Changing HTML Classes using JavaScript: className and classList

className and classList
// If we assign something to elem.className, it replaces the whole string of classes.
first.className = "text-black red"
 
//first.classList
// Often, we want to add/remove/toggle a single class.
// elem.classList.add/remove(“class”) – Adds/removes a class
first.classList.add("red");
first.classList.remove("red");

// elem.classList.toggle(“class”) – Adds the class if it doesn’t exist, otherwise removes it.
first.classList.toggle("red")

// elem.classList.contains(“class”) – checks for the given class, returns true/false.
first.classList.contains("red") // true

// L-46 setInterval and setTimeout 

//setTimeout
//setTimeout allows us to run a function once after the interval of time.
document.write("Hello World");

let a = setTimeout(function(){
  alert("Hello World inside of timeout");
}, 2000);

//clearTimeout
//clearTimeout is used to cancel the execution (in case we change our mind).
let b = prompt("Do you want to run the timeout?");
if(b == "n"){
  clearTimeout(a)
}
console.log(a)

//sum function using timeout
const sum = (a, b, c) => {
  alert("I am running " + (a + b + c))
  //a+b
}
setTimeout(sum, 2000, 1,2,3)

//setInterval
//setInterval method has a similar syntax as setTimeout
// All arguments have the same meaning. But unlike setTimeout,
// it runs the function not only once, but regularly after the given interval of time.
// To stop further calls, we can use clearInterval(timerId);

setInterval(function (){
  alert("setInterval")
}, 5000)

// sum function using setInterval 
const  sum = (a,b,c) => {
  alert(a+b+c)
}
setInterval(sum, 5000, 1, 2, 7)

// sum function using setInterval with clearInterval
const sum = (a, b, c) => {
  alert(a + b + c);
};

// Set the interval and store the result in myInterval
const myInterval = setInterval(sum, 5000, 1, 2, 7);

// Later, you can clear the interval using clearInterval
clearInterval(myInterval);


// L-47 Introduction to Browser Events


// An event is a signal that something has happened. All the DOM nodes generate such signals.
// Some important DOM events are:
// Mouse events: click, context menu(right click), mouseover/mouseout, mousedown/mouseup, mousemove
// Keyboard events: keydown and keyup
// form element events: submit, focus, etc.
// Document events: DOMContentLoaded
 

// Handling Events

// Events can be handled through HTML attributes
<input value = “Hey” onclick=”alert(‘hey’)” type=”button”>
 // Instead of alert(“hey”), we can write another JS function.
 
// Events can also be handled through the onclick property,
elem.onclick = function(){
            alert(“yes”)
      }

 
 // in html element
 <div class="container" onmouseenter="console.log('bahar ja L')"  onclick="console.log('click hua')">
  <button onClick="alert('Hola amigos'); let a=6; console.log(a)"> Dabba</button>
 </div>
 
// in script.js
let a = document.getElementsByClassName("container")[0]
a.onclick = () => {
  let b = document.getElementsByClassName("container")[0]
  b.innerHTML = "Hello World!"
}

// Note: Adding a handler with JS overwrites the existing handler.


// L-48 Handling Browser Events 

// addEventListener and removeEventListener
// addEventListener is used to assign multiple handlers to an event.

element.addEventListener(event, handler)
element.removeEventListener(event, handler)
// handler must be the same function object for this to work
 

// The Event Object
// When an event happens, the browser creates an event object, puts details into it and passes it as an argument to the handler

elem.onclick = function(event){
    …
}

event.type: Event type
event.currentTarget: Element that handled the event
event.clientX/ event.clientY: Coordinates of the cursor

// exercise

//HTML
<body>
  <div>
    <button id="btn">Click Me</button>
  </div>
  <script src="script.js"></script>
</body>

//JS
let x = function(e) {
  console.log(e.target);  
  console.log(e.type, e.clientX, e.clientY);
  console.log(e); //pointer event
 //pointer event
    alert("Hello World1!");
  }

let y =function(e) {
    console.log(e); //pointer event
    alert("Hello World2!");
  }

btn.addEventListener('click', x)
// btn.addEventListener('click', y)

// let a = prompt("What is your favorite number?");
// if (a == "2") {
//   btn.removeEventListener('click', x)
// }


// L-49  Chapter 8 - Practice Set

//Q1

<div>
<button onclick="alert('Please give me one plate of Chowmein')">Chow</button>
<button onclick="alert('Please give me one plate of vada pow')">Pow</button>
</div>

//complex way
<div>
    <button id="btn1">Click Me</button>
     <button id="btn2">Click Me</button>
</div>
btn1.addEventListener('click', function(){alert("1")})
btn2.addEventListener('click', function(){alert("2")})

//Q2
 
<div>
<a href="https://fb.com"><button id="fb">fb</button></a>
<a href="https://google.com"><button id="fb">Google</button></a>
<a href="https://twitter.com"><button id="fb">twitter</button></a>
</div>

//Q3


//Q4

//Q5



























