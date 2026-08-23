// Common operators in JavaScript: Arithmetic, Assignment, Comparison, Logical,
//                                 Bitwise, Ternary


// 1) Arithmetic operators : used for mathematic calculations such as +  , - , *, / , ** etc
let x = 24
let y = 20
console.log(x-y);
console.log(x+y);
console.log(x/y);

// 2) Assignment operators : used to assign values to variables etc =, +=, -=, /= etc
// console.log(x+=y);
// console.log(x-=y);
// console.log(x/=y);


//3) Comparison Operators: this operator is used fr comparing two values ==, ===, != , !==, > , < , >= , <= etc
// console.log(x>y);
// console.log(x!==y);
// console.log(x===y);
// console.log(x==y);
// console.log(x!=y);


// Logical Operators :  && (true if both condition true) , || (true if atleast one condition is true) , ! (gives false condition true and true condition false)

console.log(x!=y && x>y);
console.log(x===y || y<x);
console.log(!x>y);


// Bitwise operators : & , | , ~, ^, >>, <<

// ternary operator : used for single line conditions.
let age = 2
age>=18?console.log('drive'):console.log("u can't drive");



// string operator : + used in implicit conversion to concatinate other datatype valuesi nto string
let value = "54" + 54
// console.log(value, typeof(value));


