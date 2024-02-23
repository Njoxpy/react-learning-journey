
## ES6

- [Let Var Const](#let-var-const)
- [Objects](#objects)
- [This](#this)
- [Binding](#binding-this)
- [Arrow Functions](#arrow-functions)

## Let Var Const

Logical Questions

- Explain the difference between var, let, and const in JavaScript.
- Why is it considered better practice to use const or let over var in modern JavaScript?
- How does variable hoisting differ between var and let/const?
- Can you reassign a value to a variable declared with const? Why or why not?
- When should you choose let over const?

Practical Questions

- Write a code snippet demonstrating the use of let in a for loop.
- Create a function that uses const to declare a constant variable inside the function body.
- Show how you would use var to declare a global variable and then modify its value inside a function.
- Use let to declare a variable and then update its value in a nested block scope.
- Write a short program that showcases the block scoping of let and const within an if statement.

## Objects

Logical Questions:

- What is an object literal in JavaScript?
- How do you access properties of an object?
- Explain the difference between dot notation and bracket notation when accessing object properties.
- Can objects in JavaScript have methods? If so, how are they defined?
- How do you create a shallow copy of an object?

Practical Questions:

- Create an object representing a car with properties like make, model, and year.
- Add a method start() to the car object that logs "The car is starting."
- Access and log the model property of the car object using dot notation.
- Use bracket notation to dynamically access a property of the car object based on user input.
- Write a function that takes an object and returns a new object with all the original properties, plus a new property color.

## This

Logical Questions:

- How does this behave in a regular function versus an arrow function?
- Explain the concept of implicit binding of this.
- What does this refer to in the global scope?
- How can you ensure the correct value of this inside a method of an object?
- What happens when you use this inside a function defined within a method?

Practical Questions:

- Create an object with a method that uses this to access one of its properties.
- Write a function that uses .call() or .apply() to explicitly set the value of this inside the function.
- Create a simple class with a method that uses this, and then create an instance and call that method.
- Use bind() to create a new function with a specific this value.
- Write a function that uses this within a setTimeout() callback.

## Binding this

Logical Questions:

- Why do we need to bind this in React class components?
- Explain the difference between binding this in the constructor versus using arrow functions.
- What does it mean to bind this in JavaScript?
- How can you check if a function has this bound to it?
- Can you use .bind() multiple times on the same function?

Practical Questions:

- Create a React class component with an event handler that updates state, and bind this in the constructor.
- Rewrite the previous example using an arrow function for the event handler instead of binding in the constructor.
- Demonstrate how to bind this in a callback function passed as a prop.
- Write a function outside of a class component and bind this to it when used inside the component.
- Explain when it might be appropriate to bind this in the constructor versus binding in the render method.

## Arrow Functions

Logical Questions:

- What are the advantages of using arrow functions over regular functions?
- How does this behave differently in arrow functions compared to regular functions?
- Can arrow functions be used as constructors?
- Explain the syntax of arrow functions.
- When should you not use arrow functions?

Practical Questions:

- Write a simple arrow function that takes two parameters and returns their sum.
- Create an array of numbers and use .map() with an arrow function to double each number.
- Rewrite a regular function as an arrow function and explain any differences.
- Use an arrow function as a callback for setTimeout() to log a message after 1 second.
- Write a higher-order function that takes a callback function as an argument and use it with an arrow function.
