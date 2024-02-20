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

	
// L-55 Promise .then() and .catch() and .finally()

// .then: This method is used to handle the successful completion of a promise. 
// It takes one or two arguments: a callback function to be executed when the promise is resolved, and an optional second callback function to handle errors.

// .catch: This method is used to handle errors that occur during the execution of a promise or in any of its .then callbacks. 
// It takes a single argument: a callback function to be executed when an error occurs.

// .finally: This method is used to execute code after a promise is settled (either fulfilled or rejected).
// It is often used for cleanup tasks that should be performed regardless of the promise's outcome.


let p1 = new Promise((resolve, reject) => {
        console.log("Promise is pending")
        setTimeout(() => {
                // console.log("I am a promise and I am resolved")
                resolve(true)
        }, 5000)
})

let p2 = new Promise((resolve, reject) => {
        console.log("Promise is pending")
        setTimeout(() => {
                // console.log("I am a promise and I am rejected")
                reject(new Error("I am an error"))
        }, 5000)
})

// To get the value
p1.then((value) => {
        console.log(value)
})

// To catch the errors
// p2.catch((error) => {
//         console.log("some error occurred in p2")
// })

p2.then((value)=>{
        console.log(value) 
},(error)=>{
        console.log(error)
})
.finally(() => {
    console.log('Experiment completed');
})

	
// L-56 Promise Chaining .then() calls

let p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
                console.log("Resolved after 2 seconds")
                resolve(56)
        }, 2000)
})

p1.then((value) => {
        console.log(value)
        return new Promise((resolve, reject) => {
                setTimeout(() => { resolve("Promise 2") }, 2000)
        }) 
}).then((value) => {
        console.log("We are done")
        return 2
}).then((value)=>{
        console.log("Now we are pakka done")
})

// We can chain promises and make them pass the resolved values to one another like this,
p.then(function(result) => {		// p is a promise
	alert(result); return 2;
	}).then …
 
// The idea is to pass the result through the chain of .then handlers.
// Here is the flow of execution:
// The initial promise resolves in 1 seconds (Assumption)
// The next .then() handler is then called, which returns a new promise (resolved with 2 value)
// The next .then() gets the result of previous one and this keeps on going
// Every call to .then() returns a new promise whose value is passed to the next one and so on. We can even create custom promises inside .then()

//loadscript function we wrote in the beginning of this chapter using promises.

const loadScript = (src) => {
        return new Promise((resolve, reject) => {
                let script = document.createElement("script")
                script.type = "text/javascript"
                script.src = src
                document.body.appendChild(script)
                script.onload = (script) => {
                        resolve("Script has been loaded sir")
                }
                script.onerror = () => { reject(0) }
        })
}

let p1 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js")
p1.then((value) => {
        console.log(value)
        return loadScript("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js")
}).then((value) => {
        console.log("Second script ready")
}).catch((error) => {
        console.log("We are sorry but we are having problems loading this script")
})
	

// L-57 Attaching Multiple Handlers to a Promise








	













	









	










	

