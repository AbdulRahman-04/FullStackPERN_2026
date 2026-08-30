// process object : process = currently running Node.js application/process ke baare mein information aur control provide karne wala built-in object.

// process object is mainly used to access values from env variables from the env file.


import process from "node:process"

// const port : number = Number(process.env.port ?? "8000")

// console.log(port);

// const db_uri : string = process.env.db_uri ?? "postgres"

// console.log(db_uri);


// process.argv [arguement vector]  returns this type of array -> 

// [ 
//     "/path/to/node",
//     "05-NodeJS/src/01-Process-object.ts",
//     "content we provide from terminal starts from here"
// ]

// const name : string = process.argv[2]
// const myAge : string = process.argv[3]

// console.log(`name is ${name} and age is ${myAge}`);




// process.exit() : process.exit() current Node.js process ko immediately terminate/stop krdeta.


// console.log("hey");

// process.exit(1)

// console.log("hello");


// const dbUrl = process.env.db_uri

// if(!dbUrl) {
//     console.log("NO DBURI PROVIDED");
//     process.exit(1)
//     console.log("db connected");
    
// }


// process.cwd : Node process ko jis directory se start kiya gaya, woh directory kya hai.
// console.log(process.cwd());


// process.pid: Jab tu Node app run karta hai:

// node index.js

// Operating system us running Node process ko ek unique number/ID deta hai.


// console.log(process.pid);

