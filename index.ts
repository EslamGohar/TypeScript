// To compile down into JavaScript: `tsc fileName.ts`.
// To compile the typescript code automatically, whenever you make a change: `tsc fileName.ts -w`.
// To specify the name of the output file: `tsc index.ts --outfile fileName.js`.
// Not explicitly state the type as TypeScript automatically infers the type of a variable (type inference).
let sport: string = 'football';

let id: number = 5;

let personName: string = 'Danny';
personName.toLowerCase();
console.log(personName);

let arr: number[]= [1, 3, 5, 7];
arr.pop();
console.log(arr);

personName = 'Anna';

// A union type is a variable that can be assigned more than one type.
let age: string | number;
age = 26;
age = '26'; 

let options: boolean[] = [true, false, false];
let books: object[] = [
	{ name: 'Fooled by randomness', author: 'Nassim Taleb' },
	{ name: 'Sapiens', author: 'Yuval Noah Harari' },
];
let arrAny: any[] = ['hello', 1, true];

// A tuple: is an array with fixed size and known datatypes.
let person: [string, number, boolean] = ['Danny', 1, true];
// person[0] = 100; // Error - Value at index 0 can only be a string.

// Object in TypeScript
let vehicle: {
	type: string,
	model: string,
	wheels: number,
	flying: boolean
}

vehicle = {
	type: 'Car',
	model: 'BMW',
	wheels: 4,
	flying: false,
};
// vehicle.flying = 'NO'; // ERROR - should be a boolean.
// vehicle.wheels = '2'; // ERROR - should be a number.

// vehicle = {
// 	model: 'BMW',
// 	wheels: 4,
// };
// ERROR - missing the {type, flying} properties.


// When defining the signature of an object, you will usually use an Interface.
// If need to check multiple objects have the same specific properties and value types.
interface Vehicle { 
	type: string;
	model: string;
	wheels: number;
	flying: boolean;
}

let car: Vehicle = {
	type: 'BMW',
	model: 'x6',
	wheels: 4,
	flying: false
}

let bike: Vehicle = {
	type: 'BMX',
	model: 'g9',
	wheels: 2,
	flying: false
}

// Functions in TypeScript
interface Speech { 
	sayHi(name: string): string;
	sayBye: (name: string) => string;
}

let sayStuff: Speech = {
	sayHi: function (name: string) {
		return `Hi ${name}!`;
	},
	
	sayBye: (name: string) => `Bye ${name}!`
};
console.log(sayStuff.sayHi('Heisenberg'));
console.log(sayStuff.sayBye('Heisenberg'));

// Regular function
function circle(diam: number): string { 
	return `The Circumference is ${Math.PI * diam}`;
}
console.log(circle(10));

// Arrow function
const circleDiameter = (diam: number): string => `The Circumference is ${Math.PI * diam}`;
console.log(circleDiameter(10));

// "?:" optional operator with union type |. 
const add = (a: number, b: number, c?: number | string) => {
	console.log(c);
	
	return a + b;
}
console.log(add(5, 4, 'I could pass a number, string, or nothing here!'));

// A function that returns nothing is said to return `void` – a complete lack of any value.
const logMessage = (message: string): void => console.log(`This is the message: ${message}`)
logMessage('TypeScript is superb');

let sayHello: (name: string) => void;
sayHello = (name) => {
	console.log('Hello ' + name);
}
sayHello('Eslam');


// Type Aliases to reduce the duplication (DRY).
type stringOrNumber = string | number;

type PersonObject = {
	name: string;
	id: stringOrNumber;
};

const person1: PersonObject = {
	name: 'John',
	id: 45
};

const sayHi = (person: PersonObject) => { 
	return `Hi ${person.name}`
}
 
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
const link = document.querySelector('a')!;
console.log(link.href); // www.example.com

/** Need to select a DOM element by its `class` or `id`?
* TypeScript can't infer the type, as it could be anything.
* TO SOLVE THIS, Use ``Type Casting``.
**/
const form = document.getElementById('signup-form') as HTMLFormElement;
console.log(form.method);

// Classes in TypeScript
class Person { 
	readonly name: string; // This property is immutable - it can only be read
	private isCool: boolean; // Can only access or modify from methods within this class
	protected email: string; // Can access or modify from this class and subclasses
	public pets: number; // Can access or modify from anywhere - including outside the class
	
	constructor(n: string, c: boolean, e: string, p: number) { 
		this.name = n;
		this.isCool = c;
		this.email = e;
		this.pets = p;
	}
	
	// Can destructure the constructor to make the code more concise.
	// constructor(
	// 	readonly name: string;
	// 	private isCool: boolean;
	// 	protected email: string;
	// 	public pets: number;
	// ) {}
	
	sayMyName(name: string) { 
		console.log(`Your not Heisenberg, you're ${this.name}`);
	}
}

const person2 = new Person('John', false, 'john@example.com', 2);
console.log(person2.name); // John
person2.name = 'James'; // Error - readonly property
console.log(person2.email); // Error - protected property - only accessible within Person class and its subclasses
console.log(person2.pets); // 2
console.log(person2.isCool); // Error - private property - only accessible within Person class

// Class can be extended
class Programmer extends Person { 
	programmingLanguages: string[];
	
	constructor(
		name: string,
		isCool: boolean,
		email: string,
		pets: number,
		pL: string[]
	) {
		//The super call must supply all parameters for base (Person) class, as the constructor is not inherited.
		super(name, isCool, email, pets);
		this.programmingLanguages = pL;
	}
}


