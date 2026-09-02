// Callback = ek function ko doosre function mein argument ke taur pe pass karna.
// function greet(name: string, cb: () => void) {
//     console.log(`Hello ${name}`);
//     cb();
// }


// function done() {
//     console.log("Done");
// }

// greet("Rahman", done);

// cb: () => void
// cb mein aisa function aayega jo kuch input nahi lega aur kuch return nahi karega.


// cb :() parameters le skta: 

function processUser(name: string, cb: (name: string) => void) {
    console.log("Processing user...");
    cb(name);
}

function sayHello(name: string) {
    console.log(`Hello ${name}`);
}

function sayBye(name: string) {
    console.log(`Bye ${name}`);
}

processUser("Rahman", sayHello);
processUser("Rahman", sayBye);


// processUser ko "Rahman" diya
//         ↓
// processUser ke paas name = "Rahman"
//         ↓
// processUser ne callback ko call kiya
//         ↓
// cb(name)
//         ↓
// "callback, ye name le aur use kar"
//         ↓
// sayHello("Rahman")


// ---------------------------------------------


// Promise = future mein milne wali value.

// TS mein hum batate hain ki future mein kis type ki value milegi:

// function getName(): Promise<string> {
//     return new Promise((resolve, reject)=>{
//         resolve("Rxhmann")
//     })
// }

// getName().then((name)=>{
//     console.log(name);
    
// }).catch((error)=>{
//     console.log(error);
    
// })

// ----------------------------------------------

// async/await Promises ke saath asynchronous code likhne ka cleaner/simpler syntax hai.

// async → function ko Promise-returning function banata hai.
// await → Promise ke resolve hone tak uski value ka wait karta hai.
// async function ka return type Promise<T> hota hai.


// basic idea : 

// async function getName(): Promise<string> {
//     return "Rahman";
// }

// async function main(): Promise<void> {

//     const name = await getName();

//     console.log(name);
// }

// main();


// error handling in async await : 
async function getName(): Promise<string> {

    const success = false;

    if (!success) {
        throw new Error("Name not found");
    }

    return "Rahman";
}


async function main(): Promise<void> {

    try {

        const name = await getName();

        console.log(name);

    } catch (error) {

        console.log(error);
    }
}

main();