// L-16 Arrays

// Arrays are variables which can hold more than one value
// Array is a collection of some items, access through index.

let marks_classs_12 = [15,29,39,45]
console.log(marks_class_12)

let marks_class_11 = [15,29,39,45]
console.log(marks_class_11)

// arrays can store different types of values

let marks_class_12 = [15,29,39,"absent",null,false]
console.log(marks_class_12)

// index starts from 0 , accessing values
console.log(marks_class_12[0])
console.log(marks_class_12[1])
console.log(marks_class_12[2])
console.log(marks_class_12[3])
console.log(marks_class_12[4])
console.log(marks_class_12[5])
console.log(marks_class_12[6])//will be undefined because index 6 does not exist

//how to find length of array
console.log("The length of marks_class_12 is ", marks_class_12.length)

//adding a new value to the array
marks_class_12[6] = 89

// changing the value of an array
marks_class_12[0] = 99
console.log(marks_class_12)

// Arrays are mutable and can be changed.
// In js, arrays are objects. The type of operator on arrays returns object.
console.log(typeof marks_class_12)

//Quiz
// printing array using for loop

for (let i=0; i<marks_class_12.length; i++){
  console.log(marks_class_12[i]);
}

// using for in loop
for (let mark of marks_class_12){
  console.log(mark);
}

// L-17 Array Methods

let num = [1, 2, 3, 4, 5];
let b = num;
console.log(b); 

// .toString()
// converts an array to a string of comma separated values.
b = b.toString();
console.log("\n",b,typeof(b));

// .join() 
// joins all the array elements using a separator
let c = num.join("-")
console.log("\n",c,typeof(c))
 c = num.join(" and ")
console.log("\n",c,typeof(c))

//pop()
// removes last element from the array and update original array and returns the popped element
let r = num.pop()
console.log(num,r) 

// push()
// adds a new element at the end of the array and modiifies the original array and returns the new array length
let s = num.push(69);
console.log(num,s)

// shift
// removes first element and returns it and modify the original array
let p = num.shift()
console.log(p,num) 

// unshift()
// adds element to the beginning and returns new array length
let u = num.unshift(78)
console.log(u,num) 

let num = [22,1,19,45,20]
console.log(num.toString());
console.log(num.join("-"));
console.log(num.pop(),num);
console.log(num.push(69),num);
console.log(num.shift(),num);
console.log(num.unshift(69),num);

// L-18 More Array Method

// delete
// IQ
//Length of an array does not change when we add or remove elements from it.
let num = [1,2,35,45,68]
console.log(num.length) //5
delete num[4]
console.log(num)
// [ 1, 2, 35, 45, <1 empty item> ]
console.log(num.length) //5

// concat method
// use to join arrays to given array, num1 and num are not changed.
let num1 = [1,2,3,4,5,6,7,8,9]
let num2 = [11,12,13,14,15,16,17,18,19]
let new_array = num1.concat(num2);
// new_array = num1.concat(num2,num); 
// more than one array can be concatenated
console.log(new_array);

// sort method
//IQ
//It modifies the original array.
// used to sort an array alphabetically,not in ascending or descending order.

let rum = [10,2,57,40,5,6,70,8,9]
rum.sort()
console.log(rum)

let sum = [5, 45, 3, 2, 1, 0, -1, -2, -3, -4, -5]
sum.sort()
console.log(sum)

// compare function is used to sort an array in ascending or descending order. a-b or b-a
let compare = (a,b) => { return a-b}
rum.sort(compare)
sum.sort(compare)
console.log(rum)
console.log(sum)

// reverse method
sum.reverse()
console.log(sum)

// splice and slice
// splice can be used to add new items to an array.

let nayaarray = [1,2,3,4,5,6]
nayaarray.splice(3,2,33,44,55)
//(position,no. of elements to be removed, elements to be added)
console.log(nayaarray)

//If you remove fewer elements than you add with the splice method, the array will have a net increase in length. The new elements will be inserted at the specified starting index, and the existing elements after that index will be shifted to accommodate the added elements.
//If you remove more elements than you add with the splice method, the array will have a net decrease in

//returns deleted items and modifies the array

let deleted_items = nayaarray.splice(3,2,33,44,55)
console.log(deleted_items)

//slice()
// slices out a piece from an array. It creates a new array.

let naya=[1,2,3,4,5,6]
console.log(naya.slice(2))

let naya1 = naya.slice(2,4)
console.log(naya1)

