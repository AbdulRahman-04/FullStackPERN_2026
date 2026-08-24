// Async/Await:
// async/await is a cleaner way to work with Promises.
// It makes asynchronous code easier to read and write.

// async:
// Used before a function to make it an async function.
// An async function always returns a Promise.

// await:
// Used inside an async function to wait for a Promise to finish.
// It waits for the Promise result before moving to the next line.

// try/catch:
// try contains the code that may fail.
// catch handles the error if the Promise is rejected.


// in promises 
// function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Data received");
//         }, 1000);
//     });
// }


// // in async aawait 
// async function main() {
//     const data = await getData();

//     console.log(data);
// }

// main();



// error handling 
function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("Failed to get data"));
        }, 1000);
    });
}

async function main() {
    try {
        const data = await getData();

        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

main();