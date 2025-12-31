// console.log("Hello, World1255kugyuf!");

// let data=10;
// data=true;
// console.log(typeof data);

// let name="John";
// let age=30;
// let isActive=true;
// let score;
// let student={name:"Alice",age:20};
// console.log(typeof score);//undefined
// console.log(typeof student);//object

// Task1:   Write 5 variables in the console and use typeof to check their data types.
// Bonus: Create one object and one array, then check their type using typeof.

// let x=10, y=5;
// console.log(x+y);
// console.log(x>y);
// console.log(x=="10");
// console.log(x==="10");
// let result=x>y ? "x is greater":"y is greater";
// console.log(result);

// console.log(Math.random());
// console.log(Math.floor(Math.random() * 100) + 1);

//   {var a = 10;
//   let b = 20;
//   const c = 30;}
// console.log(a);
// console.log(b);
// console.log(c);

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i + " Even");
//   } else console.log(i + " Odd");
// }

// let name = prompt("Enter your name:");
// // console.log("User name is:", name);

// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// rl.question("Enter your name: ", function (name) {
//   console.log("User name is:", name);
//   rl.close();
// });


function showAge() {
let age = 25;
console.log(age); // Accessible inside function
}
showAge();



if (true) {
let blockVar = "I am block scoped";
const anotherVar = 10;
console.log(blockVar); // Accessible here
}


function outerFunction() {
var outerVar = 'I am outside';
function innerFunction() {
console.log(outerVar); // Accessible here
}
innerFunction();
}
outerFunction();