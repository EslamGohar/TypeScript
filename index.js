"use strict";
// To compile down into JavaScript: `tsc fileName.ts`.
// To compile the typescript code automatically, whenever you make a change: `tsc fileName.ts -w`.
// To specify the name of the output file: `tsc index.ts --outfile fileName.js`.
// Not explicitly state the type as TypeScript automatically infers the type of a variable (type inference).
let sport = 'football';
let id = 5;
let personName = 'Danny';
personName.toLowerCase();
console.log(personName);
let arr = [1, 3, 5, 7];
arr.pop();
console.log(arr);
personName = 'Anna';
// A union type is a variable that can be assigned more than one type.
let age;
age = 26;
age = '26';
let options = [true, false, false];
let books = [
    { name: 'Fooled by randomness', author: 'Nassim Taleb' },
    { name: 'Sapiens', author: 'Yuval Noah Harari' },
];
let arrAny = ['hello', 1, true];
// A tuple: is an array with fixed size and known datatypes.
let person = ['Danny', 1, true];
// person[0] = 100; // Error - Value at index 0 can only be a string.
// Object in TypeScript
let vehicle;
vehicle = {
    type: 'Car',
    model: 'BMW',
    wheels: 4,
    flying: false,
};
let car = {
    type: 'BMW',
    model: 'x6',
    wheels: 4,
    flying: false
};
let bike = {
    type: 'BMX',
    model: 'g9',
    wheels: 2,
    flying: false
};
let sayStuff = {
    sayHi: function (name) {
        return `Hi ${name}!`;
    },
    sayBye: (name) => `Bye ${name}!`
};
console.log(sayStuff.sayHi('Heisenberg'));
console.log(sayStuff.sayBye('Heisenberg'));
// Regular function
function circle(diam) {
    return `The Circumference is ${Math.PI * diam}`;
}
console.log(circle(10));
// Arrow function
const circleDiameter = (diam) => `The Circumference is ${Math.PI * diam}`;
console.log(circleDiameter(10));
// "?:" optional operator with union type |. 
const add = (a, b, c) => {
    console.log(c);
    return a + b;
};
console.log(add(5, 4, 'I could pass a number, string, or nothing here!'));
// A function that returns nothing is said to return `void` – a complete lack of any value.
const logMessage = (message) => console.log(`This is the message: ${message}`);
logMessage('TypeScript is superb');
let sayHello;
sayHello = (name) => {
    console.log('Hello ' + name);
};
sayHello('Eslam');
const person1 = {
    name: 'John',
    id: 45
};
const sayHi = (person) => {
    return `Hi ${person.name}`;
};
// DOM and Type Casting.
/** TypeScript doesn't have access to the DOM like JavaScript.
** ERROR >> Object is possibly 'null'.
  TypeScript can't be sure the anchor tag exists, as it can't access the DOM
**/
const anchorLink = document.querySelector('a');
console.log(anchorLink.href);
/** TO SOLVE THIS for Accessing the DOM using TypeScript:
* Using `Non-null assertion operator (!)`:
  can tell the compiler explicitly that an expression has value other than `null` or `undefined`.
  when the compiler cannot infer the type with certainty.
**/
const link = document.querySelector('a');
console.log(link.href); // www.example.com
/** Need to select a DOM element by its `class` or `id`?
* TypeScript can't infer the type, as it could be anything.
* TO SOLVE THIS, Use ``Type Casting``.
**/
const form = document.getElementById('signup-form');
console.log(form.method);
