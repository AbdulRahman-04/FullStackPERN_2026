// path module : it helps us build and read file paths.

import path from "node:path";
import { fileURLToPath } from "node:url";


// bad practice : in file uploads mai use kra tha filepath store krne k liye like this : 
// const fp = projectRoot + "/uploads" + filename     -> this shi is too bad practice so avoid it nd use path module.


// path.join: uses the correct seperator for current os
// /users/rahman/project/fileURLToPath.txt

// c:\users\rahman\file.txt

// process.cwd() : the current directory path from where the node process is running.
const myDir = process.cwd()
// console.log(myDir);


// let us consider user uploads a file nd we need to store it inside a folder like : 
//   /uploads/users/42/pfp.photo.png

const userId = "69"
const ogName = "pfp.photo.png"


// path.join -> creates a path string 
// it'll not create upload file it just creates a filepath!!!
// it doesnt check weather the file exist or not.
// used in upload files to create a filepath and is the best way to create filepath string
const uploadFilePath = path.join(
    myDir, "uploads", "users", userId, ogName
)

console.log(uploadFilePath);


// path.basename returns final part of path string e.g: photo.png
const fileName = path.basename(uploadFilePath)
// console.log(fileName);


// path.extension : returns extension like png, jpeg, pdf etc
const fileExtent = path.extname(uploadFilePath)
// console.log(fileExtent);

// path.dirname : returns parent folder name
const parentFolder = path.dirname(uploadFilePath)
console.log(parentFolder);