// L - 19 Using Loops With Arrays

let num = [1, 2, 3, 4, 5, 6]

for(let i = 0; i<num.length; i++){
  console.log(num[i])
}

// ForEach Loop

num.forEach((element) => {
  console.log(element * element)
})

// Using forEach loop with a different variable name
num.forEach((value) => {
  console.log(value * value);
});

//for of loop
for (let i of num){
  console.log(i)
}

//for in loop
for (let i in num){
  console.log(i)
  //console.log(num[i])
}

// Array.from
// Array.from(a) it is sed to create an array from any other object

let name = "Anurag"
let nayarray = Array.from(name)
console.log(nayarray)

/*
1. document.getElementsByClassName("ref_overview")
HTMLCollection(36) [div.ref_overview, div.ref_overview, div.ref_overview, div.ref_overview, div.ref_overview, div.ref_overview, div.ref_overview, div.ref_overview, div.ref_overview, div.ref_overview, div.ref_overview, div.ref_overview, div.ref_overview, div.ref_overview, div.ref_overview, div.ref_overview, div.ref_overview, div.ref_overview, div.ref_overview, div.ref_overview, div.ref_overview, div.ref_overview, div.ref_overview, div.ref_overview, div.ref_overview, div.ref_overview, div.ref_overview, div.ref_overview, div.ref_overview, div.ref_overview, div.ref_overview, div.ref_overview, div.ref_overview, div.ref_overview, div.ref_overview, div.ref_overview]
2. let a = document.getElementsByClassName("ref_overview")
undefined
3.typeof a
'object'
4. a.foreach()     
VM15557:1 Uncaught TypeError: a.foreach is not a function
    at <anonymous>:1:3
(anonymous) @ VM15557:1
5. Array.from(a)
(36) [div.ref_overview, div.ref_overview, div.ref_overview, div.ref_overview, div.ref_overview, div.ref_overview, div.ref_overview, div.ref_overview, div.ref_overview, div.ref_overview, div.ref_overview, div.ref_overview, div.ref_overview, div.ref_overview, div.ref_overview, div.ref_overview, div.ref_overview, div.ref_overview, div.ref_overview, div.ref_overview, div.ref_overview, div.ref_overview, div.ref_overview, div.ref_overview, div.ref_overview, div.ref_overview, div.ref_overview, div.ref_overview, div.ref_overview, div.ref_overview, div.ref_overview, div.ref_overview, div.ref_overview, div.ref_overview, div.ref_overview, div.ref_overview]

*/

// L-20 map(),filter(),reduce()

// Array map() method

// creates a new array by performing some operation on each array element 
// map is used to create a new array from an existing one
// for each is used to perform operation on each element of an existing array 

let arr = [25,55,95,69]
let a= arr.map((value,index,array)=>{
  console.log(value,index, array);
  return value + index;
} )
console.log(a)
console.log(arr); // dosen't change the original array

// Array filter() method

// filters an array with values that passes a test creates a new array
let arr2 = [25,55,95,69,0,3,5]
let a2 = arr2.filter((a)=>{
  return a<10
})
console.log(a2)
console.log(arr2) // do not modify the original array

// Array reduce() method
// reduces an array to a single value

let arr3 = [1,2,3,4,5,6,7,8,9]
let a3 = arr3.reduce((h1, h2) => {
  return h1+h2
})
console.log(a3)

// func can be written as variable in js
const reduce_func = (h1,h2) => {
  return h1+h2
}
let newa3 = arr3.reduce(reduce_func)
console.log(newa3)

console.log(arr3) // do not modify the original array

// L- 21 Chp5 Practice Set

//Q1

let arr = [1,4,5,4,6];
let a = prompt("enter the number")
a = Number.parseInt(a)
arr.push(a)
console.log(arr);

//Q2

let arr = [1,4,5,4,6];
let a;
do {
  a = prompt("enter the number: ")
  a = Number.parseInt(a)
  arr.push(a)
} while(a != 0);

 console.log(arr);

//Q3

let arr = [1,40,5,4,60];
let n = arr.filter((x)=>{
 return x%10 == 0
})
console.log(n)

//Q4

let arr = [1,40,5,4,60];
let n = arr.map((x)=>{
 return x*x
})
console.log(n)

//Q5

let arr = [1,2,3,4,5,6,7,8];
let n = arr.reduce((x1,x2)=>{
 return x1*x2
})
console.log(n)
