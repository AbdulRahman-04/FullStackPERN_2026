/* 

    Functions : functions are a block of code which gets executed whenever we call the function by its name.
                 there are various types of functions in js 
                 
                 -> Normal function
                 -> Function with Parameter
                 -> Function with return 
                 -> default parameter function
                 -> Arrow Functions(most imp) 
                 -> Function Expression 
                 -> Anonymous function
                 -> IIFE

*/

// normal function: 
function sayName(){
    console.log("Rxhmann");
}

// sayName()


// function with parameter:
function sum(a,b){
    console.log(a+b);
    
}

// sum(12,12)


// function with return: 
function EvenOrOdd(num){
    if(num%2===0){
        return 'even'
    } else {
        return 'odd'
    }
}

// let eveOrOdd = EvenOrOdd(12)
// // console.log(eveOrOdd);


// default parameter with function : 
function myName(x=20){
    console.log(x);
}

// myName()


// function expression 
let dcet = function(clgName, course) {
    console.log(clgName, course);
}

// dcet("dcet", "ece")


// Arrow function : modern way of writing function, commonly used in reactjs.
let myAge = (age) =>{
    console.log(age);
}

// myAge(22)

let sub = (n1, n2) =>{
    console.log(n1-n2);
    
}

// sub(25,10)



// anonymous function : 

let greet = function() {
    console.log("greet");
    
}

greet()

// iife : 
// (function(boy){
//    console.log(boy);
   
//  }("boy"))


// hositing : hoisting means, calling a function even before its written/declared. we cant do hoisting on arrow function nd fnctn expression.

isAlive(true)

function isAlive(bool){
    console.log(bool);
}

// isCourse('ece')


// hoisting fails in arrow function.
// let isCourse = (course) => {
//     console.log(course);
    
// }


// recursion : a function calling itself inside its own function is called recursion and it is an infinite loop.
function recur(){
    console.log('hi');
    recur()
}

recur()