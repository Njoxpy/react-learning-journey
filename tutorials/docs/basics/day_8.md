# React Hook

- [State](#state)
- [React Developer Tools](#react-developer-tools)
- [Exercise](#exercise)

## State

- In React, we have a special function called React Hook from the React library. When we need something that might change at some point in React, we use the `useState` hook. It is like having a special type of function that performs a certain job.

- You can have a button such that when a user clicks on it, it should perform a certain task (change). According to React, in that situation, we use the `useState` hook. See the example below.

```js
import { useState } from 'react'

const Button = () => {
    let [name, setName] = useState("Njox");
    let [age, setAge] = useState(23);

    let handleClick = () => {
        setName("Elvis")
        setAge(24);
    }

    return (
        <div>
            <h1 className='fw-bold'>My name is {name}, I am {age} years old</h1>
            <button className='btn btn-primary' onClick={handleClick}>Click me</button>
        </div>
    );
}

export default Button;
```

- In the above code, we first have to import useState from the React library and destructure the useState function: import { useState } from 'react'. Then useState takes an initial parameter which can be any valid JavaScript data type such as a string, number, object, or array. In this example, I use a string, "Njox", as an initial value. After that, I create a function handleClick for handling the name and age of the person. Inside handleClick, I use the setName function with a new string and the setAge function with a new value, which is a number. Inside the JSX component, I create a simple h1 for displaying the name and age when a user clicks, and inside the button, I use onClick and pass the handleClick function.

## React Developer Tools

- When you are working with web development on the frontend side using HTML, CSS, and JavaScript, you might have used Chrome DevTools for Chrome users or DevTools for Firefox users. However, when working with React, some tools aren't present in Chrome DevTools, so we need to install them as browser extensions. Head to the React website and download the React Developer Tools extension.

- For Chrome users, head to the Chrome Web Store and for Firefox users, head to the Firefox Add-ons store to install React Developer Tools. After installation, you can choose to pin it so that it appears at the top when working with React applications.

- In Chrome, after you have installed it, it will appear like this:React Developer Tools provide extra functionality when building your React application. Some of the functionalities present in React Developer Tools are components and profiler. For now, we will focus on components since it's the focus of our project. Open Chrome DevTools with Ctrl+Shift+I, and similarly for Firefox, then head to Components and Profiler. In Components, you will see a list of components and the root components for your project.

- When you click on each component, you get basic information about it such as props, source, and rendered. Currently, we have not learned about props, which we will cover in the next section.

- We have implemeneted the fetch functionality into our project to fetch the list of blogs present from an API endpoints, so what if we have another components which fetches blogs by author name, so we need to repeat the whole functionality for fetching blogs, it's fine but to make our code look organized and readable we use customHook in react.

## Custom Hook

- Custom hook helps use to create a custom component so every time we want to fetch data from an API into another component we don't need to create another code for fetching data from an API so what we do here is we use the custome hook.

- To create a custome hook then we have to create separate component for working with custom hook into the `src` folder.

```sh
cd  src

touch useFetch.js
```

- Since we will use code fetching data from an API then we will use a descriptive name in the same way as the purpose for our component.Create a functional component called `useFetch()`, We create a function to put code in and this function will be hook itself.

__Custom hook in react nned to start with the world `use` otherwise we will get an error__

- Inside the useFetch() function we will cut code from useEffect function and put into useFetch function. We take code for fetching data from an API then we handle data in the response, eror and data.

```js
const useFetch = () => {
useEffect(() => {
        fetch('http://localhost:8001/blogs')
                .then(res => {
                    if(!res.ok){
                        throw Error('Could not fetch data for that resources')
                    }
                    console.log(res);
                    return res.json()
                })
                .then((data) => {
                    // console.log(data);
                    setBlogs(data);
                    setIsPending(false);
                    setError(null);
                })
                // implement .catch to catch any network problem error
                .catch( err => {
                    setIsPending(false);
                    setError(err.message);
                })
    }, []);
}
```

- We need to register data such as blogs, data, isPending, we have created different states for blogs, data and pending state of an object so what we need to do is to register those states into `useFetch.js` component.and we should remember to export the useFetch.jsWe shpuld import useEffect and useEffect from react library

```js
import {useState, useEffect} from 'react';
export default useFetch;
```

- In the future we might be searching for blogs we might we searching for title, aor blogs by author so we should change blog object to data and for setBlogs change to setData.



## Articles


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
