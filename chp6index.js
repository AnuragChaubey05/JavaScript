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


console.log("log") // OUTPUT A MSG TO THE CONSOLE
console.log("Anu")
console.log(console)

console.info("info") // USED FOR SPECIAL INFO
console.info("This is imp info")

console.warn("warn") // USED FOR WARNING
console.warn("Don't Drink ")

console.error("err")  // USED FOR ERROR
console.error("This is error")

console.assert() // USED TO ASSERT A CONDITION
console.assert("err" != false) 
console.assert("err" == false)
console.assert(7>18)
console.assert(7<18)

console.table(console) // DISPLAY A TABULAR DATA
obj = {a:1, b:2, c:3}
console.table(obj)

console.clear() // CLEAR THE CONSOLE

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


// L- 26 EXERCISE1 Solution

// L -27 







