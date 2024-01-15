//L1-Intro

// programming is a way to talk to computers
//ECMAScript is a standard on which js is based!
//js can be executed inside browser (console) and runtime environment like node.js it is written in c++ and in <script> tag.

// helloworld
console.log("Hello World")

// L2- Variables and Data types

// Set of rules is called syntax in js
// Variables is a container that stores a value.
// js allows us to change a variable type in runtime. a=5 & a = "Anurag";
// Declaring a variable.  let a(identifier) = (assignment operator) 7(literal);
// Rules for declaring a variables(case sensitive,keywords,etc)
 
let a =67
console.log(a)
a = "anurag"
console.log(a)

//L3-let vs var vs const

// var is globally scoped while let and const are block scoped.
// var can be updated and redeclared within its scope
// let can be updated but not redeclared
// const can neither be updated nor be redeclared.

/*

Global scope and block scope are terms used in programming to describe the visibility and accessibility of variables within a program.

Global Scope:

Variables declared in the global scope are accessible from anywhere in the program, including all functions and blocks.
Global variables are typically defined outside of any functions or blocks.
They retain their value throughout the entire execution of the program.
Be cautious when using global variables, as they can lead to unintended side effects and make the code harder to maintain.

// Example:
var globalVariable = 10;

function exampleFunction() {
    console.log(globalVariable);  // Accessible within functions
}

Block Scope:

Variables declared within a block (e.g., inside a function or loop) have block scope.
They are only accessible within that specific block and not outside of it.
Block-scoped variables are useful for encapsulating data and avoiding unintended variable interference.
This concept is often associated with languages like JavaScript, which introduced let and const for block-scoped variables.

//Example:

function exampleFunction() {
    if (true) {
        let blockVariable = 5;  // Block-scoped variable
        console.log(blockVariable);  // Accessible within the block
    }
    // console.log(blockVariable);  // Error: blockVariable is not defined here
}

In summary, global scope refers to variables that are accessible throughout the entire program, 
while block scope refers to variables that are limited in visibility to a specific block,
such as a function, loop, or conditional statement. 
Block scope helps in creating more modular and maintainable code by restricting the scope of variables to where they are actually needed.

// VAR 
// var is globally scoped, it can be updated and re-declared within its scope

console.log("Var Example");
var a = 55 
a = 75 // can be updated
console.log(a);
var  a = 95 // can be redeclared
console.log(a); 
{
    var b = "anurag"
    b="ravi"
    console.log(b); 
    console.log(a)
}
console.log(b); // global scoped

//LET
// let is block scoped,can be updated but not re-declared

console.log("Let Example")
let x = 55;
x = 85; // can be updated
//let x = 65; cannot be redeclared
{
  console.log(x)
  let y = 76;
  console.log(y)
    x = 95;
}
// console.log(y) local scoped
console.log(x)
  
}
// console.log(y) local scoped


//CONST
// const is block scoped, cannot be updated and re-declared

console.log(" Const Example");
const a = 55
{
//const a = "anurag" cannot be redeclared
console.log(a);
    const b = "beast"
}
 // a = 95  cannot be updated 
console.log(a);
// console.log(b); local scoped


//var variables are initialized with undefined whereas let and const variables are not  initialized

console.log(x); // Outputs: undefined
var x = 5;
console.log(x); // Outputs: 5


// This would result in a ReferenceError
console.log(y); // Uncaught ReferenceError: y is not defined
let y = 10;
console.log(y); // Outputs: 10

// This would also result in a ReferenceError
console.log(z); // Uncaught ReferenceError: z is not defined
const z = 15;
console.log(z); // Outputs: 15

// const must be initialized during declaration unlike let and var


//L4- 7 Primitive Data Types and Non primitive : Objects Function Array

//nnssbbu null number symbol string boolean bigint undefined

let a = null;
let b = 45;
let c = true;
let d = BigInt("456") + BigInt("456");
let e = "Messi";
let f = Symbol("I AM A symbol");
let g = undefined;
console.log(a,b,c,d,e,f,g)
console.log(typeof f)
// typeof is used to find type of data

//object is key value pairs age:20 used for mapping

const item = {
  "Anurag" : true,
  "Ravi" : false,
  "Govind" : null,
  "Hemant" : undefined
}
console.log(item["Govind"])

//L-5 Practice Set

//Q1
let a  = "Anurag"
let b = 55
console.log(a+b)

//Q2
console.log(typeof (a+b))
//It returns "string" because the result of the expression a + b is a string due to the concatenation operation.

//Q3
const a = {
  name:"Anurag",
  age:20,
  isPresent:True
}

a = 55 // no

//Q4
const a = {
  name:"Anurag",
  age:20,
  isPresent: true
}

a['friend'] = 'Ravi'
a['name'] = 'Govind'
console.log(a);

//Q5
const dict = {
  bat: "cricket equipment",
  cricket: "sports",
  AI:"Artificial Intelligence"
}

console.log(dict.bat);
console.log(dict['bat']);


//Q.EXTRA Student Info
const Student = {
  
  student1:  {
    "name": "Anurag",
    "rno":1,
    "std": 6
  },

   student2: {
    "name": "Hemant",
    "rno":2,
    "std": 6
  },

   student3: {
    "name": "Ravi",
    "rno":3,
    "std": 6
  }
  
} 

console.log(Student);
console.log(Student["student1"]);

// one more object with all query

const players = {

  player1 : {
      name :"Rolando",
      age:38,
      isselected:true
  },

   player2: {
      name :"Neymar",
      age:30,
      isselected:true
  },

   player3 : {
      name :"Messi",
      age:36,
      isselected:true
  }

}

console.log(players)

console.log(players['player1'])
console.log(players.player1)

players.player1['friend'] = 'Ravi'
players.player2['name'] = 'Govind'
console.log(players);

// How to combine 2 object

const leaders = {

 leader1:{
  Name:"Putin",
  Age:70,
  Country: "Russia",
  isAlive: true
 },

 leader2:{
  Name:"Modi",
  Age:75,
  Country: "Bharat",
  isAlive: true
 },

 leader3:{
  Name:"Boden",
  Age:80,
  Country: "USA",
  isAlive: true
 }
 
}

console.log(leaders);
console.log(leaders.leader1)
console.log(leaders["leader2"])
console.log(leaders.leader1["Country"]= 'UAE')
console.log(leaders.leader1["Skills"]= 'Karate')
console.log(leaders.leader1)

const leader4 = {
  Name: "Kim jong",
  Age: 60,
  Country: "North Korea",
  isAlive: true,
};

leaders.leader4 = leader4;
 console.log(leaders);

// using Object.assign

const leaders = {
  leader1: {
    Name: "Putin",
    Age: 70,
    Country: "Russia",
    isAlive: true
  },
  leader2: {
    Name: "Modi",
    Age: 75,
    Country: "Bharat",
    isAlive: true
  },
  leader3: {
    Name: "Boden",
    Age: 80,
    Country: "USA",
    isAlive: true
  }
};

// Adding leader4 to the leaders object using Object.assign
Object.assign(leaders, {
  leader4: {
    Name: "Kim jong",
    Age: 60,
    Country: "North Korea",
    isAlive: true
  }
});

console.log(leaders);
console.log(leaders.leader1);
console.log(leaders["leader2"]);
console.log(leaders.leader1["Country"] = 'UAE');
console.log(leaders.leader1["Skills"] = 'Karate');
console.log(leaders.leader1);










