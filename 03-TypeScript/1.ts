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
let myNum : number = 5049
// console.log(myNum);

let myStr : string = "rxhmann"
// console.log(myStr);

let myBool : boolean = true
// console.log(myBool);



// Arrays : array in ts is very powerful, we declare type of values which is going to be stored in array.

let arr : boolean[] = [true, false , true]
// console.log(arr);

let arr2 : string[] = ["hi", "hello", "heyy"]
// console.log(arr2);

let arr3 : number[] = [49, 11, 17]
// console.log(arr3);


/*

  Tuples : tuple is a special type of array,
  which stores fixed size and specific data values in itself.

  let arr = [string, boolean, number] = ["hey", true, "go"] 

*/ 

let arr4 : [boolean, string, number] = [true, "haan", 69]
// console.log(arr4);

let arr5 : [boolean, string] = [false, 'false']
// console.log(arr5);

let arr6 : number[] = [1,2,34]
// console.log(arr6);




// Enum:
// An enum is a group of predefined values.
// It is useful when a variable should have only a fixed set of choices.


enum OrderStatus {
    PENDING = "pendin",
    CONFIRMED = "confirmed",
    SHIPPED = "shipped",
    DELIVERED = "delivered",
    CANCELLED = "cancelled"
}


let orderState = OrderStatus.DELIVERED


// console.log(orderState);


enum UserRole {
    ADMIN = 'admin',
    USER = 'user',
    MODERATOR = "moderator"
}

let getRole : UserRole;

getRole = UserRole.USER

// console.log(getRole);


// SOME NEW TYPES IN TS ARE ANY, UNKNOWN  AND VOID....(WE'LL LEARN UNDEFINED , NULL TOO)

// ANY : If a variable is declared without specifying its type and without assigning a value, TypeScript treats it as any. 
//       This means the variable can hold any type of value, which removes TypeScript’s type safety and is generally not recommended.

let b;
let me:any = "hello"
// console.log(me, typeof(me));



// Unknown: it is a special TypeScript type that can store any value, but unlike any,
//         it does not allow operations (like arithmetic or method calls) without proper type checking..


let c:any = "unknown"
c = c.toUpperCase()
// console.log(c);

let d:unknown = "unknown"

if(typeof(d) === "string"){
    d = d.toUpperCase()
    // console.log(d);
}


/*
Void:
void is used as the return type of a function when the function
does not return any value.

If a function returns a value, we specify the type of that value
instead of void.
*/

function sayName():void{
    console.log("rahmannn");
}

// sayName()

function add(a:number,b:number):number {
    return a+b
}

let sum : number = add(12,13)
// console.log(sum);

function getClg(clgName: string) : string {
    return clgName
}

let myClg : string = getClg("DCET")
console.log(myClg);



// undefined: it literally means a variable is declared but it has been not assigned with any value.

let variable:undefined;
// console.log(variable, typeof(variable));

let variable2:null


// never: use karte ho jab function kabhi normal tarike se end nahi hoga. 
//        Ya toh error throw karega ya infinite loop me fasa rahega.

function getErr(): never {
    throw new Error("sign up failed")
}

// getErr()

function loop(): never {
    while(true){
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
console.log(x, typeof(x));



//  type annotations: it means when we declare a variable while also defining its data type.
let ba : string = "heyyy"
console.log(ba);

let bool: boolean = false
console.log(bool, typeof(bool));



// Interface: defines the shape of an object.
// It tells us what properties an object can/should have
// and what types those properties should be.

interface MyStudent {
    stdName: string,
    stdRollNo : number,
    isAlive: boolean
}

let student1 : MyStudent = {
    stdName : "rahmann",
    stdRollNo: 5049,
    isAlive: true
}

// console.log(student1);

// extending interfaces : an interface which extends another interface : 

interface FinalStudent extends MyStudent {
    stdCourse : string
}

let MyStudent1 : FinalStudent = {
    stdName: "sar",
    stdRollNo: 5049,
    isAlive: true,
    stdCourse: "ECE"
}

// console.log(MyStudent1);


interface Product {
    name: string,
    price : number,
    inStock : boolean
}

interface DigitalProduct extends Product {
    fileSize: number,
    format: string,
}

let product1 : DigitalProduct = {
    name: "iphone 18",
    price: 150000,
    inStock : true,
    fileSize: 15,
    format : "jpeg"
}

// console.log(product1);



// Type Aliases: type aliases is used for creating own custom types in typescript.

// | : this is called union type, can be used as or operator of js 

type rahmann = string

let xxx:rahmann = "rxhmann"
// console.log(xxx);

// but ir doesn't seem to make sense creating own custom types right? 
// below example will make sense for type aliases.

type myType = string | number | boolean

let getVar : myType = "hey";
// console.log(getVar);



type UserId = string | number

type User = {
    name: string,
    age: number
}

let user: User = {
    name: "cr7",
    age: 42
}

// console.log(user);


// Intersection type (&) ka matlab:
// Do ya zyada types ko combine kar dena, aur final type me sabke properties mandatory ho jaate hain.

// Socho:

// Union (|) = ya ye ya wo

// Intersection (&) = ye bhi + wo bhi

type chacha = {
    name: string
}

type chachi = {
    age: number,
}

type FinalValue = chacha & chachi 

let myValues : FinalValue = {
    name : "rxhmann",
    age : 22
}

console.log(myValues);
