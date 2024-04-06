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


























