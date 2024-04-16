# Working with forms in React

- [Introduction](#introduction)
- [Working With Forms](#working-with-forms)
- [React when a user loses focus](#react-when-a-user-loses-focus)

## Introduction

- In this part we will learn on how to deal with react errors such as handling forms and user input.

## Working With Forms

## Form Submission

- We're using the useState hook to manage the state of the form fields (name and email).
- We define event handler functions (handleNameChange, handleEmailChange) to update the state whenever the corresponding form fields change.
- The handleSubmit function is called when the form is submitted. We prevent the default form submission behavior using event.preventDefault() to handle form submission within React.
- Inside handleSubmit, you can perform actions like sending form data to a server or performing client-side validation.
- Finally, the form JSX includes input fields whose values are bound to state variables, and event handlers are attached to onChange events to update state when the user interacts with the form fields.

```js
import React, { useState } from "react";

function Login() {
  // Define state variables for form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Event handlers to update state when form fields change
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  // Event handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Name:", name);
    console.log("Email:", email);

    setName("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={handleNameChange} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmailChange} />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
```

## Validation

- What if the user has entered nothing into the input box, this means that the form is empty so we need a way to handle it if the input is empty, we do that inorder that data being sent to the server should not be empty, in HTML we have a `required` attribute which helps to make sure sure that a user has entered a value before submitting certain documents which can be login and so on.

- Browser default functionality like `required` are not the safety mechanism so inorder to implement that we have to include some code functionality into our project tow ork with user input and password,example: we can use if statemenet to see if the username and password is empty then we exit.

```js
if (name.trim() === "" && email.trim() === "") {
  console.log("name and email cannot be empty");
  return;
}
```

- We have implemented that and is working fine but what comes it that a user doesnt know how to use developer tools to see those because we want a good user experience so how to implemented that to show a user that something is wrong!

## Providing User Feedback UI Design

- We introduce a new state for checking a state if is valid or not then we update into the UI of our applicatiion.We create for checking

```js
// set the initial value of the state is false
const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
```

- After we have created code snippets for our project so what follows is that we change value dynamic into the if condition to false if the name is valid and if is correct we update to true,then we display to the user that if the name and email is mepty using conditional rendering.

```js
{
  !enteredNameIsValid && <p>User Name and password must not be empty.</p>;
}
```

## React when a user loses focus

- Up to now we have been working with validating user input when a user has submiited a form but it might not be a good user experience so instead of that we might want to handle user input into our program when a user is typing into a form to fill certain details into our program and into that comes a new way to deal with user input by adding a input validation method called `onBlur`, We add into the input tag as an attribute.

```jsx
<input
  type="password"
  className="form-control"
  id="exampleInputPassword1"
  onChange={handlePasswordChange}
  onBlur={nameInputBlueHandler}
/>
```

- After we have added onBlue then we need to add a function which handles all of that and insert as a dynamic value into our project.

```jsx
// define a function for handling onBlur
const nameInputBlueHandler = (event) => {
  console.log("Onblur ");
};
```

## Code Snippets

- Code snippets for this section are found at [code.](/code/form/form.js)
