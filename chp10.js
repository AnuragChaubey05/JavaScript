//  L-66 Fetch API

// fetch is used to get data over the network
// let promise = fetch(url, [options])    //without options, a get request is send
 
// Getting a response is a 2-stage process:
// 1. An object of Response class containing “status” & “ok” properties
//     status – The http status code, Eg: 200
//     ok – Boolean, true if the HTTP status code is 200-299

// 2. After that we need to call another method to access the body in different formats:
//     response.text() – Read & return the text
//     response.json() – parse the response as JSON

// Other methods include response.formData(), response.blob(), response.arrayBuffer() etc.
// Note – We can use only one body reading method.
// Example if we have already got the response with response.text() then response.json() won’t work.

// Response headers
// The response headers are available in response.headers


// fetch code
let p = fetch("https://randomuser.me/api/")
p.then((response) => {
        console.log(response.status)
        console.log(response.ok)
        console.log(response.headers)
        return response.json()
}).then((value2) => {
        console.log(value2)
})

//2nd part
let p = fetch("https://randomuser.me/api/")
p.then((response) => { 
        return response.json()
}).then((value) => {
        console.log(value)
})

// Request headers
// To set a request header in fetch, we can use the headers option.

let res = fetch(url, {
		headers: {
			Authentication: ‘Secret’
			}
		});


// 67 - Sending POST request with Fetch API

// POST requests
// To make a POST request, we need to use fetch options
// method – HTTP-method, e.g POST
// body – the request body

const createTodo = async (todo) => {
  // Define the options for the fetch request
  let options = {
    method: "POST", // Specify the HTTP method as POST
    headers: {
      "Content-type": "application/json" // Specify the content type as JSON
    },
    body: JSON.stringify(todo), // Convert the todo object to a JSON string
  }
  
  // Send the POST request to the specified URL with the options
  let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
  
  // Parse the response as JSON and return it
  let response = await p.json()
  return response
}  

const getTodo = async (id) => {
  // Send a GET request to the specified URL to fetch a todo with the given id
  let response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
  
  // Parse the response as JSON and return it
  let r = await response.json()
  return r
}

const mainFunc = async() => {
  // Create a todo object with a title, body, and userId
  let todo = {
    title: 'Harry2',
    body: 'bhai2',
    userId: 1100,
  }
  
  // Call the createTodo function to send a POST request to create a new todo
  let todor = await createTodo(todo)
  console.log(todor) // Log the response from the POST request
  
  // Call the getTodo function to send a GET request to fetch a todo with id 5
  console.log(await getTodo(5)) // Log the response from the GET request
}

mainFunc() // Call the mainFunc function to execute the code


// 68 - Cookies in JavaScript

// JavaScript Cookies
// Cookies are small strings of data stored directly in the browser
// In JS, document.cookie provides access to cookies.
// Cookies are set by a web server using the Set-Cookie HTTP-header. 
// Next time when the request is sent to the same domain, the browser sends the cookie using the cookie HTTP-header.
// That way the server knows who sent the request

// We can also access cookies using document.cookie property:
alert(document.cookie) // Contains key=value pairs delimited by ;
 

// Writing to cookie
// An assignment to document.cookie is treated specially in a way that a write operation doesn’t touch other cookies.
document.cookie = “user = Harry” // updates only cookie named user to Harry


// encodeURIComponent
// This function helps keep the valid formatting. It is used like this:
document.cookie = encodeURIComponent(name) + ‘=’ + encodeURIComponent(value)
// This way, the special characters are encoded
// decode
decodeURIComponent("efesdfe%2C%2C")
'efesdfe,,'

// Cookie options
// Cookies have several options which can be provided after key=value to a set call like this:
document.cookie = “user=John; path=/a; expires=Tue,29 March 2041 03:18:22 GMT”
// path option makes the cookie visible at /a, /a/b etc. expires sets the cookie expiration time.


