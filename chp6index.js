// L- 22  Exercise 1

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

// L -27 alert, prompt & confirm

//alert
alert("Enter value of a")

//prompt
let a = prompt("Enter a here",96)
// 96 default value
a = Number.parseInt(a)
alert("You entered " + a +" of type " + (typeof a))

//confirm
let write = confirm("Do you want to write it to the page")
if(write){
  document.write(a)  
}
else {
  document.write("Please allow me to write")
}
//document.write(a)


// L -28 DOM, BOM & Window Object
Document Object Model, Browser Object Model, Window Object

Window object represents browser window and provides methods to control it.
Window object is a global object.

//console.log(window)
window.console.log(window)

alert
window.alert

// pure html page ko  ek js object bana diya gya hai aur usko document naam diya gya hai

console.log(document)
console.log(document.body)
document.body.style.background = "red"

// BOM - browser object model
// alert, prompt, confirm are part of BOM
// alert("anurag")
location.href = "https://codewithharry.com"


// L -29 Chapter 6 - Practice Set

//Q1

let age = prompt("Enter your age")
age = Number.parseInt(age)
if (age >= 18){
    alert("You can drive")
} else {
    alert("You cannot drive")
}

//another way
let age = prompt("Enter your age")
age = Number.parseInt(age)

const canDrive = (age) => {
  return age >= 18 ? true:false
}

if (canDrive(age)){
    alert("You can drive")
} else {
    alert("You cannot drive")
}

//Q2

let runAgain = true;

const canDrive = (age) => {
  return age >= 18 ? true:false
}

while(runAgain){
let age = prompt("Enter your age")
age = Number.parseInt(age)

    if(canDrive(age)) {
        alert("Yes u can drive")
    }
    else {
        alert("No u  cannot drive")
    }
    runAgain = confirm("Do you want to play again")
}

//Q3

let runAgain = true;

const canDrive = (age) => {
  return age >= 18 ? true:false
}

while(runAgain){
let age = prompt("Enter your age")
age = Number.parseInt(age)

    if (age<0){
    console.error("Enter a valid age")
    break;
    }

    if(canDrive(age)) {
        alert("Yes u can drive")
    }
    else {
        alert("No u  cannot drive")
    }
    runAgain = confirm("Do you want to play again")
}


//Q4

let num = prompt("Enter your num")
num = Number.parseInt(num)

if (num > 4){
    location.href = "https://google.com"
}

//Q5
let color = prompt("Enter the page background color")
document.body.style.background = color





















