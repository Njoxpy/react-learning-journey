import React, { useState } from 'react';

function Login() {
  // Define state variables for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);

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

    if (name.trim() === '' && email.trim() === '') {
      console.log("name and email cannot be empty");
      return
    }

    console.log('Name:', name);
    console.log('Email:', email);

    setName('');
    setEmail('');
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
