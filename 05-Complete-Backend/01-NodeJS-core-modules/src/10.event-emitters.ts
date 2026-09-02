// event emitters : suppose : 
// user registered -> send a wlcm email -> write a log -> notify some other service

import EventEmitter from "node:events"


// emittter emit oe event -> listeners listen to it and do some thing

// .on() -> register one listener
// .once() -> register one listener that runs only one time
// .emit() -> triggers an event and sends to listeners.

const appEvents = new EventEmitter()

type UserRegistered= {
    id: number,
    email: string
}

// first listener
appEvents.on("user:registered", (user: UserRegistered)=>{
    console.log(`email listener: welcome sent to user ${user.email}`);
    
})

// second listener
appEvents.on("user:registered", (user: UserRegistered)=>{
    console.log(`log listener : ${user.id}, and email ${user.email}`);
    
})


// .once
appEvents.once("app.started", ()=>{
    console.log(`once listener: app started`);
})

function registerUser():void {
 const user = {
    id: 1,
    email: "rxhman@gmail.com"
 }

 console.log('user saved');
 
 appEvents.emit("user:registered", user)

 console.log(`register user: event listener completes`);
 
 appEvents.emit("app.started")
 appEvents.emit("app.started")

}

registerUser()