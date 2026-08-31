// buffers : raw binary data
// binary data means - when u have ur data stored in bytes

// buffers are used : 
// reading files 
// recieving http req bodies
// working with streams 
// handling images, pdf files, videos 
// encrypt nd hashing


// string - human readable text 
// buffer - raw bytes 

// CONVERTING NORMAL TEXT INTO RAW BYTES USING BUFFER.FROM
const textbuffer = Buffer.from("Node")   // each value of text is one byte e.g : N -> 4e , o -> 6f etc
console.log(textbuffer);

// converting raw bytes into normal text
console.log(textbuffer.toString('utf-8'));


// buffer.len: shows length of normal text which is converted to raw bytes
const engBuffer = Buffer.from("Hello")
console.log(engBuffer.length);

 

// buffer.alloc: create fixed space for buffer
const fixedBuff = Buffer.alloc(5)
console.log("empty fixeed buffer", fixedBuff);


//buffer.write : write text into empty buffer

fixedBuff.write("API")
console.log("fixed buff after write : " , fixedBuff);
console.log("fixed buff as text :",fixedBuff.toString("utf-8"));


// buffer.concat: 
const chunks = [
    Buffer.from("HELLO"),
    Buffer.from("NODE"),
    Buffer.from("JS")
]

const combineBuffer = Buffer.concat(chunks)

console.log(combineBuffer, combineBuffer.toString('utf-8'));
