// L- 23  JavaScript in the Browser 

Html - Structure 
CSS - Styling 
Js - Logic and Functionality

Element - Html elements
console - Errror and logs 
network - All network Request 
lighthouse - generate report,speed of load, what can be improved 

// L- 24 JavaScript Script Tag

<script> tag is used to insert js in html website.
  
2 ways

1)internal script
 <script>
  // script here
  </script>
  
2)external script

  <!--   <script src="script.js"></script> -->
  <!--   <script src="script1.js"></script> -->
  <!--   <script src="script2.js"></script> -->

// Advantages of using separate script file using src attribute of script tag
  // 1. Separation of concerns
  // 2. Browser Caching
  
 <script src="script.js">
    console.log("I am trying to be smart") // This will be ignored
  </script>
  
// L- 25 JavaScript Console Object

console.log(console)
console.log("Anu")
console.error("This is error")
console.assert(7>18)
console.assert(7<18)
console.assert
console.clear()
obj = {a:1, b:2, c:3}
console.table(obj)
console.warn("Don't Drink ")
console.info("This is imp info")

console.log("log")
console.info("info")
console.warn("warn")
console.error("err")
console.assert("err" != false)
console.assert("err" == false)
console.table(console)

//console.time
console.time("a")
console.timeEnd("a")
console.time("p1")
console.timeEnd("p1")

console.time("forLoop")

for (let i =0; i<5; i++){
    console.log(i)
}

console.timeEnd("forLoop")

console.time("WLoop")

let i =0;
while(i<5){
    console.log(i)
    i++;
}

console.timeEnd("WLoop")








