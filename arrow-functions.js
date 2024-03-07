/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function addTwoNumbers(a, b) {
    //code Bloack
    return a + b;
}
let sum = addTwoNumbers(3,5);
console.log(sum)

// Arrow Function With Parameters
const addTwoNumbersV2 = (a, b) => {
    //code Bloack
    return a + b;
}
let sumTwo = addTwoNumbersV2(4, 6);
console.log(sumTwo)

// Single Line Arrow Function With Parameters
const addTwoNumbersV3 = (a, b) => a + b;
let sumThree = addTwoNumbersV3(5,7);
console.log(sumThree);

// Implicit Returns
const saySomething = message => console.log(message)
saySomething("This is my message");

const saySomethingElse = () => console.log("This is something else")

// Returning Multiple Lines
const returnMultipleLines = () => (
    `<p>
      This is a multiline string!
    </p>`
)
console.log(returnMultipleLines());