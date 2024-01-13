// L- 13 Strings

// string is a collection of characters & it is used to store and manipulate text

let name = "Anurag";
let nickname = 'Anu';
console.log(name,nickname,name.length,nickname.length)
console.log(name[0])
console.log(name[1])

Template Literals

//It uses backtics `` instead of quotes to define a string

let multilineMessage = `
  This is a multiline string.
  It can span multiple lines without the need for explicit line breaks.
  Very convenient!
`;

console.log(multilineMessage);

// possible to use both "" ''
console.log(`'CSMT' STANDS FOR  "Chhatrapati Shivaji Maharaj Terminus"`)

// insert variables directly in template literal called as string interpolation

let boy1 = "Anurag";
let boy2 = 'Ravi';
let sentence = `${boy1} is a friend of ${boy2}.`
console.log(sentence);

// Escape Sequence Characters (\' \n newline, \t tab, \r carriage return)
let fruit = 'Bana\'na'
console.log(fruit +" "+  fruit.length)

let sentence = 'He is a \n boy'
console.log(sentence)

let sentence = 'He is a \r\n boy'
console.log(sentence)

let sentence = 'He is a \t boy'
console.log(sentence)


let stringWithCarriageReturn = "Hello \r World";
console.log(stringWithCarriageReturn);

// L- 14 Strings Methods

let name = "Anurag"
console.log(name.length)
console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.slice(0,3))
console.log(name.slice(2))
console.log(name.replace("Anu", "Chomu"))

let name = "Anurag"
let friend = "Ravi"
console.log(name.concat(" is a friend of ", friend, "."))

let friend = "      Ravi        "
console.log(friend.trim())

let friend = "Rahul";
console.log(friend[0]);
console.log(friend[1]);
console.log(friend[2]);
console.log(friend[3]);
console.log(friend[4]);

let friend = "Rahul";
 for (i=0; i<friend.length; i++){
   console.log(friend[i])
 }

let friend = "Rahul";
let sum = "";
 for (i=0; i<friend.length; i++){
    sum += friend[i];
   console.log(friend[i]);
 }
console.log(sum) 

let friend = "Rahul" + "Harry";
console.log(friend); 

//It's important to know that in JavaScript, strings are immutable. 
//This means that once a string is created, its contents cannot be changed.

// L- 15 Practice set on Strings

//Q1

console.log("har\"".length)
//output:4

//Q2

//includes()
let sentence = "I am happy";
let word = "happy";
console.log(`The word "${word}" ${sentence.includes(word) ? "is" : "is not" } in the sentence  `)

// startsWith & endsWith
const str1 = 'Cats are the best!';

console.log(str1.endsWith('best!'));
// Expected output: true

console.log(str1.endsWith('best', 17));
// Expected output: true

console.log(str1.startsWith('Cats'));
// Expected output: true

console.log(str1.startsWith('Cats 1'));
// Expected output: false

//Q3

let str = "Anurag"
console.log(str.toLowerCase())
console.log(str.toUpperCase())

//Q4

let str = "Please give Rs 1000"
let amount = Number.parseInt(str.slice(15))
console.log(amount + typeof(amount));
console.log(str.slice("Please give Rs ".length))

//Q5

let friend = "Raftaar"
friend[3] = "R"
console.log(friend) // friend is not changed, because string is immutable.

