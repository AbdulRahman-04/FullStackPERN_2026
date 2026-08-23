// console.log  : used to print stuff in terminal!
console.log("Hello World!");
console.log("How u doing?");


// to execute a js program , go to cmd and type : 
//  node filename

// single line comment 

/*
 
 multi line comment!

*/

// variables : variables in js or any language are like containers which can store data in itself of any type.
// there are 3 ways to declare variables in js : var , let , const

// var : same nam evariable can be declared nd value can be updated.
var abdul = "hi"
var abdul = true
console.log(abdul);

// let : one cannot redeclare same name variable using let, but value of declared variable can be updated.
let age = 22
age = 23;
console.log(age);

// const : neither value can be updated nor redclared of a variable 
const name = "abdul rahman"
// name = true
console.log(name);


// DATA TYPES IN JS 

// PRIMITIVE DATATYPES                     // NON PRIMITIVE DATA TYPES
// string, number, boolean,                // arrays , objects and functions.
// undefined, null, symbol, biginit.



// type conversion : type conversion means converting a data type value into another  datatype value. (e.g : string to number, boolean to string etc)

// implicit conversion: use + operator to convert or concatinate into string.

let ab = "hi this " + true
console.log(ab, typeof(ab));

let nu = "num is " + 49
console.log(nu, typeof(nu));
 
// - operator to convert into number datatype 
let x = "15" - 10
console.log(x, typeof(x));

let y = true - 0;
console.log(y, typeof(y));


// Explicit conversions : type conversion using built in methods is called explicit conversions.


// boolean and num to string 
let bool = true
let boolToStr = String(bool)
console.log(boolToStr, typeof(boolToStr));

let num = 5049
let numToStr = String(num)
console.log(numToStr, typeof(numToStr));



// boolean nd string to number
let bool1 = false
let boolToNum = Number(bool1)
console.log(boolToNum, typeof(boolToNum));

let str = "10"
let strToNum = Number(str)
console.log(strToNum, typeof(strToNum));


// string and number to boolean
let str1 = "false"
let strToBool = Boolean(str1)
console.log(strToBool, typeof(strToBool));

let num2 = 0;
let numToBool = Boolean(num2)
console.log(numToBool, typeof(numToBool));



// Scoping in js : 

// block scope : a variable declared inside a {} is called blcok scope variable.

//                                    VAR               LET                CONST

// inside of block                    ✅                 ✅                 ✅
// outside of bloc                    ✅                 ❌                  ❌


// function scope : a varable declared inside function is called function scope.

//                                    VAR               LET                CONST

// inside of block                    ✅                 ✅                 ✅
// outside of bloc                    ❌                ❌                  ❌


// global scope : a var declaredd neither inside any block nor function 


//                                    VAR               LET                CONST

// inside of block                    ✅                 ✅                 ✅
// outside of bloc                    ✅                 ✅                 ✅