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

// We can attach multiple handlers to one promise. 
// They don’t pass the result to each other; instead they process it independently.
// Let p is a promise
 p.then(handler 1)
 p.then(handler 2)
 p.then(handler 3)
// All of the above promises run independently

let p1 = new Promise((resolve, reject) => {
        // alert("Hey I am not resolved")
        setTimeout(() => {
                resolve(1);
        }, 2000)
})

p1.then(() => {
        console.log("Hurray")
        return new Promise((resolve, reject) => {
                setTimeout(() => {
                        resolve(4)
                }, 6000)
        })
}).then((value) => { console.log(value) })

p1.then(() => {
        console.log("Congratulations this promise is now resolved")
})

// L-58 The Promise API

// Promise API
// There are 6 static methods of Promise class:
// Promise.all(promises) – Waits for all promises to resolve and returns the array of their results. if any one fails, it becomes the error and all other results are ignored.
// Promise.allSettled(promises) – Waits for all the promises to settle and returns their results as an array of objects with status and value.
// Promise.race(promises) – Waits for the first promise to settle and its result/error becomes the outcome.
// Promise.any(promises) – Waits for the first promise to fulfill (& not rejected), and its result becomes the outcome. Throws AggregateError if all the promises are rejected.
// Promise.resolve(value) – Makes a resolved promise with the given value.
// Promise.reject(error) – Makes a rejected promise with the given error.

let p1 = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve("Value 1");
  }, 4000);
});

let p2 = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    // resolve("Value 2");
    reject(new Error("Error"));
  }, 2000);
});

let p3 = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve("Value 3");
  }, 3000);
});

// p1.then((value) => {
//   console.log(value)
// })

// p2.then((value) => {
//   console.log(value)
// })

// p3.then((value) => {
//   console.log(value)
// })

let promise_all = Promise.all([p1,p2,p3])
promise_all.then((value)=> {
  console.log(value)
})

let promise_all = Promise.allSettled([p1,p2,p3])
 promise_all.then((value)=> {
   console.log(value)
 })

let promise_all = Promise.race([p1,p2,p3])
 promise_all.then((value)=> {
console.log(value)
})

let promise_all = Promise.any([p1,p2,p3])
promise_all.then((value)=> {
  console.log(value)
})

let promise_all = Promise.resolve(6)                      
promise_all.then((value)=> {
  console.log(value)
})

let promise_all = Promise.reject(new Error("Hey"))
promise_all.then((value)=> {
  console.log(value)
})


// L-59 Async/Await

// There is a special syntax to work with promises in JS.
// A function can be made async by using async keyword like this:
	
async function harry(){
	return 7;
}
 
// An async function always returns a promise. Other values are wrapped in a promise automatically.
// We can do something like this:
harry().then(alert)
	
// So, async ensures that the function returns a promise and wraps non promises in it.
// The await keyword
// There is another keyword called await that works only inside async functions

// let value = await promise;
// The await keyword makes JS wait until the promise settles and returns its value.
// Its just a more elegant syntax of getting the promise result than promise .then and it’s easier to read and write.

async function harry() {
  return 5
} 

harry().then((x)=>{
  alert(x)
})

async function harry() {
  let delhiWeather = new Promise((resolve, reject) => {
          setTimeout(() => {
                  resolve("27 Deg")
          }, 2000)
  })

  let bangaloreWeather = new Promise((resolve, reject) => {
          setTimeout(() => {
                  resolve("21 Deg")
          }, 5000)
  })

  // delhiWeather.then(alert)
  // bangaloreWeather.then(alert)
  console.log("Fetching Delhi Weather Please wait ...")
  let delhiW = await delhiWeather
  console.log("Fetched Delhi Weather: " + delhiW)
  console.log("Fetching Bangalore Weather Please wait ...")
  let bangaloreW = await bangaloreWeather
  console.log("Fetched Bangalore Weather: " + bangaloreW)
  return [delhiW, bangaloreW]
}

const cherry = async () => {
  console.log("Hey I am cherry and I am waiting ")
}

const main1 = async () => {
  console.log("Welcome to weather control room")
  let a = await harry()
  let b = await cherry()

}
main1()

	
// L-60 Error Handling: try and catch

// We all make mistakes. Also, sometimes our script can have errors. Usually, a program halts when an error occurs.
// The try… catch syntax allows us to catch errors so that the script instead of dying can do something more reasonable.
// The try catch syntax has two main blocks:
// try and then catch

try {
	// try the code
} catch(err) {			// The err variable contains an error object
	// error handling
}
 

// It works like this
// First the code in try is executed
// If there is no error, catch is ignored else catch is executed
// try catch works synchronously
//If an exception happens in scheduled code, like in setTimeout, then try… catch won’t catch it:

try {
	setTimeout(function(){
		//error code		// script dies and catch won’t work
	}
catch …
 
//That’s because the function itself is executed later, when the engine has already left the try … catch construct.

//exercise
setTimeout(()=>{
console.log("Hacking wifi.... Please wait..." ) 
}, 1000)

try{
        setTimeout(()=>{ 
                console.log(rahul)  
        }, 100)
}
catch(err){
        console.log("Balle balle")
}


setTimeout(()=>{ 
        console.log("Fetching username and password.... Please wait..." )
}, 2000) 

setTimeout(()=>{ 
console.log("Hacking Rahul's facebook id.... Please wait..." )
}, 3000) 

setTimeout(()=>{ 
console.log("Username and password of Rahul (+919356700001) fetched.... Please wait..." )
}, 4000) 

	
// L-61 The Error Object & Custom Errors

The error object
For all the built-in errors, the error object has two main properties:

try {
	hey; 	//error variable not defined
} catch(err) {
	alert(err.name)
	alert(err.message)
	alert(err.stack)
}

// Throwing custom Error
// We can throw our own error by using the throw syntax

if(age>180){
    throw new Error(“Invalid Age”)
    …
 
//We can also throw a particular error by using the built-in constructor for standard errors:
let error = new SyntaxError(message)
        or
new ReferenceError(message)
	
//exercise	
try{
  let age = prompt("Enter your age")
  age = Number.parseInt(age)
  if(age>150){
    throw new ReferenceError("Harry is not good") // custom error throw
  }
}
catch(error){
  console.log(error.name)
  console.log(error.message)
  console.log(error.stack)
}

console.log("The script is still running")
	

// L-62 The Finally Clause

// The finally clause
// The try… catch construct may have one more code clause: finally

// If it exists it runs in all cases:
// after try if there were no errors
// after catch if there were errors
 
// If there is a return in try, finally is executed just before the control returns to the outer code.
	
const f = () => {
        try {
                let a = 0;
                // console.log(program)
                console.log("Program ran successfully")
                return
        }
        catch (err) {
                console.log("This is an error")
                console.log(p)
        }
        finally {
                console.log("I am a good boy")
                // Close the file
                // Exit the Loop
                // Write to the log file
        }
}

f()
console.log("End")

// L-63  JavaScript Chapter 9 - Practice Set

	


















	
