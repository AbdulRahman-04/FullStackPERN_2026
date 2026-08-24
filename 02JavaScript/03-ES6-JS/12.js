// Fetch API: used to get data from or send data to a given URL.

// The response body can contain JSON data, so we use response.json()
// to read and convert it into a JavaScript value.

// fetch() returns a Promise which represents the result of the request.
// The result will be available later.

// recieivng data
// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// sending data
// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     name: "rxhman",
//     isAlive: true,
//   }),
// })
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

fetch("https://jsonplaceholder.typicode.com/posts/5")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data.title, data.body);
  })
  .catch((error) => {
    console.log(error);
  });

// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     title: "Learning JS",
//     body: "Practicing Fetch API",
//     userId: 1,
//   }),
// })
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "Node.js",
    body: "Learning backend",
    userId: 2,
  }),
})
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data.userId, data.title);
  })
  .catch((error) => {
    console.log(error);
  });
