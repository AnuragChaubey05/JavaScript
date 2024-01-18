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
