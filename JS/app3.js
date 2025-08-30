let temperature = 25;

if (temperature > 20) {
  console.log("It's a warm day.");
}


let hour = new Date().getHours(); 
let greeting; 

if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

console.log(greeting);
//Days of the week
let day = new Date (). getDay();
let today = ``;
switch (day){
 case  0:
 today =`Sunday`;
 break;
 case  1:
 today =`Monday`;
 break;
 case  2:
 today =`Tuesday`;
 break;
 case  3:
 today =`Wednesday`;
 break;
 case  4:
 today =`Thursday`;
 break;
 case  5:
 today =`Friday`;
 break;
 case  6:
 today =`Saturday`;
 break;
 default:
 today =`Enter proper day`;
 break;
} 
console.log(`Today is : ${today}`);

//Months of  the year
let monthIndex = new Date().getMonth();
let currentMonth = ``;

switch (monthIndex) {
  case 0:
    currentMonth = `January`;
    break;
  case 1:
    currentMonth = `February`;
    break;
  case 2:
    currentMonth = `March`;
    break;
  case 3:
    currentMonth = `April`;
    break;
  case 4:
    currentMonth = `May`;
    break;
  case 5:
    currentMonth = `June`;
    break;
  case 6:
    currentMonth = `July`;
    break;
  case 7:
    currentMonth = `August`;
    break;
  case 8:
    currentMonth = `September`;
    break;
  case 9:
    currentMonth = `October`;
    break;
  case 10:
    currentMonth = `November`;
    break;
  case 11:
    currentMonth = `December`;
    break;
  default:
    currentMonth = `Invalid month index`;
    break;
}

//Do while loop for Emp data
let Employees = [
  { id: 101, name: "Ram", department: "HR" },
  { id: 102, name: "Sita", department: "IT" },
  { id: 103, name: "Lakshman", department: "Finance" },
  { id: 104, name: "Hanuman", department: "Facilities" }
];

let employeeIndex = 0;

do {
  let currentEmployee = Employees[employeeIndex];
  if (currentEmployee) {
    console.log(`Processing employee: ${currentEmployee.name} (ID: ${currentEmployee.id}, Department: ${currentEmployee.department})`);
  } else {
    console.log("No more employees to process.");
  }
  employeeIndex++;
} while (employeeIndex < Employees.length && Employees[employeeIndex]?.department !== "Facilities");

console.log("Finished processing employees.");

//print from 0-10 diff 2
let result = ``;
let i = 0;

do {
  if (i < 10) {
    result += `${i}, `;
  } else {
    result += `${i}`; 
  }
  i += 2; 
} while (i <= 10);

console.log(result);
// With comma 
let result = ``;
let i = 0;

while (i <= 10) {
  if (i < 10) {
    result += `${i}, `; 
  } else {
    result += `${i}`;
  }
  i++;
}

console.log(result);

// Without comma 
let result = ``;
let i = 0;

while (i <= 10) {
  if (i < 10) {
    result += `${i}-`; 
  } else {
    result += `${i} `;
  }
  i++;
}

console.log(result);

