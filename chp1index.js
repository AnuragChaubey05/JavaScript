//L1-Intro

// programming is a way to talk to computers
//ECMAScript is a standard on which js is based!
//js can be executed inside browser (console) and runtime environment like node.js it is written in c++ and in <script> tag.

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

// VAR 
// var is globally scoped, it can be updated and re-declared within its scope

console.log("Var Example");
var a = 5;
var a = 10;
console.log(a);
a = 55;
console.log(a);
{
  var a = 25;
  console.log(a);
}
console.log(a);

//LET
// let is block scoped,can be updated but not re-declared

console.log("Let Example")
let b = 15; 
b=20;
// let b = 30; cannot be redceclared
{
  let b = 45;
  console.log(b)
}
console.log(b)

//CONST
// const is block scoped, cannot be updated and re-declared

console.log(" Const Example");
const c = 5;
// c = 15; cannot be updated
//const c = 95;  cannot be redceclared
{
  const c = 95;
  console.log(c);
}
console.log(c);

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










