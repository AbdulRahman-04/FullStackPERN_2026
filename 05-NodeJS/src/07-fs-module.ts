// fs - file system module. it allows us to work on file.

import path from "node:path";
import fs from "fs"
import fsPromises from "fs/promises"
import { appendFile } from "node:fs";

// create a folders
// write into file
// read files 
// delete files 
// check files information.

const DEMO_FOLDER_PATH = path.join(process.cwd(), `file-system`, 'fs-demo')
const SYNC_FILE_PATH  = path.join(DEMO_FOLDER_PATH, `sync-node.txt`)
const PROMISE_FILE_PATH = path.join(DEMO_FOLDER_PATH, "promise-notes.txt")

type FileResult = {
    style: string,
    fileName: string,
    content : string,
    sizeInBytes: number
}

// 3 ways to work with files : 

// sync apis : fs.readfilessync 
// callback apis
// promise apis 


// where to use sync apis ? e.g  creating small startup scripts
// build scripts
// local demos 

// where not to use syncapis ? 
// http request handlers
// high traffic backend apis 
// background jobs

function ensureDemoFolderExists(): void {
    if(!fs.existsSync(DEMO_FOLDER_PATH) ){
        fs.mkdirSync(DEMO_FOLDER_PATH, {recursive: true})
    }
}

function runSyncExample() : FileResult {
    // write cotent to a file  
    // fs.writefilesync : it writes cntent into file if file and if fiel doesnt exist it creates a new file. if file exists
    // it replaces the content and utf-8 means telling node that we are writing normal text
    fs.writeFileSync(SYNC_FILE_PATH, "created using sync-fs", `utf-8`)

    // fs.append : appends content into existing file
    fs.appendFileSync(SYNC_FILE_PATH, "Appended using sync-fs", 'utf-8') 

    // fs.readfilesync : used to read content of the file 
    const content = fs.readFileSync(SYNC_FILE_PATH, 'utf-8')

    // fs.stat : gives info about file/folder
    const stats = fs.statSync(SYNC_FILE_PATH)

    return {
        style : `sync`,
        content,
         fileName: path.basename(SYNC_FILE_PATH),
         sizeInBytes: stats.size
    }
}

async function main(): Promise<void> {
    try {
        // ensure demo folder exist
        ensureDemoFolderExists()

        const syncResult = runSyncExample();
        // console.log(syncResult);

        const promiseResult = await runPromise()

        console.log(promiseResult);
        
        
    } catch (error) {
        console.log(error);
        
    }
}

main()



// promises
async function runPromise(): Promise<FileResult> {
    await fsPromises.writeFile(
        PROMISE_FILE_PATH,
        "created using promise",
        'utf-8'
    )

    await fsPromises.appendFile(
        PROMISE_FILE_PATH,
        "appended using promise",
        'utf-8'
    )
    
const content = await fsPromises.readFile(PROMISE_FILE_PATH, `utf-8`)
const stats = await fsPromises.stat(PROMISE_FILE_PATH)


return {
    style: `promises`,
    content,
    fileName: path.basename(PROMISE_FILE_PATH),
    sizeInBytes: stats.size
}
}
