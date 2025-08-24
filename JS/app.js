/* Var declaration*/
let a=20;
let b=8;
let c = 2;
let sum=(a+b+c)
console.log (sum);
console.log ('The sum of a, b, c is :' + sum);

// Data types//
// String//
let fruit = 'Jackfruit';
console.log(fruit)

let country = "India";
console.log(country);

let result = `Pass`;
console.log(result);

// Number//
let num1 = 8;
let num2 = 3.13;

console.log(num1);
console.log(num2); 

let integer_number1= -3;
let integer_number2= -2;
console.log(integer_number1);
console.log(integer_number2);

let employeeAge = 55;
let empID = 12345;
console.log(`value : ${empID} type:${ typeof empID}`);
console.log(`value :${employeeAge} type :${ typeof employeeAge}`);

//Boolean//
let isManager = true ;
let isEmployee = false;
console.log(`value :${isManager} type :${ typeof isManager}`);
console.log(`value :${isEmployee} type :${ typeof isEmployee}`);

//undefined

let name = Aishwarya;//variable declaration
console.log(`value :${num} type :${ typeof num} `);
console.log(`value :${name} type :${ typeof name} `);
name ='Aishwarya';//assignment of a variable (doubt)
console.log(name);
console.log(num);


//null
let test=null;
console.log(`value :${test} type :${ typeof test} `); 

//Reassignment is allowed
let abc;
abc=10;
abc='test';
console.log(`value :${abc} type :${ typeof abc}`);

//Non Primitive//
let person = {
            firstName: "Aishwarya",
            lastName: "Iyer"
        };
