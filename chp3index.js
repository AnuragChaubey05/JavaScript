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

//Function
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







