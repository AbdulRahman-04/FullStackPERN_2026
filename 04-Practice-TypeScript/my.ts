// // declaring variables in ts : 
// var var1 : number = 12
// console.log(var1);

// let var2 : string = "hey"
// console.log(var2);

// let var3: boolean = true
// console.log(var3);


// // Arrays in ts : 
// let myArr : boolean[] = [true, false, true]
// console.log(myArr);

// let myStrArr : string[] = ["hi", "hello"]
// console.log(myStrArr);

// let myNumArr : number[] = [1, 1]
// console.log(myNumArr);


// tuples : 
// let myTup1 : [boolean, string, number] = [false, "yoo", 49]
// console.log(myTup1);

// let myTup2 : [string, number, boolean] = ["L", 69, true]
// console.log(myTup2);


// enum : 
// enum StatusCode {
//     SUCESSS = 200,
//     SERVER_ERR = 500,
//     NOT_FOUND = 404
// }

// let myStatus : StatusCode = StatusCode.SUCESSS
// console.log(myStatus);

// enum OrderStatusIs {
//     COOKING = "cooking",
//     PACKED = "packed",
//     DELIVERED = "delivered"
// }

// let myOrder : OrderStatusIs = OrderStatusIs.COOKING
// console.log(myOrder);

// any : 
// let anyVar;
// let anyVar : any = "hi"
// console.log(anyVar);


// unknown : 
// let unVar : unknown;

// unVar = false

// if(typeof(unVar) === "boolean"){
//     console.log(unVar);
// }



// void 
function sayName(name: string) : void {
    console.log(name);
    
} 

// sayName("abdxl")

function summ(a:number, b : number) : number {
    return a+b
}

let mySum: number = summ(20,20)
// console.log(mySum);


// optional parameter : 
function sayCourse(myCourse?: string): string{
  return myCourse ?? "ECE"
}

let getCourse : string = sayCourse()
// console.log(getCourse);


function calculatePricee(price: number , discount ?:number) : string {
    return `price is ${price} and discount is ${discount ?? 0}`
}

let getPrice : string = calculatePricee(55000, 10)
// console.log(getPrice);


// undefined : 
let myVar1:undefined = undefined
// console.log(myVar1);


// default parameter:
function sayRollNo(rollNo: number = 5049): number {
    return rollNo;
}

let getRollNo : number = sayRollNo(5046)
// console.log(getRollNo);


// never :
// function neverEnd():never {
//      throw new Error("error while login")
// }

// neverEnd()

function infiniteLoop(): never {
    while(true){
        console.log("HAAN BOL");
        
    }
}

// infiniteLoop()


// type inference : 
let myVar2 = "rahman"
// console.log(myVar2);

let myVar3 = true
// console.log(myVar3);

let myvar4 : number = 5049
// console.log(myvar4);

let myVar5 : null = null
// console.log(myVar5);



// interface : 
interface myObjIs {
  name: string,
  age: number,
  isalive: boolean
}

let myDetail : myObjIs = {
    name: "rxhman",
    age:22,
    isalive: true,
}

// console.log(myDetail);

interface allDetails extends myObjIs {
    marks : number,
    course: string
}

let myDetail1: allDetails = {
     name: "rxhman",
    age:22,
    isalive: true,
    marks: 88,
    course: "ece"
}

// console.log(myDetail1);
 

// type aliases: 
type rxhman = string | number | boolean

let myvar6: rxhman = true
// console.log(myvar6);


type UserIs = {
    name: string,
    age: number
}

type PersonalDetail = {
    isalive: boolean,
    income: number
}

type myUser = UserIs & PersonalDetail

let myUserIs : myUser = {
    name: "vk18",
    age: 37,
    isalive: true,
    income: 180000
}

// console.log(myUserIs);


// type casting or assertion : 

function addOrConcatIs(a:number, b:number, c: "add" | "concat") :string | number {
    if(c === "concat"){
        return a+b+"";
    }

    return a+b;
} 

let getReturn : number = addOrConcatIs(10,10,"add") as number 
// console.log(getReturn, typeof(getReturn));

function getMyValueIs(value : string | number) : string | number {
    return value
}

let getValues : string = getMyValueIs("hey") as string
// console.log(getValues);


// readonly 
type readUser = {
    readonly id : number,
    name: string
}

let myUserr : readUser = {
    id: 101,
    name: "adnan"
}

myUserr.name = "suhail"
// myUserr.id = 110
console.log(myUserr);

// Generics : generally aap kisi function pe kaam krre then wo dynamic nahi rehta one or two or three type ka data pe kaam krta e.g:

// function myfunction(data: string | number | boolean) : string | boolean | number{
//     return data
// }

// function myfunction(data: any) : any{
//     return data
// }


// function myfunction<T>(data: T) : T{
//     return data
// }

// let val1 = myfunction("hi")
// console.log(val1);

// myfunction(5049)
// myfunction(true)


function aeiou<T, U, V>(a:T, b :U, c:V){
   return {a,b, c}
}

let vals = aeiou(12,3,4)
// console.log(vals);



// Narrowing
// Narrow karna = possible types ko checks ke through hataate jaana, jab tak TypeScript ko specific type pata chal jaaye.

function checkVal(value:string|number): string | number {
    if(typeof(value) === "string"){
        return value.toUpperCase()
    }
   
    return value.toFixed()
}

let checkvalue : string | number = checkVal("hey")
console.log(checkvalue);
