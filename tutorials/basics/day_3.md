# Day 3

- [Click Events](#click-events)
- [Using State(useState Hook)](#using-stateusestate-hook)
- [React dev tools](#react-dev-tools)
- [Best Practices](#best-practices)
- [Exercise](#exercise)

## Click Events

- When a user is using website for particular purpose there are variouse of activties which are going on inside that website and those we can call events,We can have events of different types such as click event, submission event, keyboard event, scroll event and due to that we can react in a particular way when that event has happened, in React click events they work simple and they do simplify our taks into our application.

- One of the event we will look today is the click event and with this happens when a user click into something, it can be a button or a particular HTML functionality but it works fine and perfect when we use into the button element into our code also for a link it works perfect fine.By reacting to that click event you can run some code, so I will create HTML code for but inside the `Home.js` component.

```html
<button className="btn btn-primary">Click Here</button>
```

- After a user has clicked into the button then we want to display information which is saying am learning react click events.We create a function(I suppose if we use arrow function are clean) after creating a function then inside we can log to the console `react clickEvents are awesome` or you can customize based on your own choice but for me I will choose that, but there are still plenty of option you can use alert functionality which alert a certain things it may be the same as `react clickEvents are awesome`.

```js
const handleClick = () => {
  console.log("react clickEvents are awesome");
};
```

- We have created that function so what follows next since user when clicks a button it doesn't happen anything so what to do is to emebed that function into it, but before that we use the `onClick` functionality into that.onclick is the key with the value which should be emebeded into the curlbraces which is the dynamic value function name.

```jsx
const Home = () => {
  // working with click event
  const handleClick = () => {
    console.log("react clickEvents are awesome");
  };

  return (
    <div className="row">
      <div className="container">
        <button className="btn btn-primary" onClick={handleClick}>
          Click Here
        </button>
      </div>
    </div>
  );
};

export default Home;
```

- So the whole code is like that but, we first create a html button element and we creatre a function which will react when a user click into a button but we should use the `onclick` functionality which requires a dynamic value which is the name of the function but be careful don't include the brackets for function because will invoke the function.

- What if our function requires argument into it,if we use use brackets then pass argument then we are invoking a function so what we will do is create a function in a normal way for working with click event and that function may be is taking an argument `react`.Example:

```jsx
const handleClickAgain = (Framework) => {
  console.log(`${Framework} is awesome!`);
};
```

- After creating a function like that inside the onClick attribute we pass the name of the function and if we do that it will invoke a function so what to do? We create anonymous function inside onClick then we pass the name of the function with it's argument.

```jsx
<button
  className="btn btn-primary m-2"
  onClick={() => handleClickAgan("React")}
>
  Click Again
</button>
```

## Using State(useState Hook)

## State

- In React, we have a special function called React Hook from the React library. When we need something that might change at some point in React, we use the `useState` hook. It is like having a special type of function that performs a certain job.

- You can have a button such that when a user clicks on it, it should perform a certain task (change). According to React, in that situation, we use the `useState` hook. See the example below.

```js
import { useState } from "react";

const Button = () => {
  let [name, setName] = useState("Njox");
  let [age, setAge] = useState(23);

  let handleClick = () => {
    setName("Elvis");
    setAge(24);
  };

  return (
    <div>
      <h1 className="fw-bold">
        My name is {name}, I am {age} years old
      </h1>
      <button className="btn btn-primary" onClick={handleClick}>
        Click me
      </button>
    </div>
  );
};

export default Button;
```

- In the above code, we first have to import useState from the React library and destructure the useState function: import { useState } from 'react'. Then useState takes an initial parameter which can be any valid JavaScript data type such as a string, number, object, or array. In this example, I use a string, "Njox", as an initial value. After that, I create a function handleClick for handling the name and age of the person. Inside handleClick, I use the setName function with a new string and the setAge function with a new value, which is a number. Inside the JSX component, I create a simple h1 for displaying the name and age when a user clicks, and inside the button, I use onClick and pass the handleClick function.

## React dev tools

- When you are working with web development on the frontend side using HTML, CSS, and JavaScript, you might have used Chrome DevTools for Chrome users or DevTools for Firefox users. However, when working with React, some tools aren't present in Chrome DevTools, so we need to install them as browser extensions. Head to the React website and download the React Developer Tools extension.

- For Chrome users, head to the Chrome Web Store and for Firefox users, head to the Firefox Add-ons store to install React Developer Tools. After installation, you can choose to pin it so that it appears at the top when working with React applications.

- In Chrome, after you have installed it, it will appear like this:React Developer Tools provide extra functionality when building your React application. Some of the functionalities present in React Developer Tools are components and profiler. For now, we will focus on components since it's the focus of our project. Open Chrome DevTools with Ctrl+Shift+I, and similarly for Firefox, then head to Components and Profiler. In Components, you will see a list of components and the root components for your project.

- When you click on each component, you get basic information about it such as props, source, and rendered. Currently, we have not learned about props, which we will cover in the next section.

- Below are the explanations about react developer tools on components side.

![React Developer Tools UI](/assets/react%20dev%20tools%20UI.PNG)

On the top left is the name of the component that is currently being observer usign react developer tools and on the right side are the list of functionality that you can with the react application offered by the React Developer Tools, the first one is `suspend` which is used to suspend the current element in your react application, the 2nd one is used for inspecting that component into a DOM elements tab section, the last one is for logging component data into the console and when you click into it you will get component data into the console.


## Best Practices

- Naming convention of the function should resemble with the event of the element, like that from the above a example since we are dealing with the click event then the name of the function should start with the name handle then followed by the type of event.

- Use meangfull and descriptive names for your variables so that next time another person is into your codebase knows the flow of your project from start to finish.

- When passing a name of the function as the dynamic values into onClick functionality then be carefull not to invoke a function.Example:

```js
const Home = () => {
  // working with click event
  const handleClick = () => {
    console.log("react clickEvents are awesome");
  };

  return (
    <div className="row">
      <div className="container">
        <button className="btn btn-primary" onClick={handleClick()}>
          Click Here
        </button>
      </div>
    </div>
  );
};

export default Home;
```

## Exercise

- As part of learning React hooks, create a button that updates information dynamically. Initially, the h1 tag before the button should print information saying that "React is awesome". After a change occurs when the button is clicked, the h1 before the button should say "I am learning React hooks".
- Install React Developer Tools into your project to work on. If you are using Chrome, head to the Chrome Web Store, and for Firefox users, head to the Firefox Add-ons store and install it.

- In the next section, we will learn about outputting lists in React.

- What is the purpose of the useState hook in React?

- How do you import and use the useState hook in a functional component?
- What is the syntax for using the useState hook?
- Can you explain the parameters passed to the useState function?
- How does useState differ from the traditional state management in class components?
- What does the useState hook return? How can you use its return values?
- Is it possible to have multiple state variables in a single component using useState? If so, how?
- What happens when you call useState multiple times in a component?
- How can you update the state using useState? Do you always have to replace the entire state?
- Can you pass a function to useState for updating the state based on the previous state? If yes, why would you do that?
- Basic Usage: Create a functional component called Counter that uses the useState hook to implement a simple counter. The component should display the current count and have buttons to increment and decrement the count.

- State Initialization: How would you initialize the state with a default value using useState?

- Updating State: Write a functional component that includes a button. When clicked, the button should toggle the state between true and false using useState.

- Complex State Objects: Implement a form component using useState where the state contains multiple fields such as name, email, and password. Ensure that the component updates the state as the user types into the form fields.

- Previous State Dependency: Create a component with a button that increments a counter by 1 when clicked. The counter should start at 0. However, if the user clicks the button multiple times within a second, the counter should increment by the number of clicks within that second.

- State Propagation: Build a parent component App and a child component Child. App should have a state variable called message and a button that updates the message state. Pass this state as a prop to Child component and display it. When the button in App is clicked, how does the Child component react? Does it rerender?

- Using Functional Updates: Explain when you would use functional updates with useState and provide an example.

- State Management Best Practices: Discuss best practices for managing state with useState in React functional components.
