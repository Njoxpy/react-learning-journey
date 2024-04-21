# Redux Installation

- [Prerequisites](#prerequisites)

## Prerequisites
# Programming Paradigm

- There are many programming paradigms outthrere but here are the same of the programming paradigms,the style in which programming languages are structured.

- Functional Programming:

Refers to the programming paradigm paradigm based on the functions, into this category we mostly use functions for creating programs into our application.Examples of programming languages based on functional are `clojure`, `haskel` and `javascript` although javascript is not almost based into but some of the functionality are based into it.

- Procedural programming
- Object Oriented Programming.

Programming paradigms being centered upon objects where by objects can have methods and attributes.Example: `Python`, `PHP` And `C++`.

- Event Driven Prgramming.

## Redux and Functional Programming

- Applications built using Redux codes are written using functional programming on JavaScript, so understanding some of the contents about functional programming as a javascript developer is important.So into this section we will look into functions which are in JavaScript we will look functions in general, high order functions and so on.

## Function

- In Javascript we can create pure functions using the function keyword and we can assign a function as a variable, we can pass as an argument also we can return from other function,Do this functions are regarded as `first class citizens` it's like the normal way we are using variables into our programs we can pass as an arguments and many many!, so lets look how we can assign value to the variable.

```js
// assigning a function to a variable
function greetUser() {
  return "Hello!";
}

let fn = greetUser;
```

- Pass an argument

## High Order Functions

- High order functions are functions that takes functions as an argument or returns it.There are several functions which are high order functions but some of them map function, filtering, callback function, event handling functions, setInterval ,promises and async function in JavaScript.

- Let's look some of the implemnation of them how they work and where they can be used, for various purpose.

```js
// map function in
let numbers = [12, 14, 24];

let number = numbers.map((numb) => {
  let result = numb * numb;
  console.log(result);
});

```

- Async functions are used in Javascript for performing asynchronous operations example on fetching data from an API.

## Function Composition

## Composing and Piping

## Currying

## Pure Functions

## 