// Note:
// The name=value pair, after encodeURIComponent, should not exceed 4KB
// Total no of cookies per domain is limited to around 20+ (Exact number is browser dependent)

//code
console.log(document.cookie)
document.cookie = "name=John Doe";
document.cookie = "name2=John Doe";
let key = prompt("Enter your key")
let value = prompt("Enter your value")
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
console.log(document.cookie)

// L-69 localStorage & related methods

// localStorage is a web storage object which are not sent to server with each request.
// This data survives a full page refresh and even a full browser restart.
// There are the method provided by localStorage

setItem(key, value) – Store key/value pair
getItem(key) – get the value by key
removeItem(key) – remove the key with its value
clear() – delete everything
key(index) – get the key on a given position
length – the number of stored items
 
// We can get and set values like an object
localStorage.one = 1
alert(localStorage.one)
delete localStorage.one
 
// Important Note
// Both key and values must be strings
// We can use the two JSON methods to store objects in localStorage:
JSON.Stringify(object)    //Converts objects to JSON Strings
JSON.parse(String)         //Converts string to objects (must be a valid JSON)


//code
let key = prompt("Enter the key you want to set")
let value = prompt("Enter the value you want to set")
localStorage.setItem(key, value)
console.log(` The value at ${key} is ${localStorage.getItem(key)}`)

if(key == "red" || key == "blue"){
  localStorage.removeItem(key)
}

if(key == 0){
  localStorage.clear(key)
}

//localStorage.length
//localStorage.key(1)


// 70 - sessionStorage & related methods

// sessionStorage Used less often than localStorage. Properties and methods are same as localStorage but:
// The sessionStorage exists only within the current browser tab. Another tab with same page will have a different storage.
// The data survives page refresh, but not closing/opening the tab.
 
// Storage Event
// When the data gets updated in localStorage or sessionStorage, storage event triggers with these properties:
// key – The key
// oldValue – Previous value
// newValue – New value
// url – Page URL
// StorageArea – local or sessionStorage
 
// We can listen the onstorage event of window which is triggered when updates are made to the same storage from the documents

// sessionStorage.getItem("name")
// sessionStorage.clear()
// sessionStorage.removeItem("name")
// sessionStorage.setItem("name", "harry")
// sessionStorage.removeItem("name")


window.onstorage = (e) => {
        alert("changed")
        console.log(e)
}

// L-71 JavaScript Chapter 10

// 1 
let url = "https://kontests.net/api/v1/all"
let response = fetch(url)
response.then((v) => {
        return v.json()
}).then((contests) => {
        console.log(contests)
        ihtml = ""
        for (item in contests) {
                console.log(contests[item])
                ihtml += `
                <div class="card mx-2 my-2" style="width: 22rem;">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOpMBTgrPtQuNSYqIzPVAEJgJbF7tWmT1LhnCrtAkFbe-_qgRXBj-25gZ0yuR_3sL6iNE&usqp=CAU" class="card-img-top" alt="...">
                                <div class="card-body">
                                        <h5 class="card-title">${contests[item].name}</h5>
                                        <p class="card-text"> Status is ${contests[item].status} and site is ${contests[item].site}</p>
                                        <p class="card-text"> In 24 Hours? ${contests[item].in_24_hours} </p>
                                        <p>Starts at: ${contests[item].start_time}
                                        <p>Starts at: ${contests[item].end_time}
                                        <a href="${contests[item].url}" class="btn btn-primary my-4">Visit Contest</a>
                                </div>
                        </div>
                `
        }
        cardContainer.innerHTML = ihtml
})


//3
let n = localStorage.getItem("note")
alert("Your note is " + n)

//2
let a = prompt("Enter your note")
if (a) {
        localStorage.setItem("note", a)
}

//4
let c = confirm("Do you want to delete your note?")
if (c) {
        localStorage.removeItem("note")
        alert("Note deleted successfully!")
}
