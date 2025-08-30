//Assignment operator : =

let test= 10;
console.log(test);

// assignment operator
let a = 2;
console.log("Assignment: a = 2, a =", a);

// addition assignment operator
a += 3;  // a = a + 3
console.log("Addition Assignment: a += 3, a =", a);

// subtraction assignment operator
a -= 4;  // a = a - 4
console.log("Subtraction Assignment: a -= 4, a =", a);

// multiplication assignment operator
a *= 5;  // a = a * 5
console.log("Multiplication Assignment: a *= 5, a =", a);

// division assignment operator
a /= 6;  // a = a / 6
console.log("Division Assignment: a /= 6, a =", a);

// remainder assignment operator
a %= 7;  // a = a % 7
console.log("Remainder Assignment: a %= 7, a =", a);

// exponentiation assignment operator
a **= 8;  // a = a**8
console.log("Exponentiation Assignment: a **= 8, a =", a);

//Arithmetic operator : + - / * %
let x = 5;

// addition operator
console.log("Addition Arithmetic: x + 3 = ", x + 3);

// subtraction operator
console.log("Subtraction Arithmetic: x - 3 =", x - 3);

// multiplication operator
console.log("Multiplication Arithmetic: x * 3 =", x * 3);

// division operator
console.log("Division Arithmetic: x / 3 =", x / 3);

// remainder operator
console.log("Remainder Arithmetic: x % 3 =", x % 3);

let i = 2;

// increment operator
console.log("Increment Arithmetic: ++i =", ++i);

// decrement operator
console.log("Decrement Arithmetic: --i =", --i);

// exponentiation operator
console.log("Exponentiation: i ** 3 =", i ** 3);

//unary operator : ++,--
let b =10;
b = b+1;
b += b+1;
b ++;
console.log(b);

//short hand Math operator : += , -=, /=, *=
let c=11;
let d=22;
let add=10;
add=add+(c+d);
add +=(c+d);
console.log(add);

//conditional operator : <,>,>=,<=,=,!==

let myAge = 25;
let votingAge = 18;

if (myAge >= votingAge) {
  console.log("Old enough to vote!");
} else {
  console.log("Not old enough to vote.");
}

if (myAge <= votingAge) {
  console.log("Old enough to vote!");
} else {
  console.log("Not old enough to vote.");
}

//logical operator : && , ||, ^
let n = 1;

// && logic both expressions are true
console.log((n < 4) && (4 >= n));

// only one expression is true
console.log((n <= 4) && (2 == 4));  

// both expressions are false
console.log((n > 4) && (n == 4));

// || logic both expressions are true
console.log((n < 4) || (4 >= n));

// only one expression is true
console.log((n <= 4) || (1 == 4));  

// both expressions are false
console.log((n > 4) || (n == 4));

// ! logic both expressions are true
// NOT on true
console.log(!true); 

// NOT on false
console.log(!false); 

// comparison example
console.log(!(4 <= 3)); 

//Ternary operator : ?:
let marks = prompt('Enter your marks :');

// check the condition
let result = (marks >= 40) ? 'pass' : 'fail';

console.log(`You ${result} the exam.`);

let age = 20;
let status = (age <= 18) ? "Adult" : "Minor";

console.log(status);

//Equality operator : ==, ===
let m = 10;
let p = 20;
if(m == p){
console.log(`both are equal`);
}
else{
console.log(`both are not equal`);
}

let empID = 12345;
let empname = 'Aishu';
if(empID === empname){
console.log(`both are equal`);
}
else{
console.log(`both are not equal`);
}

