# Day 2

## Components

- When creating a website using React, it's best practice to use components to simplify debugging. For example, a website can have components like Navbar, Sidebar, and Footer. We can create individual components for each, such as Navbar component, Sidebar component, Footer component, and so on.

- Components contain both the logic and templates. Templates consist of all HTML code, while logic contains JavaScript code. For instance, the Footer component can include logic that performs a certain action if a user clicks the 'Privacy Policy' link.

## JSX

- Take a look at the code snippet below:

```jsx
import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const {
    data: blogs,
    isPending,
    Error,
  } = useFetch("http://localhost:8001/blogs");
  return (
    <div className="container-fluid">
      {Error && <div className="fw-bord text-warning">{Error}</div>}
      {isPending && <div>Loading....</div>}
      {blogs && <BlogList blogs={blogs} title="All blogs" />}
      {blogs && (
        <BlogList
          blogs={blogs.filter((blog) => blog.author === "Alpha X")}
          title="Alpha Blogs"
        />
      )}
      {blogs && (
        <BlogList
          blogs={blogs.filter((blog) => blog.author === "NjoxPy")}
          title="NjoxPy Blogs"
        />
      )}
    </div>
  );
};
```

- The above code demonstrates JSX, which allows us to write valid HTML code alongside JavaScript code in our program. However, there's a difference between JSX and HTML. In HTML, we use class to reference the class for our project. In JSX, we use className instead. This is because class is a special keyword in JavaScript used to create a class, so className is used to reference a class. className follows camelCase notation.

- When your HTML code is rendered into the index.js file, className gets converted into class. You can observe this in the browser's Elements section. Babel JS transpiler is responsible for converting all JSX templates into HTML and rendering them to the DOM.

![Browser Console className](/assets/Browser%20Console%20className.PNG)

## Dynamic Values in Templates

- Due to the presence of JSX in React we can output dynamic values in React, let's what if we want to output the welcoming message for my blog with the message welcome to my blog. It will be like this

```js
const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col text-center">
          <h2>Welcome To Fumbakasa Blog</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
```

- from the above code we have hardcoded blog title, it will be best if we create a variable for storing blog title and inject into the h2 tag inside the return statement. To do that then we have to create a variable for storing title variable like this, but it should be before return statement where we can write any valid JavaScript code.

```js
const title = "Welcome To Fumbakasa Blog";
```

- After that then we need to inject blog title into the return statement to be displayed at the center of the webpage,in React to inject any valid Js code we inject using curly braces {} inside curly braces we pass any valid JavaScript code.

```js
const Home = () => {
  const title = "Welcome To Fumbakasa Blog";
  return (
    <div className="container">
      <div className="row">
        <div className="col text-center">
          <h2>{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
```

- From the above code we have injected title of the website into the h2 tag.

![UI](/assets/hello%20world%20in%20react.PNG)

- So it is better to use dynamic way to update instead of hardcoding values for your application, still on that you can use dynamic as many as you.What we can't output into the the return statement in react is booleans and objects.

```js
const Home = () => {
  const title = "Welcome To Fumbakasa Blog";
  const person = {
    name: "Njox",
  };
  return (
    <div className="container">
      <h3>{person}</h3>
    </div>
  );
};

export default Home;

/*
Uncaught runtime errors:
×
ERROR
Objects are not valid as a React child (found: object with keys {name}). If you meant to render a collection of children, use an array instead.
*/
```

- So we can't output objects and booleans value.

## Multiple Components

- Current into my project I do have only one component which is being rendered by the index.js, so App.js component is the root component so I can have another components which are nested into the `App.js` component for example I can have a component called `Navbar.js`, `Footer.js`, `BlogDetails.js` and so on and that is how components are used in react.

- What I will do here is create another component for the navigation bar and the footer component,Create a new file `Navbar.js` which will be created inside the src folder.

```sh
# create navbar file for navigation menu
touch Navbar.js
```

- So inside the root component which is app.js there can be other components which are nested inside it but for now I will include home.js file and navbar.js file into app.js of the project.

## Adding Styles

## Articles
