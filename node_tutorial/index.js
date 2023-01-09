// Callback

const { result } = require("lodash");
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
function Clown() {
    return new Promise(resolve => {
        setTimeout(()=> 
            {resolve("Clown")
            },2000)
        }
    )
}

async function msg(){
    const mssg = await Clown()
    console.log("Message:", mssg)
    getResult()
}

msg()

function getResult(){
    console.log("Execute After")
}
