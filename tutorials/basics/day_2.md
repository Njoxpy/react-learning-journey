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

## Articles
