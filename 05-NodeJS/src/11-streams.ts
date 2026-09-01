// ============================================================
// NODE.JS STREAMS
// ============================================================

// Stream = data ko ek saath poora memory mein load karne ke bajaye
// chunks mein read/write/process karne ka mechanism.
//
// Useful for:
// - Large files
// - File uploads/downloads
// - Video/audio
// - HTTP request/response
// - Data processing


// ============================================================
// WHY STREAMS?
// ============================================================

// Without stream:
//
// Large file
//     ↓
// poori file memory/RAM mein load
//     ↓
// process
//
// With stream:
//
// Large file
//     ↓
// chunk → process
// chunk → process
// chunk → process
// ...
//
// Isliye large data ke liye streams memory efficient hote hain.


// ============================================================
// TYPES OF STREAMS
// ============================================================
//
// 1. Readable  → data read karta hai
// 2. Writable  → data write karta hai
// 3. Duplex    → read + write dono
// 4. Transform → data ko read karke transform karta hai


// ============================================================
// 1. READABLE STREAM
// ============================================================
//
// createReadStream() file ko chunks mein read karta hai.

import fs from "node:fs";

const readableStream = fs.createReadStream(
    "large-file.txt",
    {
        encoding: "utf-8"
    }
);


// "data" event
// Jab bhi ek chunk available hota hai,
// callback execute hota hai.

readableStream.on("data", (chunk) => {
    console.log("New chunk:");
    console.log(chunk);
});


// "end" event
// Jab poori file read ho jaati hai.

readableStream.on("end", () => {
    console.log("File reading completed");
});


// "error" event
// Agar stream mein error aaye.

readableStream.on("error", (error) => {
    console.log("Stream error:", error);
});


// ============================================================
// READABLE STREAM - SIMPLE UNDERSTANDING
// ============================================================
//
// large-file.txt
//      ↓
// createReadStream()
//      ↓
// chunk
//      ↓
// "data" event
//      ↓
// chunk
//      ↓
// "data" event
//      ↓
// ...
//      ↓
// "end"


// ============================================================
// 2. WRITABLE STREAM
// ============================================================
//
// createWriteStream() file mein data write karta hai.

const writableStream = fs.createWriteStream(
    "output.txt"
);

writableStream.write("Hello\n");
writableStream.write("This is Node.js\n");
writableStream.write("Learning streams\n");


// end() writing complete karta hai.

writableStream.end();


// "finish" event
// Jab saara data successfully write ho jaata hai.

writableStream.on("finish", () => {
    console.log("Writing completed");
});


// "error" event

writableStream.on("error", (error) => {
    console.log("Write error:", error);
});


// ============================================================
// 3. READABLE + WRITABLE USING pipe()
// ============================================================
//
// pipe() readable stream ko writable stream se connect karta hai.
//
// readable → chunks → writable

const readable = fs.createReadStream("large-file.txt");

const writable = fs.createWriteStream("copy.txt");

readable.pipe(writable);


// Flow:
//
// large-file.txt
//      ↓
// Readable Stream
//      ↓
// chunks
//      ↓
// pipe()
//      ↓
// Writable Stream
//      ↓
// copy.txt


// "finish" event

writable.on("finish", () => {
    console.log("File copied successfully");
});


// ============================================================
// 4. DUPLEX STREAM
// ============================================================
//
// Duplex stream = readable + writable.
//
// Matlab:
// data read bhi kar sakta hai
// data write bhi kar sakta hai.
//
// Network sockets are a common example.
//
// Basic concept:
//
//       READ
//        ↑
//        │
//     Duplex
//        │
//        ↓
//       WRITE
//
// Abhi custom Duplex stream banane ki zarurat nahi.
// Concept samajhna enough hai.


// ============================================================
// 5. TRANSFORM STREAM
// ============================================================
//
// Transform stream:
// input data ko receive karta hai,
// usko modify/transform karta hai,
// aur output deta hai.
//
// Flow:
//
// input
//   ↓
// Transform
//   ↓
// modified output
//
// Example use cases:
// - Compression
// - Encryption
// - Data formatting


// Basic example:

import { Transform } from "node:stream";

const upperCaseStream = new Transform({

    transform(chunk, encoding, callback) {

        const result = chunk
            .toString()
            .toUpperCase();

        callback(null, result);
    }

});


// Input data

upperCaseStream.write("hello");
upperCaseStream.write("node js");

upperCaseStream.on("data", (chunk) => {
    console.log(chunk.toString());
});

upperCaseStream.end();


// Output:
//
// HELLO
// NODE JS


// ============================================================
// 6. STREAM + pipe() + TRANSFORM
// ============================================================
//
// readable
//    ↓
// transform
//    ↓
// writable
//
// Example:

const readFile = fs.createReadStream("input.txt");

const writeFile = fs.createWriteStream("output-upper.txt");

const upperCase = new Transform({

    transform(chunk, encoding, callback) {

        callback(
            null,
            chunk.toString().toUpperCase()
        );

    }

});

readFile
    .pipe(upperCase)
    .pipe(writeFile);


// input.txt
//
// hello node
// learning streams
//
//             ↓
//
// output-upper.txt
//
// HELLO NODE
// LEARNING STREAMS


// ============================================================
// 7. STREAM EVENTS
// ============================================================
//
// Readable:
//
// "data"
// → new chunk available
//
// "end"
// → reading completed
//
// "error"
// → error occurred
//
// Writable:
//
// "finish"
// → writing completed
//
// "error"
// → error occurred


// ============================================================
// 8. STREAM vs readFile
// ============================================================
//
// readFile:
//
// const data = await fs.promises.readFile("large-file.txt");
//
// → entire file is loaded into memory.
//
//
// createReadStream:
//
// const stream = fs.createReadStream("large-file.txt");
//
// → file is processed in chunks.
//
//
// Small file:
// readFile() is often perfectly fine.
//
// Large file:
// stream is generally more suitable.


// ============================================================
// 9. BACKEND USE CASE
// ============================================================
//
// Example: sending a large file.
//
// Instead of:
//
// large file
//     ↓
// load entire file into RAM
//     ↓
// send response
//
// Stream:
//
// large file
//     ↓
// Readable Stream
//     ↓
// chunks
//     ↓
// HTTP response
//
// Express example:
//
// app.get("/video", (req, res) => {
//
//     const stream = fs.createReadStream("movie.mp4");
//
//     stream.pipe(res);
//
// });


// ============================================================
// IMPORTANT METHODS
// ============================================================
//
// Readable:
//
// fs.createReadStream()
//
// Writable:
//
// fs.createWriteStream()
//
// Write data:
//
// writable.write()
//
// Finish writing:
//
// writable.end()
//
// Connect streams:
//
// readable.pipe(writable)
//
// Transform:
//
// new Transform()


// ============================================================
// FINAL MENTAL MODEL
// ============================================================
//
// READABLE
// → data read
//
// WRITABLE
// → data write
//
// DUPLEX
// → read + write
//
// TRANSFORM
// → read + modify + output
//
// pipe()
// → streams ko connect karta hai
//
// chunk
// → data ka small piece
//
//
// Most important:
//
// Large data
//     ↓
// Readable Stream
//     ↓
// chunks
//     ↓
// process / transform
//     ↓
// Writable Stream