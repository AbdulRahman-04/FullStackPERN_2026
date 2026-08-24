// objects : objects in javascript are non primitive data type which can store multiple values of different data type in itself.

// creating an object
let object = {
  name: "rxhman",
  age: 22,
};

// accessing the object data
// console.log(object);
// console.log(object.name, object.age);

// update values of keys inside an object
object.name = "SAR";
// console.log(object);
object.age = 23;
// console.log(object);

// delete keys from an object
delete object.name;
// console.log(object);

// student object and crud
let student = {
  name: "rxhman",
  age: 22,
  course: "ece",
  isAlive: true,
};

// console.log(student.name, student.course);
// student.age = 23
// console.log(student);

// object methods : these methods are used to perform different type of operations on an object.

// Obj.Keys : shows all keys of an object
// console.log(Object.keys(student));

// Obj.values : shows values of all keys of an obj
// console.log(Object.values(student));

// Obj.entries : converts an object into array.
// console.log(Object.entries(student));

// Obj.fromentries: converts an array back to an object.
// let std = [["name", "abdul"], ["course", "ece"]]
// let objStd = Object.fromEntries(std)
// console.log(objStd);

// Obj.is : checks condition true or not.
// let a = 10;
// let b = 10;
// console.log(Object.is(a,b));

// Obj.seal : seals an object, which means it freeze an obj nd doesn't let user to add any new key value pair or delete any exisiting key value pair from the obj but can modify values of exisiting key value pairs.
// Object.seal(student)
// student.newCourse = "ETE"
// console.log(student);

// obj.toString():
// let obj = { name: "Rahman", age: 21 };

// console.log(obj.toString());

// obj.assign: assigns keys and values of one obj to other obj
// let obj1 = {
//     greet: "hi"
// }

// let obj2 = {
//     ask : " how u doing ?"
// }

// console.log(Object.assign(obj1, obj2));

// obj.freeze: neither add nor delete nor update happens on an object once its frozen.
// let obj3 = {
//     say: "hi"
// }

// Object.freeze(obj3)
// console.log(obj3);
// obj3.say = "hello"
// console.log(obj3);

