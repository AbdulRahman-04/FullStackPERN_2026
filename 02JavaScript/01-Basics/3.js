// Conditional statements in JS: there are 5 types of conditionals in Js

/*
     IF  statement
     IF ELSE statement 
     ELSE IF ladder
     Nested If else 
     Switch   

*/

// if statement : used for single or one conditon.

// let temp = 3
// if (temp > 30){
//     console.log("Hot temp");
// }

// let balance = 5000
// if (balance > 1000){
//     console.log("Sufficient balance");
// }

// if else : used for this or that condition.
// let age = 19;
// if (age >= 18) {
//   console.log("you can vote");
// } else {
//   console.log(" you cannot vote");
// }

// let num = 15;
// if (num % 2 == 0) {
//   console.log("even");
// } else {
//   console.log("odd");
// }

// else if ladder : used for more than 2 conditions.
// let marks = 72;
// if (marks > 70 && marks <= 80) {
//   console.log("A");
// } else if (marks > 60 && marks <= 70) {
//   console.log("B");
// } else if (marks >= 50 && marks <= 60) {
//   console.log("C");
// } else {
//   console.log("Fail");
// }

// let myAge = 22;
// if (myAge <= 13) {
//   console.log("Child");
// } else if (myAge > 13 && myAge <= 17) {
//   console.log("Teenager");
// } else {
//   console.log("Adult");
// }

// switch : its different from normal if else
let day = "sunday";
switch (day) {
  case "sunday":
    console.log("its sunday");
    break;

  case "monday":
    console.log("Its monday");
    break;

  default:
    console.log("not a week day");
    break;
}

let choice = 2;

switch (choice) {
  case 1:
    console.log("Add");
    break;
  case 2:
    console.log("View");
    break;
  case 3:
    console.log("Update");
    break;
  default:
    console.log("no choice");
    break;
}


// nested if else 

let isLoggedIn = true
let role = "rahman"

if (isLoggedIn) {
    if (role === "admin"){
        console.log("wlcm admin");
    } else {
        console.log("wlcm user");
    }
} else {
    console.log("pls login first");
    
}