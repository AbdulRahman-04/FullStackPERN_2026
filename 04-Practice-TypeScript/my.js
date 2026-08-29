"use strict";
// declaring variables in ts:
// var v : string = "hey"
// console.log(v);
// let age: number = 22
// console.log(age);
// const isAlive: boolean = true
// console.log(isAlive);
// Arrays : 
// let arrIS : boolean[] = [true, false, true]
// console.log(arrIS);
// let myArr : string[] = ["abd", "sar", "hi"]
// console.log(myArr);
// let myNums : number[] = [12, 42, 46, 49]
// console.log(myNums);
// Tuples : 
// let myTup : [boolean, string, number] = [true, "hiii", 69]
// console.log(myTup);
// let myTup1: [string, number] = ["hi", 48]
// console.log(myTup1);
// enums : 
// enum StatusCode {
//     SUCCESS = 200,
//     SERVER_ERROR = 500,
//     NOT_FOUND = 404
// }
// let myVar : StatusCode = StatusCode.SUCCESS
// console.log(myVar);
// enum OrderStatusIs {
//     PENDING = "pendin",
//     CONFIRMED = "confirmed",
//     SHIPPED = "shipped",
//     DELIVERED = "delivered",
//     CANCELLED = "cancelled"
// }
// let myOrder : OrderStatusIs = OrderStatusIs.CONFIRMED
// console.log(myOrder);
// any :
// let myvar1;
// let myvar : any = "hi"
// myvar = myvar.toUpperCase()
// console.log(myvar);
// unknown 
// let myUnk : unknown
// myUnk = "hey"
// if(typeof(myUnk) === "string"){
//    myUnk = myUnk.toUpperCase()
//    console.log(myUnk);    
// }
// void : 
// function sayNameIs(name: string) : void{
//     console.log(name);
// }
// sayNameIs("rahman")
// function sumIs (a: number, b:number) : number {
//     return a+b;
// }
// let sums: number = sumIs(2,2)
// console.log(sums);
// // optional parameter
// function myOpt(age ?: number): string {
//     return `age is ${age ?? 22}`
// }
// let myage: string = myOpt(18)
// console.log(myage);
// function calci(price : number, discount ?: number): string {
//     return `price is ${price} and discount is ${discount ?? 0}`
// }
// let myFinalPrice: string = calci(12000)
// console.log(myFinalPrice);
// undefined 
// let undef: undefined;
// console.log(undef);
// default parameter: 
// function myParam(a: number = 49): number {
//     return a
// }
// let myNumis : number = myParam(69)
// console.log(myNumis);
// never : 
// function loopis() : never {
//     while(true){
//         console.log("yes");
//     }
// }
// loopis()
// function errIs(): never {
//     throw new Error("err signing in")
// }
// errIs()
// type inference :
// let a = "rahman"
// let g = "fahad"
// let boolis = true
// let numis = 48
// // type annotations : 
// let xx : boolean = true
// let xy : string = "female"
// let zx : number = 5049
// interface : 
// interface MyStudentis {
//     name: string,
//     age: number,
//     isAlive: boolean
// }
// interface finalStd extends MyStudentis {
//     course: string,
//     rollNo: number
// }
// let std1 : finalStd = {
//     name: "rxhman",
//     age: 22,
//     isAlive: true,
//     course: "ece",
//     rollNo : 49
// }
// console.log(std1);
// type aliases : 
// type chachas = string | number | boolean
// let myvar2 : chachas = false
// console.log(myvar2);
// type Users = {
//     name: string,
//     age: number
// }
// let myuser : Users = {
//     name: "user1",
//     age: 69
// }
// console.log(myuser);
// type user1 = {
//     name: string
// }
// type user2 = {
//     age: number
// }
// type user3 = user1 & user2 
// let myObjis: user3 = {
//     name: "shiii",
//     age: 29
// }
// console.log(myObjis);
// type casting and assertion : 
// function addOrConcatis(a:number, b:number, c: "add" | "concat") : string | number {
//     if(c=== "add"){
//         return a+b
//     }
//     return a+b+""
// }
// let myvalue : string = addOrConcatis(1,2, "concat") as string
// console.log(myvalue);
// let myvalue : number = addOrConcatis(12,12,"add") as number
// console.log(myvalue);
// read only 
// interface stds {
//     readonly name: string,
//     readonly age: number,
//     readonly isalive: boolean
// } 
// let mystd : stds = {
//     name: "rxhamnnn",
//     age: 25,
//     isalive: true
// }
// // mystd.age = 26
// console.log(mystd);
// generics : 
// function returnGen<T, U>(a: T, b:U) {
//  console.log(a , b);
// }
// returnGen("hey", 14)
// returnGen(true, 49)
function getVall(value) {
    if (typeof value === "string") {
        return `value is ${value.toUpperCase()}`;
    }
    else {
        return `value is ${value.toFixed()}`;
    }
}
let finalValuee = getVall("yooo");
console.log(finalValuee);
