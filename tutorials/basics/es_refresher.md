## ES6 Refresher - Part 01

<a name="top"></a>

Before diving into the world of React, some of the JavaScript concepts you need to know are ES6 Features <!-- ES Javascript logo-->

- [Variables](#variables)
  - [Var](#var)
- [Template Literals](#template-literals)
- [Objects](#objects)
- [This Keyword](#this-keyword)
- [Binding](#binding)
- [Arrow Functions](#arrow-functions)
- [Arrays](#arrays)
- [Object Destructuring](#object-destructuring)
- [Spread Operator](#spread-operator)
- [Module](#module)

### Variables

- In order to declare variables in JavaScript, we use `let`, `var`, and `const`, but they have some differences in terms of scope and mutability.

```js
var name = "Njox";
let name2 = "Njox";
const PI = 3.14;
```

## Var

Var is function-scoped while let and const are block-scoped. When working with var, be cautious. Take a look at the example below:

```cpp
function countNumbers() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log(i);
}

countNumbers();
// output: 0
// 1
// 2
// 3
// 4
// 5
```

Since var i has been declared var i = 0, it can only be accessible through the function scope. When you try to access the variable outside of the function, you will get an error! See the example below:

```js
countNumbers();
console.log(i);
```

```js
script.js:9 Uncaught ReferenceError: i is not defined at script.js:9:13
```

As the error states above, that ReferenceError occurs because var i is not defined outside of the function due to JavaScript function scope rule.

## Let

- The let keyword is one of the ECMAScript ES6 features introduced in 2015. let is block-scoped compared to var. Take a look at the example below! Variables declared with let have block scope, meaning they are only accessible within the block (the code inside {}) in which they are defined.

```js
function exampleFunction() {
  let x = 10;
  if (true) {
    let y = 20;
    console.log(x); // 10
    console.log(y); // 20
  }
  console.log(x); // 10
  console.log(y); // Error: y is not defined
}

exampleFunction();
console.log(x); // Error: x is not defined
console.log(y); // Error: y is not defined
```

From the above example, we have a function called exampleFunction in which we have declared a variable x with value 20. Inside the if condition, we have another variable y with value 20. When we try to log out the value of x, we get 10, and the value of y we get 20 since we have talked about the scope of variables declared with let. A variable declared inside the block {} can be accessed within that block. That's why x is printed, but when you try to print out y outside of the if statement, it will result in an error since it is outside of that scope.

**NOTE** let is useful when you need to reassign a variable, as it allows changing the value later in the same scope.

### Const

- The const keyword is one of the major features introduced by ECMAScript 2015 ES6 for declaring variables in JavaScript.

- We use const to declare a variable that cannot change, or we can say a readonly variable. In mathematical view, we have different mathematical constants used as well as Physics Constants. So, those constants are constants, meaning they cannot change. In case you have a project in JavaScript in which you are using those constants, it is recommended to use the const keyword for declaring variables in JavaScript. Take a look at the example below:

```js
// Mathematical Constants
const pi = 3.14159;
const e = 2.71828;
const goldenRatio = 1.61803;

// Physics Constants
const speedOfLight = 299792458; // meters per second
const gravitationalConstant = 6.6743e-11; // m³ kg⁻¹ s⁻²
const plancksConstant = 6.62607015e-34; // Joule seconds
const boltzmannConstant = 1.380649e-23; // Joules per Kelvin
const avogadrosNumber = 6.02214076e23; // particles per mole
const electricConstant = 8.8541878128e-12; // Farads per meter
```

So what happens in case you want to change the value of a const in JavaScript.

```js
const pi = 3.14159;
console.log(pi);
(pi = 4), 4444;
console.log(pi);
```

```js
script.js:3 Uncaught TypeError: Assignment to constant variable.
    at script.js:3:4
```

**NOTE**

- Prefer to use let when you want to reassign a variable,const when your variable is constant.

## Template Literals

- I In ES6, template literals were introduced in JavaScript. Template strings provide a readable way to create strings. In JavaScript, template literals are enclosed by backticks `.

```js
// template strings
const framework = "React";
const show = `Hello, ${framework} is awesome!`;
console.log(show);
```

Template strings are sorrounded by backticks instead of single quotes or double quotes.You can embed expressions inside `${}` within the template literal.These expressions are evaluated and the result is inserted into the string.

### Multiline Strings

```js
const multilineString = `
This is a
multiline
string.
`;

console.log(multilineString);
```

Traditional strings would require concatenation with `+` or using `\n` for newlines,but template string allow for easy creation of multilne strings.

Benefits:

- Readability: Template literals make code more readable,especially when creating complex strings with variables and expressions
- Expression Evaluation:Expressions inside `${}` are evaluated,allowing for dynamic content in strings.

### Objects

### This Keyword

### Binding

### Arrow Functions

### Arrays

### Object Destructuring

- Object destructuring in JavaScript is a powerful feature introduced in ES6 that allows to extract properties from objects and bind them to variables,before Object destructuring we used the normal way,take a look and example below:

```js
const student = {
  name: "NjoxPy",
  age: 25,
  country: "Tanzania",
};
```

So In order to get properties of that object then we need to extract properties from objects and bind them to a variable.

```js
const name = student.name;
const age = student.age;
const country = student.country;
```

The problem with the above code is that we repated `student.` multiple times but with Object Destructuring we can make our code clean, concise and readable:

To use that we start with const keyword followed with destructuring syntax which is curly braces {} and inside we add name of the target properties.

```js
// extracting properties into variables
const { name, age, country } = student;
```

In the example above we have an object called `student` with properties like `name, age, country`,with object destructuring we create variables with the same names as objects properties and assign them the corresponding values from the object.

## Spread Operator

## Module

- Modules allows developers to organize code into resusable and maintainable components.To use a certain module you have to first export(expose outside) then import into a file to use.

- Exporting from a Module:
  You can export variables, functions, classes from a module using the `export` keyword.

```js
// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
```

- Importing into a Module:
  You can import exported entities into another module using the import keyword.

```js
// app.js
import { add, subtract } from "./math.js";

console.log(add(5, 3)); // Output: 8
console.log(subtract(5, 3)); // Output: 2
```

- Default Exports:

You can also have a default export in a module. You can only have one `default export` per module.

```js
// logger.js
export default function log(message) {
  console.log(message);
}
```

In the importing module, you can choose any name for the default import:

```js
// app.js
import customLog from "./logger.js";

customLog("Hello, world!"); // Output: Hello, world!
```

- Combining Named and Default Exports:

```js
// utils.js
export function square(x) {
  return x * x;
}

export default function cube(x) {
  return x * x * x;
}
```

```js
// app.js
import customCube, { square } from "./utils.js";

console.log(square(5)); // Output: 25
console.log(customCube(3)); // Output: 27
```

[⬆️ Return to Top](#top)
