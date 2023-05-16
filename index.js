var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
// Classes in TypeScript
var Person = /** @class */ (function () {
    function Person(n, c, e, p) {
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
    Person.prototype.sayMyName = function (name) {
        console.log("Your not Heisenberg, you're ".concat(this.name));
    };
    return Person;
}());
var person2 = new Person('John', false, 'john@example.com', 2);
console.log(person2.name); // John
person2.name = 'James'; // Error - readonly property
console.log(person2.email); // Error - protected property - only accessible within Person class and its subclasses
console.log(person2.pets); // 2
console.log(person2.isCool); // Error - private property - only accessible within Person class
// Class can be extended
var Programmer = /** @class */ (function (_super) {
    __extends(Programmer, _super);
    function Programmer(name, isCool, email, pets, pL) {
        var _this = 
        //The super call must supply all parameters for base (Person) class, as the constructor is not inherited.
        _super.call(this, name, isCool, email, pets) || this;
        _this.programmingLanguages = pL;
        return _this;
    }
    return Programmer;
}(Person));
var dog = {
    name: "Max",
    tail: true
};
var bear = {
    name: "Winnie",
    honey: true,
};
var bear = {
    name: "Winnie",
    honey: true,
};
var human = {
    name: "Henrik",
    age: 40,
    speak: function (sentence) { return console.log(sentence); }
};
var Preson = /** @class */ (function () {
    function Preson(username, password) {
        this.username = username;
        this.password = password;
    }
    Preson.prototype.format = function () {
        return this.username.toLocaleLowerCase();
    };
    return Preson;
}());
var preson1;
var preson2;
var people = [];
preson1 = new Preson("GINA", "password123");
preson2 = new Preson("Jane", "typescript");
people.push(preson1);
people.push(preson2);
console.log(preson1.format()); // gina
/** Generics: allow to create a component can work over a variety of types rather than single one.(more reusable)
 * We can pass in any object to a Function, with properties and values the object has..
 * by using a generic <T> - where `T` is the 'Type parameter'.
**/
var addID = function (obj) {
    var id = Math.floor(Math.random() * 1000);
    return __assign(__assign({}, obj), { id: id });
};
var p1 = addID({ name: 'John', age: 40 });
var p2 = addID('Sally');
console.log(p1.id); // 271
console.log(p1.name); // John
console.log(p2.id);
console.log(p2.name); // ERROR: Property 'name' does not exist on type '"Sally" & { id: number; }'.
// To solve this above problem, tell TypeScript only objects should be accepted, by making our generic type, T, an extension of object.
var addIDs = function (object) {
    var id = Math.floor(Math.random() * 1000);
    return __assign(__assign({}, object), { id: id });
};
var pe1 = addID({ name: 'John', age: 40 });
console.log(pe1.name); // John
console.log(pe1.age); // 40
function logLength(a) {
    console.log(a.length);
    return a;
}
var hello = "Hello World";
logLength(hello); // 11
var howMany = 8;
logLength(howMany); // ERROR: numbers don't have length properties.
/*---------------*/
function logLengths(a) {
    a.forEach(function (element) {
        console.log(element.length);
    });
}
var arrLengths = [
    'This string has a length prop',
    ['This', 'arr', 'has', 'length'],
    { material: 'plastic', length: 30 },
];
logLengths(arrLengths); // 29 - 4 - 30
var reg = {
    name: 'John',
    age: 48,
    documents: ['passport', 'bank statement', 'visa'], // or can pass in any another type for documents 
};
/* Enums: allow us to define or declare a collection of related values,
*  that can be numbers or strings, as a set of related named constants.
** By default, enums are number based – they store string values as numbers. But they can also be strings.
*/
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
console.log(ResourceType.BOOK); // 0
console.log(ResourceType.AUTHOR); // 1
var Direction;
(function (Direction) {
    Direction["Up"] = "Up";
    Direction["Right"] = "Right";
    Direction["Down"] = "Down";
    Direction["Left"] = "Left";
})(Direction || (Direction = {}));
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
var getSong = function () {
    return 'song';
};
var whoSangThis = getSong();
var singles = [
    { song: 'touch of grey', artist: 'grateful dead' },
    { song: 'paint it black', artist: 'rolling stones' },
];
var single = singles.find(function (s) { return s.song === whoSangThis; });
console.log(single.artist); // if (single) {..} to check if it isn't null or undefined.
