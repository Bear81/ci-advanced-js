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



let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 80, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 63, maths: 87, art: 95},
    }
];

let subjects = [...students[0].subjects];
const update = (item, val) => [...item, val];
let updatedSubjects = update(students[0].subjects, "Electronics"); // [0].subjects is unnesscary as subjects is defined on line 64 (let subjects = [...students[0].subjects])
console.log(updatedSubjects)
console.log(students[0])