/** Interfaces vs. Type Aliases
 * Interface can be extendable, can reopen to add new properties.
 * Type cannot be reopened, and cannot be changed after being created. 
**/

interface Animal { 
	name: string;
}

interface Animal { 
	tail: boolean;
}

const dog: Animal = {
	name: "Max",
	tail: true
}

// Extending an interface
interface Animal {
  name: string
}

interface Bear extends Animal {
  honey: boolean
}

const bear: Bear = {
  name: "Winnie",
  honey: true,
}

// Type aliases
type Animal = {
	name: string
}

type Animal = {
	tail: boolean
}
// ERROR: Duplicate identifier 'Animal'.

//Extending a type via intersections '&'
type Animal = {
  name: string
}

type Bear = Animal & {
  honey: boolean
}

const bear: Bear = {
  name: "Winnie",
  honey: true,
}

// interface can define function signatures
interface Human {
	name: string,
	age: number,
	speak(sentence: string): void
}

const human: Human = {
	name: "Henrik",
	age: 40,
	speak: sentence => console.log(sentence) 
}

/** NOTE:
 * Why we would use an interface over a class in the above example?
	Using an interface is that it is only used by TypeScript, not JavaScript. This means that it won't get compiled and add bloat to your JavaScript. Classes are features of JavaScript, so it would get compiled.
	Interface is a structure used solely for type-checking.
*/

interface HasFormatter {
	format(): string;
}

class Preson implements HasFormatter { 
	constructor(public username: string, protected password: string) { }
	
	format() {
		return this.username.toLocaleLowerCase();
	}
}

let preson1: HasFormatter;
let preson2: HasFormatter;
let people: HasFormatter[] = [];

preson1 = new Preson("GINA", "password123");
preson2 = new Preson("Jane", "typescript");

people.push(preson1);
people.push(preson2);
console.log(preson1.format()); // gina


/** Generics: allow to create a component can work over a variety of types rather than single one.(more reusable)
 * We can pass in any object to a Function, with properties and values the object has.. 
 * by using a generic <T> - where `T` is the 'Type parameter'.
**/
const addID = <T>(obj: T) => {
	let id = Math.floor(Math.random() * 1000);
	
	return {...obj, id};
}
let p1 = addID({ name: 'John', age: 40 });
let p2 = addID('Sally');

console.log(p1.id); // 271
console.log(p1.name); // John

console.log(p2.id);
console.log(p2.name); // ERROR: Property 'name' does not exist on type '"Sally" & { id: number; }'.

// To solve this above problem, tell TypeScript only objects should be accepted, by making our generic type, T, an extension of object.

const addIDs = <T extends object>(object: T) => { 
	let id = Math.floor(Math.random() * 1000);
	return {...object, id};
}

let pe1 = addID<{ name: string; age: number }>({ name: 'John', age: 40 });
console.log(pe1.name) // John
console.log(pe1.age)	 // 40


// a generic that extends an interface

interface hasLength { 
	length: number;
}

function logLength<T extends hasLength>(a: T) {
	console.log(a.length)
	return a;
}

let hello = "Hello World";
logLength(hello) // 11

let howMany = 8;
logLength(howMany) // ERROR: numbers don't have length properties.
/*---------------*/

function logLengths<T extends hasLength>(a: T[]) { 
	a.forEach((element) => { 
		console.log(element.length);
	})
}

let arrLengths = [
	'This string has a length prop',
  	['This', 'arr', 'has', 'length'],
  	{ material: 'plastic', length: 30 },
]

logLengths(arrLengths);	// 29 - 4 - 30


/* NOTE:
* When we don't know what type a certain value in an object, we can use a generic <T> to pass in the type.
*/
// The type, T, will be passed in
interface Register<T> {
  name: string;
  age: number;
  documents: T;
}

const reg: Register<string[]> = {
  name: 'John',
  age: 48,
  documents: ['passport', 'bank statement', 'visa'], // or can pass in any another type for documents 
};


/* Enums: allow us to define or declare a collection of related values,
*  that can be numbers or strings, as a set of related named constants.
** By default, enums are number based – they store string values as numbers. But they can also be strings.
*/
enum ResourceType {
  BOOK,
  AUTHOR,
  FILM,
  DIRECTOR,
  PERSON,
}

console.log(ResourceType.BOOK); // 0
console.log(ResourceType.AUTHOR); // 1

enum Direction {
  Up = 'Up',
  Right = 'Right',
  Down = 'Down',
  Left = 'Left',
}

console.log(Direction.Right); // Right
console.log(Direction.Down); // Down


/*** TypeScript Strict Mode:
 * a couple of the things that strict mode does: 
 	- no implicit any (noImplicitAny), 
 	- strict null checks (strictNullCheck),
  
 ** With the noImplicitAny option = true, 
 	TypeScript will instantly flag an error if we don't explicitly state the type of variable.
 
 * When the strictNullChecks option = false,
	TypeScript ignores null and undefined. This can lead to unexpected errors at runtime.

 * With strictNullChecks set to true, 
	null and undefined have their own types, you'll get a type error if you assign them to a variable.
***/

// ERROR: Parameter 'a' implicitly has an 'any' type.
function logName(a) {
  console.log(a.name);
}

// ERROR: Object is possibly 'undefined'.
const getSong = () => {
  return 'song';
};

let whoSangThis: string = getSong();

const singles = [
  { song: 'touch of grey', artist: 'grateful dead' },
  { song: 'paint it black', artist: 'rolling stones' },
];

const single = singles.find((s) => s.song === whoSangThis);

console.log(single.artist); // if (single) {..} to check if it isn't null or undefined.
