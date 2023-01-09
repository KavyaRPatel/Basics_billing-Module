// Callback

const { result, chunk } = require("lodash");
const { resolve } = require("path")

// function getMessage(msg,callback) {
//     setTimeout(() => {
//         console.log(msg)
//         callback()
//     }, 1000)

// }
// function displayMessage() {
//     console.log("Display Message")
// }

// getMessage("Get Message", displayMessage)


// // Promises
// let promise = new Promise(function (resolve, reject) {
//     setTimeout(() => resolve("Run Before"), 1000)
// });

// promise.then
//     (result => {
//         console.log(result)
//         GetAfter()
//     },
//         error => console.log(error)
//     )



// function GetAfter() {
//     console.log("After");
// }

//async await
// function Clown() {
//     return new Promise(resolve => {
//         setTimeout(()=> 
//             {resolve("Clown")
//             },2000)
//         }
//     )
// }

// async function msg(){
//     const mssg = await Clown()
//     console.log("Message:", mssg)
//     getResult()
// }

// msg()

// function getResult(){
//     console.log("Execute After")
// }

// http server 
// const http = require("http")

// const hostname = '127.0.0.1'
// const port = 3000;

// const server = http.createServer((req, res) => {
//     res.writeHead = (200, { 'Content-Type': 'text/plain' })  //1 statement instead of 2
//     // res.statusCode=200;
//     // res.setHeader=('Content-Type','text/plain');
//     res.end("Welcome to HTTP server")
// })

// server.listen(port, hostname, () => {
//     console.log(`Server Running on http://${hostname}:${port}/`);
// })

//making http request
// const http = require("http")

// http.get(`http://api.open-notify.org/astros.json`, resp => {
//     let data = '';
//     resp.on(`data`, chunk => {
//         data += chunk
//     });


//     resp.on(`end`, () => {
//         let jsondata = JSON.parse(data)
//         console.log(jsondata)
//     });
// })

//Making http post request

const http = require("https");
const { default: axios } = require("axios");

const data = JSON.stringify({
    name: "John Roy",
    Job: "Author"
});

// const options = {
//     hostname: 'reqres.in',
//     path: '/api/users',
//     method: 'POST',
//     header: {
//         'Content-Type': 'application/json'
//     }
// }

// const req = http.request(options,(res)=>{
//     let body='';
//     console.log("Status Code:",res.statusCode)

//     res.on(`data`,(chunk)=>{
//         body+=chunk
//     })

//     res.on(`end`, ()=>{
//         console.log("Body", JSON.parse(body));
//     })
// })
// req.write(data)
// req.end();

//Using Axios
axios.post('htpps://reqres.in/api/users', data).then(res => {
    console.log(`StatusCode:${res.status}`)
    console.log(`Body: ${JSON.stringify(res.data)}`)
}).catch(err => console.log(err))