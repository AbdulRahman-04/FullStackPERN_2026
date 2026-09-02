// timers : are used to run code once after delay
//          or run code repeatedly after every short time.



// settimeout , setinterval , cleartimeout, clearinterval, setimmediate


// settimeout
function setTimeOutFunc(): void {
    console.log(`settimeout started`);
    setTimeout(()=>{
        console.log(`settimeouttttt`)
    }, 1500)

    console.log(`finished`);
}

// setTimeOutFunc()

function runClearTimeout(): void {
    const timerId = setTimeout(()=>{
        console.log(`this msg will not run`);
    }, 2000)

    clearTimeout(timerId)
    console.log(`cleartime out executed✅`);
    
}

// runClearTimeout()


// set interval : it'll continue executing code again nd again after period of time.
function runSetInterval():void {
    let count = 0;

    const intervalId = setInterval(()=> {
        count++
        console.log(`setinterval is running ${count}`);

        if(count === 3) {
            clearInterval(intervalId)
            console.log(`setinterval stopped❌`);
            
        }
        
    },1000)
}

runSetInterval()
