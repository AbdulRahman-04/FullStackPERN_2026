/*
     
    Array: an array is a data structure which stores multiple values in itself but not in key value pairs
           rather store it in ordered form.

*/

// creating an array: 
// let array1 = ["hi", true, 49]
// // console.log(array1);

// // updating an array element: 
// array1[0] = "heyya"
// console.log(array1);

// deleting an array element:
// delete array1[2]
// console.log(array1);


// IMPORTANT ARRAY METHODS : 


// 1) .map() : it is an array method that takes each item of array performs actions according to the code and returns a new array.

// It does not modify the original array

// It always returns a new array

// let numbers = [1, 2, 3, 4, 5];

// let sq = numbers.map((x)=>{
//     return x**2
// })

// console.log(sq);

// let names = ["rahman", "ali", "ahmed"];

// let uppNames = names.map((x)=>{
//     return x.toUpperCase()
// })

// console.log(uppNames);



// 2) Foreach(): it also goes through every element of an array and runs some operation on it.


// It does not return anything

// It is used for doing actions, not creating new arrays

// let numbers = [10, 20, 30, 40, 50];

// let printNum = numbers.forEach((x)=>{
//     console.log(x);
    
// })

// let names = ["rahman", "ali", "ahmed"];

// let printNames = names.forEach((x)=>{
//     console.log(x);
    
// })

// filter :  is an array method that checks each element and keeps only the ones that pass a condition.
// It returns a new array with the elements that match the rule.

// Original array is not changed

// let numbers = [5, 12, 8, 20, 3, 15];

// let numGreater = numbers.filter((x)=>{
//     return x > 10
// })

// console.log(numGreater);

// let ages = [12, 18, 25, 15, 30, 16];

// let adults = ages.filter((x)=>{
//     return x >= 18
// })

// console.log(adults);


// .find() is an array method that searches for the first element that matches a condition and returns that element.

// It stops as soon as it finds a match

// It returns one value, not an array

// If nothing matches → returns undefined

// let numbers = [5, 12, 8, 20, 3, 15];

// let numGreater = numbers.find((x)=>{
//     return x >10
// })

// console.log(numGreater);

// let ages = [12, 15, 17, 21, 25, 30];
// let ageGreater = ages.find((x)=>{
//     return x>18
// })

// console.log(ageGreater);



// .some() is an array method that checks if at least one element in the array satisfies a condition.

// It returns true or false

// Stops early once it finds a match

// let numbers = [3, 7, 11, 15, 20];

// let checkSum = numbers.some((x)=>{
//     return x>18
// })

// console.log(checkSum);

// let ages = [12, 15, 16, 17, 14];

// let checkAge = ages.some((x)=>{
//     return x > 18
// })

// console.log(checkAge);



// .every() is an array method that checks whether all elements in the array satisfy a condition.

// It returns true or false

// If even one element fails → returns false

// let numbers = [2, 4, 6, 8, 10];
// let checkEven = numbers.every((x)=>{
//     return x%2==0
// })
// console.log(checkEven);


// let ages = [20, 25, 30, 18, 22];
// let checkAge = ages.every((x)=>{
//     return x>=18
// })

// console.log(checkAge);



// .includes() is an array (and string) method that checks whether a specific value exists in the array.

// It returns true or false

// let numbers = [10, 20, 30, 40, 50];

// // let checkNum = numbers.includes(30)
// // console.log(checkNum);

// let fruits = ["apple", "banana", "mango", "orange"];

// let checkFruit = fruits.includes("grapes")
// console.log(checkFruit);



// .push() adds one or more elements to the end of an array and changes the original array.

// let numbers = [10, 20, 30];

// numbers.push(40,50)
// console.log(numbers);


// let fruits = ["apple", "banana"];

// fruits.push("mango")
// console.log(fruits);


// .pop() removes the last element from an array and changes the original array.
// let numbers = [10, 20, 30, 40, 50];
// numbers.pop()
// console.log(numbers);

// let fruits = ["apple", "banana", "mango", "orange"];
// fruits.pop()
// console.log(fruits);


// .slice() cuts out a part of an array and gives it to you in a new array.

// Original array stays the same


// const numbers = [1,2,3,4,5,6,7,8,9,10]

// const getNewNums = numbers.slice(0,5)
// console.log(getNewNums);


// let fruits = ["apple", "banana", "mango", "orange", "grapes"];
// const getFruits = fruits.slice(2,4)
// console.log(getFruits);


// .sort() arranges the elements of an array in order (like ascending or alphabetical) and changes the original array.


// const getall = ["rxhman", "abd", "ismail", "suhail"]

// const sortArr = getall.sort()
// console.log(sortArr);


// // .splice() array ke beech se items nikaalta hai ya add karta hai
// // aur original array ko change karta hai.

// const arr2 = [1, 2, 3, 4];

// arr2.splice(1, 2, 99, 100);

// console.log(arr2);



// .reduce() is an array method that takes all elements of an array and combines them into one final value.

// The final value can be a number, string, object, or array

// It runs element by element

// Original array is not changed

// let numbers = [10, 20, 30, 40, 50];

// let sumAll = numbers.reduce((acc,current)=>{
//     return acc + current
// },0)

// console.log(sumAll);

// let numbers = [2, 3, 4, 5];

// let product = numbers.reduce((acc, current)=>{
//     return acc*current
// },1)

// console.log(product);

// .unshift() adds one or more elements to the beginning of an array
// It changes the original array

let numbers = [20, 30, 40];

numbers.unshift(10);

console.log(numbers); // [10, 20, 30, 40]


// .shift() removes the first element from an array
// It changes the original array

let fruits = ["apple", "banana", "mango"];

fruits.shift();

console.log(fruits); // ["banana", "mango"]
