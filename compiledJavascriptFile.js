// To compile down into JavaScript: `tsc fileName.ts`.
// To compile the typescript code automatically, whenever you make a change: `tsc fileName.ts -w`.
// To specify the name of the output file: `tsc index.ts --outfile fileName.js`.
// Not explicitly state the type as TypeScript automatically infers the type of a variable (type inference).
var sport = 'football';
var id = 5;
var personName = 'Danny';
personName.toLowerCase();
console.log(personName);
var arr = [1, 3, 5, 7];
arr.pop();
console.log(arr);
personName = 'Anna';
// A union type is a variable that can be assigned more than one type.
var age;
age = 26;
age = '26';
var options = [true, false, false];
var books = [
    { name: 'Fooled by randomness', author: 'Nassim Taleb' },
    { name: 'Sapiens', author: 'Yuval Noah Harari' },
];
var arrAny = ['hello', 1, true];
// A tuple: is an array with fixed size and known datatypes.
var person = ['Danny', 1, true];
// person[0] = 100; // Error - Value at index 0 can only be a string.
// Object in TypeScript
var vehicle;
vehicle = {
    type: 'Car',
    model: 'BMW',
    wheels: 4,
    flying: false,
};
var car = {
    type: 'BMW',
    model: 'x6',
    wheels: 4,
    flying: false
};
var bike = {
    type: 'BMX',
    model: 'g9',
    wheels: 2,
    flying: false
};
var sayStuff = {
    sayHi: function (name) {
        return "Hi ".concat(name, "!");
    },
    sayBye: function (name) { return "Bye ".concat(name, "!"); }
};
console.log(sayStuff.sayHi('Heisenberg'));
console.log(sayStuff.sayBye('Heisenberg'));
// Regular function
function circle(diam) {
    return "The Circumference is ".concat(Math.PI * diam);
}
console.log(circle(10));
// Arrow function
var circleDiameter = function (diam) { return "The Circumference is ".concat(Math.PI * diam); };
console.log(circleDiameter(10));
// "?:" optional operator with union type |. 
var add = function (a, b, c) {
    console.log(c);
    return a + b;
};
console.log(add(5, 4, 'I could pass a number, string, or nothing here!'));
// A function that returns nothing is said to return `void` – a complete lack of any value.
var logMessage = function (message) { return console.log("This is the message: ".concat(message)); };
logMessage('TypeScript is superb');
var sayHello;
sayHello = function (name) {
    console.log('Hello ' + name);
};
sayHello('Eslam');
var person1 = {
    name: 'John',
    id: 45
};
var sayHi = function (person) {
    return "Hi ".concat(person.name);
};
// DOM and Type Casting.
/** TypeScript doesn't have access to the DOM like JavaScript.
** ERROR >> Object is possibly 'null'.
  TypeScript can't be sure the anchor tag exists, as it can't access the DOM
**/
var anchorLink = document.querySelector('a');
console.log(anchorLink.href);
/** TO SOLVE THIS for Accessing the DOM using TypeScript:
* Using `Non-null assertion operator (!)`:
  can tell the compiler explicitly that an expression has value other than `null` or `undefined`.
  when the compiler cannot infer the type with certainty.
**/
var link = document.querySelector('a');
console.log(link.href); // www.example.com
/** Need to select a DOM element by its `class` or `id`?
* TypeScript can't infer the type, as it could be anything.
* TO SOLVE THIS, Use ``Type Casting``.
**/
var form = document.getElementById('signup-form');
console.log(form.method);
