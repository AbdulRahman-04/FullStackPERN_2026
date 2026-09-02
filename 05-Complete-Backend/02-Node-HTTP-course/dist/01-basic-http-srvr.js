"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const PORT = 3000;
// to create htpserver : use method http.createserver()
// http.createserver takes callback func which has two params called req and res
// req has request object, and res is the response of server
// req -> request object 
// req.method : GET, POST, PUT , PATCH, DELETE
// req.url : 
// req.headers : contains metadata of the data coming to server sent by client(browser, mobile app etc)
// req.body : actual data sent by client to server
// res : this object is sent by server back to client. it send following stuff : 
// status code : 200, 404, 500 etc, response headers and respnse body.
const server = http_1.default.createServer((req, res) => {
    const method = req.method;
    // get -> reading data 
    // post : creating data e.g signup/signin form
    // put : replace data
    // patch : update partial data
    // delete : delete data
    // req.url means : 
    const url = req.url;
    // req.headers : metadata of req sent by client to server: "content-type" "application/json" , jwt auth token, normal text etc
    const userAgent = req.headers["user-agent"];
    // status code shows status of the req eg : 200 - successful, 201: successfully created, 500: internal server err
    res.statusCode = 200;
    // this res.setHeaders of req.header means setting what kinda data server is sending to client
    res.setHeader('Content-Type', 'application/json');
    // res.end : finishes the response
    res.end(`Basic http node server: ${method}, ${url}, ${userAgent}`);
});
// listen server to a port 
server.listen(PORT, () => {
    console.log(`Node Server Started At Port ${PORT}`);
});
