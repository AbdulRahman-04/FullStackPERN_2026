// os module : 

// check cpu info 
// check mem info 
// check home/temp dir

import os from "os"


// os.platform : shows what os platform we are using in development
function runOsDemo() : void {
    console.log(`platform: `, os.platform());
    console.log(`architecture`, os.arch());
    console.log(`os type`, os.type());
    console.log(`os release: `,os.release());
    console.log(`home directory: `, os.homedir());
    console.log(`temp dir: `,os.tmpdir());


    // cpu info
    const cpus = os.cpus()
    console.log(cpus.length);
    if(cpus.length > 0) {
        console.log(`first CPU model is: `, cpus[0].model, cpus[0].speed, cpus[0].times);
        
    }

    console.log(os.totalmem(), os.freemem());
    
     
    
}

runOsDemo()