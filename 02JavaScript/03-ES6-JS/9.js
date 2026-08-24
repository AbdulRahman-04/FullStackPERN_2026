// synchronous js means executing code line by line and main thread is blocked while one line of code is getting executed or processed.

// function normal() {
//     console.log("i");
//     console.log("l");
//     console.log("y");
// }

// // normal()

// function checkInventory(Callback) {
//     setTimeout(()=>{
//         console.log("checking inventory");
//         Callback()
//     },1000)
// }

// function createOrder(Callback) {
//     setTimeout(()=>{
//         console.log("creating order...");
//         Callback()
//     },2000)

// }

// function chargePayment(Callback) {
//     setTimeout(()=>{
//         console.log("charging payment...");
//         Callback()
//     },100)

// }

// function sendInvoice(Callback){
//     setTimeout(()=>{
//         console.log("sending invoice....");
//         Callback()
//     },200)
// }

// console.log("Work is under way!!");

// // creating call back hell to execute all async functions in order
// checkInventory(()=>{
//     createOrder(()=>{
//         chargePayment(()=>{
//             sendInvoice(()=>{
//                 console.log("all done✅");

//             })
//         })
//     })
// })

// function checkInventory(Callback) {
//   setTimeout(()=>{
//     console.log("checking inventory..");
//     Callback()
//   },2000)
// }

// function createOrder(Callback) {
//   setTimeout(()=>{
//     console.log("creating order...");
//     Callback()
//   },1000)
// }

// function chargePayment(Callback) {
//   setTimeout(()=>{
//     console.log("chargin payment..");
//     Callback()
//   },2500)
// }

// function sendInvoice(Callback) {
//  setTimeout(()=>{
//      console.log("sending invoice..");
//      Callback()
//  },1500)
// }

// console.log("Work is under way..");

// // call back hell
// checkInventory(()=>{
//     createOrder(()=>{
//         chargePayment(()=>{
//             sendInvoice(()=>{
//                 console.log("all work is done✅");

//             })
//         })
//     })
// })

function placeOrder(Callback) {
  setTimeout(() => {
    console.log("..placing order..");
    const error = new Error("error placinf order");
    Callback(error);
  }, 2000);
}

function confirmRestro(Callback) {
  setTimeout(() => {
    console.log("confirm the restaurant..");
    Callback();
  }, 1500);
}

function prepareFood(Callback) {
  setTimeout(() => {
    console.log("preparing foord...");
    Callback();
  }, 2500);
}

function assignDelPartner(Callback) {
  setTimeout(() => {
    console.log("assigning partner");
    Callback();
  }, 1000);
}

function orderDeliver(Callback) {
  setTimeout(() => {
    console.log("order delivered..");
    Callback();
  }, 3000);
}

placeOrder((error) => {
  if (error) {
    console.log(error);
    return
  }
  confirmRestro(() => {
    prepareFood(() => {
      assignDelPartner(() => {
        orderDeliver(() => {
          console.log("food delivered✅");
        });
      });
    });
  });
});
