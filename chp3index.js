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

// L- 10 do while loop










