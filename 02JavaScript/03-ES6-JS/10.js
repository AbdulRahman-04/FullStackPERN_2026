// Promises:

// A Promise is used for tasks that take some time to finish.
// It tells us whether the task is still running, completed, or failed.

// A Promise has 3 states:
// 1) Pending   → operation is still running
// 2) Fulfilled → operation completed successfully
// 3) Rejected  → operation failed

// A Promise can be handled using:
// .then()  → runs when the Promise is fulfilled
// .catch() → runs when the Promise is rejected
// .finally() → runs whether the Promise succeeds or fails

// Promises are useful for handling asynchronous operations
// and help avoid deeply nested callback code (callback hell).

// function confirmRestro() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       console.log("confirm restro");
//       res();
//     }, 2000);
//   });
// }

// function prepareFood() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       console.log("prepare food");
//       res();
//     }, 1000);
//   });
// }

// function deliverFood() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       console.log("deliver food");
//       res();
//     }, 1500);
//   });
// }

// console.log("work is under way...");

// confirmRestro()
//   .then(prepareFood)
//   .then(deliverFood)
//   .then(() => {
//     console.log("all work done✅");
//   });

function checkInventory() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("checking inv...");
      res();
    }, 2000);
  });
}

function chargePayment() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("charging payment...");
      rej(new Error("err payment failed"));
    }, 1000);
  });
}

checkInventory()
  .catch((err) => {
    console.log("err: ", err);
    throw err
  })
  .then(chargePayment)
  .catch((err) => {
    console.log("err:", err);
    throw err
  })
  .then(() => {
    console.log("order successful!✅");
  })
