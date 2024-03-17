// L-9 For Loops

// for (initialization, condition, iteration (increment)) {}

// Program to add first n natural number
let sum = 0
let n = prompt("Enter the value of n")
n = Number.parseInt(n)
for (let i =0; i<n; i++){
    sum += (i+1);
    // it stores sum every iteration
   // console.log((i+1+",sum is " + sum))
}
console.log("Sum of first " + n + " natural number is " + sum)


// Program to print table of a number
const n = prompt("Enter a number: ");
for (let i=1; i <= 10; i++) {
  console.log(i*n);
}


// program to find the factorial of a number
let n = prompt("Enter the value of n")
n = Number.parseInt(n)

if(n < 0){
    console.log("Negartive number");
}
else if(n===0 || n===1) {
    console.log (1);
}
else {

    let factorial = 1;
    for (let i = 2; i <= n; i++){
    factorial *= i;
    //console.log((i+", mult is " + factorial))
}
console.log(`Factorial  of ${n} is ${factorial}`)
}

// for-in-loop

// for(key in object){}

let obj = {
    Aman : 2,
    Aashu :1,
    Nobita : 10,
    gian:10
}
for(let a in obj){
    console.log("Marks of "+ a + " are " + obj[a])
}


let players = {

    player1:{
    name : "Virat Kholi",
    age: 35,
    centuries:80 
    },

    player2:{
    name : "KL Rahul",
    age: 30,
    centuries:10 
    }

}

for (key in players){
     console.log(`${players[key].name} has ${players[key].centuries} century`)                
}


// for-of-loop

for (variable of iterable) {
  // code to be executed for each element in the iterable
}

for (key of "player"){
     console.log(key)                
}

const players = ["Anurag","VK","ABD"]
for (key of players){
     console.log(key)                
}

// L- 10 While loop & do while loop


// While loop
let a = prompt("Enter the value");
a = Number.parseInt(a); 

let i=1;
while (i<=a){
  console.log(i)
  i++;
} 

let a = prompt("Enter the value");
a = Number.parseInt(a); 

let i=1;
while (i<= 10){
  console.log(i*a)
  i++;
} 

// do while loop (executed atleast once)

let a=5
let i =10;
do {
  console.log(i)
  i++
}while(i<=a)


let a = prompt("Enter the value");
a = Number.parseInt(a); 

let i=1;
do{
  console.log(i*a)
  i++;
} 
while (i<= 10);


// L-11 Function
// It is used to separate logic for repeatitive work

// sum funtion
function sum(a,b){
   c=a+b;
    console.log("Sum is",c)
  return c;
}

sum(5,3);

// 1+Avg Function

function OneplusAvg(x,y){
 console.log("Done")
  return Math.round( 1+(x+y)/2);
    // math.round is used for rounding the value
}

let a = 17
let b = 19;
let c = 39;

console.log("Average is " , OneplusAvg(a,b))
console.log("Average is " , OneplusAvg(b,c))
console.log("Average is " , OneplusAvg(a,c))

// done after avg
function OneplusAvg(x, y) {
  const avg = 1 + (x + y) / 2;
  console.log("Average is", avg);
  console.log("Done");
  return avg;
}

let a = 17;
let b = 19;
let c = 39;

(OneplusAvg(a, b));
(OneplusAvg(b, c));
(OneplusAvg(a, c));

// Arrow function

// sum
const sum = (a,b) => {return a+b;}
sum(15,3);

//
const hello = () => {
    console.log("Hey how are you, i am fine")
    return "hi"
}
let y = hello();
console.log(y)


// L- 12 PRACTICE SET ON LOOPS AND FUNCTIONS

//Q1
let marks = {
  Hemant:100,
  Anurag:98,
  Ravi:70,
  Govind:34,
}

for (let i=0; i < Object.keys(marks).length; i++){
  console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
 
// Object.keys(marks)[i] is used to get the keys of the object marks.
// marks[Object.keys(marks)[i]] is used to get the values of the key of object marks.
  
}

//Q2

let marks = {
  Hemant:100,
  Anurag:98,
  Ravi:70,
  Govind:34,
}

for (let key in marks){
 console.log("The marks of " + key + " are " + marks[key])
}
  
//Q3

let cn = 4;
let i = prompt("Guess the number")
console.log(typeof(i))
while (i != cn){
    i = prompt("Try Again");  
}
alert("Correct Number")

// type coercion
//Type coercion in JavaScript refers to the automatic conversion of one data type to another when certain operations are performed. 
//JavaScript is a loosely typed language, meaning that variable types can be dynamically changed during runtime.

let numString = "10";
let result = 5 + numString; 
// The number 5 is coerced into a string and concatenated with "10" to give "510".


/* In JavaScript, when you use the prompt function to get input from the user, it always returns the input as a string, 
regardless of whether the user entered a number. 
This is why the variable i is initially a string after the user inputs their guess.
The reason the condition i != cn works as expected is because JavaScript performs type coercion in this context. 
When you use the != operator, JavaScript converts the operands to the same type before making the comparison. 
In this case, it converts cn to a string and then compares the two strings.
So, even though i is a string, the != operator converts cn to a string before making the comparison, and it works as expected.
If you want to explicitly treat i as a number, you can use the parseInt function to convert the input string to a number. */

/* It's important to note that while type coercion can be convenient, it can also lead to unexpected behavior if not used carefully. 
To avoid potential issues, some developers prefer to use strict equality (===) and inequality (!==) operators,
which do not perform type coercion and require both the value and the type to be the same for the comparison to be true.*/

//Q4
const mean = (a,b,c,d,e) => {
    return (a+b+c+d+e)/5;
} 

mean(5,5,5,5,5);
