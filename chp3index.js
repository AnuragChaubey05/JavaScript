// L-9 For Loops

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

// Program to print table
const n = prompt("Enter a number: ");
for (let i=1; i <= 10; i++) {
  console.log(i*n);
}

//Factorial


