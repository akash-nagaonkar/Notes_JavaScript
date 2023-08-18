/* 
JSON is used to send and receive data.
JSON is a text format that is completely language independent.
Meaning JSON is used to send and receive data in many languages.
.....Not just in JavaScript
*/
const myObject = {
    name: "Dave",
    hobbies: ['eat','sleep', 'code'],
    hello: function(){
        console.log("Hello!");
    }
}
console.log(myObject);
console.log(myObject.name);
myObject.hello();
console.log(typeof myObject);

const sendJSON = JSON.stringify(myObject);
console.log(sendJSON);
console.log(typeof sendJSON);


const receiveJSON = JSON.parse(sendJSON);
console.log(receiveJSON);
console.log(typeof receiveJSON);