// L-52 Introduction to Callbacks

//Asynchronous actions are the actions that we initiate now and they finish later. E.g. setTimeout 
//Synchronous actions are the actions that initiate and finish one-by-one.
  
//Syncronous programming
let a = prompt("What is your name?");
let b = prompt("What is your age?");
let c = prompt("What is your favorite color?");
console.log(a + " is " + b + " years old and has " + c + " favorite color.");

//Asynchronous programming
console.log("Start")
setTimeout(function() {
  console.log("Hey I am good");
}, 3000)
console.log("End")

//Callbacks
//A callback function is a function passed into another function as an argument, 
//which is then invoked inside the outer function to complete an action.
function loadScript(src, callback){
	let script = document.createElement(‘script’)
	script.src = src
	script.onload = () => callback(script)
	document.head.append(script)
}
//Now we can do something like this:
loadScript(‘https://cdn.harry.com’, (script) => {
	alert(‘script is loaded’)
	alert(script.src)
});

//This is called “callback.based” style of async programming.
//A function that does something asynchronously should provide a callback argument where we put the function to run after its complete.


//Handling errors
//We can handle callback errors by supplying error argument like this:
function loadScript(src, callback){
	…
	…
	script.onload = () => callback(null,script);
	script.onerror = () => callback(new Error(‘failed’));
	…
}

//Then inside of loadScript call:
loadScript(‘cdn/harry’, function(error, script)){\
	…
	if(error){
		// handle error
}
else{
	// script loaded
}
});

// Callbacks
function loadScript(src, callback) {
  var script = document.createElement("script");
  script.src = src;
  script.onload = function() {
    console.log("Loaded script with SRC: " + src)
    callback(null, src);
  }
  script.onerror = function() {
    console.log("Error loading script with SRC: " + src);
    callback(new Error("Src got some error"))
  }
  document.body.appendChild(script);
}

function hello(error, src) {
  if (error) {
    console.log(error)
    return
  }
  alert('Hello World!' + src);
}


function goodmorning(error, src) {
  
  if (error) {
    console.log(error)
    sendEmergencyMessageToCeo();
    return
  }
  alert('Good morning' + src);
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js", goodmorning)

// L-53 Callback Hell & Pyramid of Doom 

//When we have callback inside callbacks, the code gets difficult to manage.

loadScript((…){
	loadScript ..			// Pyramid of Doom
		loadScript ..
			loadScript ..
				…
//As calls become more nested, the code becomes deeper and increasingly more difficult to manage, especially if we have real code instead of …
//This is sometimes called “callback hell” or “pyramid of doom”
//The “pyramid” of these calls grows towards the right with every asynchronous action. Soon it spirals out of control. So this way of coding isn’t very good!

//  L-54 Introduction to Promises

//The solution to the callback hell is promises. A promise is a “promise of code execution”. 
//The code either executes or fails, in both the cases the subscriber will be notified.
//The syntax of a Promise looks like this:

let promise = new Promise(function(resolve, reject){	
	// executor
});
	
// here resolve and reject both are predefined in JS engine
// resolve and reject are two callbacks provided by JavaScript itself. They are called like this:
//resolve(value) – If the job is finished successfully
//reject(error) – If the job fails
 
//The promise object returned by the new Promise constructor has these properties:
//state: Initially pending, then changes to either “fulfilled” when resolve is called or “rejected” when reject is called
//result – Initially undefined, then changes to value if resolved (resolve(value)) or error when rejected (reject(error)).

let promise = new Promise(function (resolve,reject){
   console.log("hello")
   resolve(56)
})

console.log("Hello one")
setTimeout(function() {
  console.log("hello in 2 seconds")
}, 2000)
console.log("My name is " + "hello 3")
console.log(promise)

// L-55 Promise .then() and .catch()








	













	









	










	

