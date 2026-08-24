/*
=====================================
SPREAD & REST OPERATOR (ES6)
=====================================
*/

/*
-------------------------------------
SPREAD OPERATOR (...)
-------------------------------------

Definition:
The spread operator expands an array or object
into individual elements or properties.
It is used to copy, merge, or pass values.
*/

// spreading values of ann aray inside another array using spread operator
let arr1 = [1,2,3]
let arr2= [...arr1]

let arr3 = [...arr1, ...arr2]
console.log(arr3);


// spread operator with objects 
let obj = {
    x: "x",
    y: "y"
}

let newObj = {
    ...obj,
    z:"z"
}

console.log(newObj);


// spread operator with function 
let nums = [1,2 ,3]

// function sum(a,b,c){
//     console.log(a+b+c);
    
// }

// sum(...nums)

/*
-------------------------------------
REST OPERATOR (...)
-------------------------------------

Definition:
The rest operator collects multiple values
into a single array.
It is mostly used in function parameters.
*/

function print(...numbers){
    console.log(...numbers);
    
}

// print(2,4,5)


function skills(name, ...skills){
    console.log(name, ...skills);
    
}

skills("rxhman", "js", "ts", "node")

let fruits1 = ["apple", "banana"];
let fruits2 = ["mango", "orange"];

let totalFruits = [...fruits1, ...fruits2]
console.log(totalFruits);

let user = {
    name: "Rahman",
    age: 22
};

let updatedUser = {
    ...user,
    city: "hyd"
}

console.log(updatedUser);


function add(...nums){
    console.log(...nums);
    
}

add(5,5,5)

function showInfo(name, ...skills){
    console.log(name, ...skills);
    
}

showInfo("Rahman", "JS", "TS", "Node");