"use strict";
/* Typescript :

// TypeScript:
// TypeScript is a programming language built on JavaScript
// that adds types to help catch errors while writing code.
  
 - to install typescript, u need to install node js on ur laptop/pc (node -v)
 - npm i -g typescript (global install, only once)
 - tsc -v

 there are two ways of running ts file

 1) compile the ts file into js and run it after coding is done
    tsc 1.ts -> this complies ts file into js (1.js) -> ndoe 1.js
    
 2) (good way) tsc 1.ts --watch (every time u save code in ts file js file gets automatically updated)
    -> tsc 1.ts --watch -> tsc 1.ts  -> node 1.js

*/
// console.log("hi in ts");
// basic types in ts : 
/*
   string
   number
   boolean
   null
   undefined
   symbol
   bigint


   in typescript, u can do type annotation, which means telling compiler at time of
   decalring variable its data type

*/
// declaring variables in ts 
let myNum = 5049;
// console.log(myNum);
let myStr = "rxhmann";
// console.log(myStr);
let myBool = true;
// console.log(myBool);
// Arrays : array in ts is very powerful, we declare type of values which is going to be stored in array.
let arr = [true, false, true];
// console.log(arr);
let arr2 = ["hi", "hello", "heyy"];
// console.log(arr2);
let arr3 = [49, 11, 17];
// console.log(arr3);
/*

  Tuples : tuple is a special type of array,
  which stores fixed size and specific data values in itself.

  let arr = [string, boolean, number] = ["hey", true, "go"]

*/
let arr4 = [true, "haan", 69];
// console.log(arr4);
let arr5 = [false, 'false'];
// console.log(arr5);
let arr6 = [1, 2, 34];
// console.log(arr6);
// Enum:
// An enum is a group of predefined values.
// It is useful when a variable should have only a fixed set of choices.
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["PENDING"] = "pendin";
    OrderStatus["CONFIRMED"] = "confirmed";
    OrderStatus["SHIPPED"] = "shipped";
    OrderStatus["DELIVERED"] = "delivered";
    OrderStatus["CANCELLED"] = "cancelled";
})(OrderStatus || (OrderStatus = {}));
let orderState = OrderStatus.DELIVERED;
// console.log(orderState);
var UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "admin";
    UserRole["USER"] = "user";
    UserRole["MODERATOR"] = "moderator";
})(UserRole || (UserRole = {}));
let getRole;
getRole = UserRole.USER;
// console.log(getRole);
// SOME NEW TYPES IN TS ARE ANY, UNKNOWN  AND VOID....(WE'LL LEARN UNDEFINED , NULL TOO)
// ANY : If a variable is declared without specifying its type and without assigning a value, TypeScript treats it as any. 
//       This means the variable can hold any type of value, which removes TypeScript’s type safety and is generally not recommended.
let b;
let me = "hello";
// console.log(me, typeof(me));
// Unknown: it is a special TypeScript type that can store any value, but unlike any,
//         it does not allow operations (like arithmetic or method calls) without proper type checking..
let c = "unknown";
c = c.toUpperCase();
// console.log(c);
let d = "unknown";
if (typeof (d) === "string") {
    d = d.toUpperCase();
    // console.log(d);
}
/*
Void:
void is used as the return type of a function when the function
does not return any value.

If a function returns a value, we specify the type of that value
instead of void.
*/
function sayName() {
    console.log("rahmannn");
}
// sayName()
function add(a, b) {
    return a + b;
}
let sum = add(12, 13);
// console.log(sum);
function getClg(clgName) {
    return clgName;
}
let myClg = getClg("DCET");
console.log(myClg);
// Optional parameter: A parameter in a function that is not required to be passed when calling the function.
//  If you don’t provide it, the function can still run using a default or fallback value.
// function getName(name ?: string) :void {
//     console.log(`name: ${name ?? "rahman"}`);
// }
// getName()
function greet(name) {
    console.log(`name : ${name ?? "Guest"}`);
}
// greet("john")
function calculatePrice(price, discount) {
    console.log(`price : ${price}, discount: ${discount ?? 0}`);
}
calculatePrice(50000);
// undefined: it literally means a variable is declared but it has been not assigned with any value.
let variable;
// console.log(variable, typeof(variable));
let variable2;
// default parameter 
function greet1(name = "suhail") {
    console.log(`heyy ${name}`);
}
greet1("snehaa");
// never: use karte ho jab function kabhi normal tarike se end nahi hoga. 
//        Ya toh error throw karega ya infinite loop me fasa rahega.
function getErr() {
    throw new Error("sign up failed");
}
// getErr()
function loop() {
    while (true) {
        console.log("loop");
    }
}
// loop()
// type interference and type annotations : 
// type inference: it means when we declare a varaible without defing its type. ts automatically checks the data type of variable its called 
//                 the type inference
let ab = true;
console.log(ab);
let x = 23;
console.log(x, typeof (x));
//  type annotations: it means when we declare a variable while also defining its data type.
let ba = "heyyy";
console.log(ba);
let bool = false;
console.log(bool, typeof (bool));
let student1 = {
    stdName: "rahmann",
    stdRollNo: 5049,
    isAlive: true
};
let MyStudent1 = {
    stdName: "sar",
    stdRollNo: 5049,
    isAlive: true,
    stdCourse: "ECE"
};
let product1 = {
    name: "iphone 18",
    price: 150000,
    inStock: true,
    fileSize: 15,
    format: "jpeg"
};
let xxx = "rxhmann";
let getVar = "hey";
let user = {
    name: "cr7",
    age: 42
};
let myValues = {
    name: "rxhmann",
    age: 22
};
// console.log(myValues);
// type casting or assertion : Type Assertion means telling TypeScript: "I know the type of this value, so treat it as this type."
// syntax: const value = someValue as string;
function addOrConcat(a, b, c) {
    if (c === "add") {
        return a + b;
    }
    return a + b + "";
}
let value1 = addOrConcat(12, 13, "add");
let value2 = addOrConcat(11, 11, "concat");
// console.log(value1, typeof(value1));
// console.log(value2, typeof(value2));
function getValue(value) {
    return value;
}
let getMyValue = getValue(5049);
// console.log(getMyValue, typeof(getMyValue));
function getUserInput(input) {
    return input;
}
let getInput = getUserInput("rahman");
let myObj = {
    id: 101,
    name: "fxhadd"
};
myObj.name = "rxhmann";
let myProduct1 = {
    id: 1000,
    name: "airpods",
    price: 5000
};
// myProduct1.id = 1001
console.log(myProduct1);
// Generics : generally aap kisi function pe kaam krre then wo dynamic nahi rehta one or two or three type ka data pe kaam krta e.g:
// for number : 
function getValue2(value) {
    return value;
}
// for string :
function getValue3(value) {
    return value;
}
// any use krskte apan for this prblm but type safety chlejati poor
function anyFunc(a) {
    console.log(a);
}
// anyFunc(true)
// anyFunc("hey")
// anyFunc(11)
// but generics solve this problem, matlab ek function ku use krke aap koi b type use krskte uspe.
function myGeneric(a) {
    console.log(a);
    return a;
}
//<T> place holder h us type ka jo apan function call k tym likhre like myGeneric<string>("hi")
// myGeneric<string>("abdul")
// myGeneric<number>(5049)
// myGeneric<boolean>(true)
function myGenericIs(myVal) {
    return myVal;
}
let myVal = myGenericIs("heyy");
console.log(myVal);
// myGeneric<number>(69)
// myGenericIs<boolean>(true)
// Narrowing
// Narrow karna = possible types ko checks ke through hataate jaana, jab tak TypeScript ko specific type pata chal jaaye.
function getVal(value) {
    if (typeof value === "string") {
        return `value is ${value.toUpperCase()}`;
    }
    else {
        return `value is ${value.toFixed()}`;
    }
}
let finalValue = getVal("yooo");
console.log(finalValue);
