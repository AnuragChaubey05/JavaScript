//L1-Intro

// programming is a way to talk to computers
//ECMAScript is a standard on which js is based!
//js can be executed inside browser (console) and runtime environment like node.js it is written in c++ and inb <script> tag.

// helloworld
console.log("Hello World")

// L2- Variables and Data types

// Set of rules is called syntax in js
// Variables is a container that stores a value.
//js allows us to change a variable type in runtime. a=5 & a = "Anurag";
//Declaring a variable.  let a(identifier) = (assignment operator) 7(literal);
//Rules for declaring a variables(case sensitive,keywords,etc)
 
let a =67
console.log(a)
a = "anurag"
console.log(a)

//L3-let vs var vs const

//var is globally scoped while let and const are block scoped.
// var can be updated and redeclared within its scope
// let can be updated but not redeclared
//const can neither be uploaded nor be redeclared.

// var
var a = 55
{
var a = "anurag"
console.log(a);
}
 a = 95
console.log(a);


// let 
let a = 55
{
let a = "anurag"
console.log(a);
}
 a = 95
console.log(a);

//const
const a = 55
{
const a = "anurag"
console.log(a);
}
 a = 95
console.log(a);

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










