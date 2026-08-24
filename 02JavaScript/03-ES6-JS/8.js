/*
  ES6 (ECMAScript 2015) was introduced in 2015.
  It brought major improvements to JavaScript such as:
  let & const, arrow functions, classes, modules,
  promises, template literals, and destructuring.
  ES6 is considered the foundation of modern JavaScript.
*/


/*
  try...catch is used for error handling in JavaScript.
  It allows us to catch runtime errors and handle them
  without crashing the entire program.
  If an error occurs inside try, control moves to catch.
*/

// try {

//     let a = [1,2,3]
//     a.toUpperCase()
//     console.log(a);
    
     
// } catch (error) {
    
//     console.log(error.message);
    

// }

// try {

//     let jsonParse = JSON.parse("Rahman")
//     console.log(jsonParse);
    
    
// } catch (error) {
//     console.log(error.name, error.message);
    
// }


// json.parse and json.stringify 

// json.parse is used to convert the json data coming from api to js object

// json stringify is used to convert js object into json.

// JSON.parse()
// JSON → JavaScript object

// JSON.stringify()
// JavaScript object → JSON

// json to object 
// let jsonData = '{"name": "rxhman", "age":22}'
// let parseToJs = JSON.parse(jsonData)
// console.log(parseToJs, typeof(parseToJs));

// // js obj to json 
// let stringifyTojson = JSON.stringify(parseToJs)
// console.log(stringifyTojson, typeof(stringifyTojson));



// DESTRUCTURING : 


// object destructuring : 

// object k andar k keys jo names h wahi naam k variables m aap uska data store krskte e.g below : 

// let obj = {
//     name : "rxhman",
//     age : 22,
//     isAlive: true
// }

// const {name, age, isAlive} = obj
// console.log(name, age, isAlive);




// arry destructuring: isme aap array k values ku koi b var name m store krskte e.g : 

// let arr = [true, 5049, "rxhmannn"]

// const [bool, rollNo, name] = arr
// console.log(bool, rollNo, name);

// let user = {
//     username: "rahman",
//     age: 22,
//     city: "Hyderabad"
// };

// // const {username, age, city} = user
// console.log(username, age, city);


// let product = {
//     name: "Laptop",
//     price: 50000,
//     brand: "Dell"
// };

// // const {name, price} = product
// console.log(name, price);


// let student = {
//     name: "Ali",
//     course: "ECE",
//     marks: 78
// };

// const {name : studentName, course, marks:studentMarks} = student
// console.log(studentName, course, studentMarks);


// let numbers = [10, 20, 30];

// const [first, second, third] = numbers
// console.log(first,second,third);


// let fruits = ["apple", "banana", "mango", "orange"];
// const [apple, banana] = fruits
// console.log(apple,banana);


// let data = ["Rahman", 22, "ECE", true];
// const [name, age, , isAlive] = data
// console.log(name, age, isAlive);


// For of loop : this loop executes for array values and string values variables only.

// let arr2 = [1,2,3,4,5]

// for(let x of arr2){
//     console.log(x);
    
// }

// let str = "hello"
// for(let x of str) {
//     console.log(x.toUpperCase());
    
// }

// for in loop : applies only on objects 
// let newObj = {
//     "key1": true,
//     "key2": false
// }

// for(let y in newObj){
//     console.log(y, newObj[y]);
// }



// set time out and set intervals : used for functions only 

// settimeout : it is used to execute a function after certain amount of time for one.


// function sayMyName(name) {

//     setTimeout(()=>{
//         console.log(name);
        
//     }, 3000)

// }

// // sayMyName("Hello Rahman")


// function greet(name){
//  setTimeout((name)=>{
//    console.log(name);
   
//  },2000,name)
// }

// // greet("rxhman")


// function printNum(num1, num2){

//     setTimeout(()=>{
//         console.log(num1);
        
//     },2000)

//     setTimeout(()=>{
//         console.log(num2);
        
//     }, 4000)
// }

// // printNum(1,2)





// setinterval : it is used to execute function repeatedly unlike timeout.

// function sayRollNo(num){

//     setInterval(()=>{
//         console.log(num);
        
//     },2000)

// }

// // sayRollNo(5049)

// function hi(){
//     setInterval(()=>{
//         console.log("hi");
        
//     },1000)
// }

// hi()


// to control setinterval use clear interval in built method 

// function heyya() {
//     let stop = setInterval(()=>{
//         console.log("heyya");
        
//     }, 1000)

//     setTimeout(()=>{
//         clearInterval(stop)
//     },6000)
// }

// heyya()


function count(num){
    let stop = setInterval(()=>{
        console.log(num);
        num++
    },1000)

    setTimeout(()=>{
        clearInterval(stop)
    },6000)
}

// count(1)

function subCount(num){
    let stop = setInterval(()=>{
        console.log(num);
        num--;
    },1000)

    setTimeout(()=>{
        clearInterval(stop)
    },6000)
}

// subCount(5)



// DATE AND TIME IN JS : 

let nowDate = new Date();

console.log(nowDate.getFullYear());
console.log(nowDate.getMonth());
console.log(nowDate.getDate());

console.log(nowDate.getHours());
console.log(nowDate.getMinutes());
console.log(nowDate.getSeconds());


// human readable form 
console.log(nowDate.toDateString()); 
console.log(nowDate.toTimeString());
console.log(nowDate.toLocaleString());








