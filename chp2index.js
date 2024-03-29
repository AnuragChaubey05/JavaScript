// L-6 Expressions & Operators

A fragment of code that produces a value is called an expression.

Example:
!true = false
Here true is an operand, "!" is an operator , false is result.

7+5 = 12; 7&5 is operands "+" is an operator , 12 is result.

Arthimetic Operator : + add - sub * mult  / div  ** exponential  % modulus ++ increment -- decrement
let a = 8;
let b = 4;
console.log(a + b); 
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a ** b);
console.log(a % b);
console.log(a++);
console.log(++a);
console.log(a--);
console.log(--a);

//output
12
4
32
2
4096
0
8
10
10
8

Assignment Operator : = += -= *= /= %= **=

a = 5;
console.log(a)
a += 25;
console.log(a)
a -= 25;
console.log(a)
a *= 25;
console.log(a)
a /= 25;
console.log(a)
a %= 25; 
console.log(a)
a  **= 25;
console.log(a)

//output
5
30
5
125
5
5
298023223876953150

Comparison Operator : == != === !==  greater than is “>” 5 > 3 and less than  is “<” 4 < 8. >= <=  and ? ternary
  
a = 5;
b = 6;
console.log(a==b)
console.log(a!=b)
console.log(a===b)// type and value both are same
console.log(a!==b)// type and value both are not same
console.log(a > b)
console.log(a < b)
console.log(a >= b)
console.log(a <= b)

//output
false
true
false
true
false
true
false
true


In JavaScript, there are three different operators for comparison and assignment:
1. Assignment Operator (`=`):
   - Used for assigning a value to a variable.
   - Example: `let x = 5;` assigns the value `5` to the variable `x`.

2. Equality Operator (`==`):
   - Checks for equality after converting both operands to a common type.
   - Performs type coercion if necessary.
   - Example: `5 == '5'` evaluates to `true` because the string `'5'` is converted to a number before comparison.

3. Strict Equality Operator (`===`):
   - Checks for equality without type conversion (strict comparison).
   - Returns `true` if both the value and the type of the operands are the same.
   - Example: `5 === '5'` evaluates to `false` because the value `5` (number) is not strictly equal to the string `'5'`.

Here's a summary of their differences:

- `=` is the assignment operator.
- `==` checks for equality after type coercion.
- `===` checks for equality without type coercion (strict equality).

It's generally recommended to use `===` for comparisons unless you explicitly need type coercion, as it helps prevent unexpected behavior due to automatic type conversion. 
Using `===` can also make your code more readable and less error-prone.


// Conditional (ternary) operator
Conditional (ternary) operator
function getFee(isMember) {
  return isMember ? '$2.00' : '$10.00';
}

console.log(getFee(true));
// Expected output: "$2.00"

console.log(getFee(false));
// Expected output: "$10.00"

console.log(getFee(null));
// Expected output: "$10.00"

function isGreater(value) {
  return value ? "Yes" : "No";
}

console.log(isGreater(5 > 3)); // Expected output: "Yes"
console.log(isGreater(true)); // Expected output: "Yes"
console.log(isGreater(false));   // Expected output: "No"
console.log(isGreater(null));    // Expected output: "No"
console.log(isGreater(undefined)); // Expected output: "No"
console.log(isGreater(NaN));      // Expected output: "No"
console.log(isGreater(0));        // Expected output: "No"
console.log(isGreater(-5));       // Expected output: "Yes"
console.log(isGreater(7));  // Expected output: "Yes"
 

Logical Operator : && || !

let x = 5;
let y = 6;
console.log(x<y && y==5);
console.log(x<y || y==5);
console.log(!false);

//output
false
true
true

comment ; // /* */

// L-7 Conditional Expression

// Alert & Prompt
Name = prompt("what is your name ?");
alert("Hello, "+Name+".");

//IF 
let age = prompt("What is your age");
console.log(typeof(age));
age = Number.parseInt(age); // converting the string to a number
if (age > 0) {
  alert("a is valid")
}

//IF ELSE
let age = prompt("What is your age");
console.log(typeof(age));
age = Number.parseInt(age); // converting the string to a number
if (age >= 18) {
  alert("a is allowed")
} else {
  alert("a is not allowed")
}

// IF ELSE IF ELSE
let age = prompt("What is your age");
console.log(typeof(age));
age = Number.parseInt(age); // converting the string to a number
if (age <= 0){
  alert("Invalid")
} else if (age <= 18) {
  alert("You are not allowed")
} else if (age >= 50) {
  alert("You are not allowed")
} else {
  alert("You are allowed")
}

//Switch 

const fruit = prompt("Enter which fruit u want"); 
switch (fruit) {
    
    case 'Mango' :
    alert("500 rs")
    break;

    case 'Banana' :
    alert("50rs")
    break;

    case 'Apple' :
    alert("100 rs")
    break;

  default:
    alert('sorry, we are out of '+ fruit)
}

// Ternary Operator
age = prompt("What is ur age");
alert("You can"+(age <= 18 ? "not drive" : " drive"))

// L-8 Chp2 Practice Set 

//Q1
let age = prompt('What is your age ?');
age = Number.parseInt(age);
if(age >= 10 && age<=20){
  console.log("Your age lies between 10 and 20")
} else{
  console.log("Your age does not lies between 10 and 20")
}

//Q2

let age = prompt('What is your age ?');
age = Number.parseInt(age);

switch(age){
    case 12:
    console.log("Ur age is 12")
    break;
    case 13:
    console.log("Ur age is 13")
     break;
    case 14:
    console.log("Ur age is 14")
     break;
    case 15:
    console.log("Ur age is 15")
     break;
    default:
    console.log("Ur age is not special")
     break;
}

//Q3

let num = prompt("Enter the no");
num = Number.parseInt(num);
if (num%2==0 && num%3==0){
alert("It is divisible");
} else{
 alert("It is not divisible");
}

//Q4

let num = prompt("Enter the no");
num = Number.parseInt(num);
if (num%2 == 0 || num%3 == 0){
alert("It is divisible");
} else{
 alert("It is not divisible");
}

//Q5

Age = prompt("Enter your age");
Age = Number.parseInt(Age);
alert("You can" + ( Age > 18 ? " drive" : "not drive"));
