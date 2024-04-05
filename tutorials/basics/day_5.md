# Day 5

- [Functions As props](#functions-as-props)
- [useEffect](#useeffect-hook)
- [useEffect dependency](#useeffect-dependecy)

## Functions As props

- In react you can pass function as a prop as well, what if we want to implement a delete functionality into a blog, to delete a blog by an id.

- Here are the steps to consider,

1. We have a implement a delete functionality into the `Home.js`, define a delete function in the parent component which is the and delete a blog by an id.

```js
const handleDelete = (id) => {
  const newBlogs = blogs.filter(blog => blog.id !== id);
  setBlogs(newBlogs);
};
```

2. Pass handleDelete function as a prop to the BlogList component which is the child component.

```js
<BlogList handleDelete={handleDelete}></BlogList>
```

3. In the BlogList component call a function to delete a blog based in the function defined in the parent component.But remember to receive function prop at the top.

```js
const BlogList = ({ blogs, title, handleDelete }) => {
  return (
    <div className="container">
      <h2>{title}</h2>
      <div className="container">
        {blogs.map((blog) => (
          <div className="card-body" key={blog.id}>
            <h2 className="card-title text-primary">{blog.title}</h2>
            <p className="card-text">
              <small className="text-muted">Written by {blog.author}</small>
            </p>
            <button
              className="btn btn-danger mr-2"
              onClick={() => handleDelete(blog.id)}
              style={{ borderRadius: "8px", fontSize: "16px" }}
            >
              Delete Blog
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;

```

## useEffect Hook

- useEffect is the hook used in react can be useful when we want to update certain component or function when a render happens in your program,There are many instances in which you can use the `useEffect()` in your application, some of the instances of the useEffect in which you can use useEffect function is when you need to,

1. Update the document title: If you want to update the document title based on the content of your component,you can use the useEffect hook to set the document title.

2. Fetching Data.If you need to fetch data from an API when component mounts or wen a ceratin prop changes.

3. Authentication:

There are many instances to use react useEffect but those are some.

- In this part of learning React I will create an  API using Golang for fetching blog posts, don't be confused if you don't know how to create an API using Go, you can use raw data by typing manually at the top of your program.

- So when you start your react application using `npm start` the page initially loads so when there is useEffect function contains code into then that is noted as the intially render the first, also when components loads is considered as the render so useEffect function works,So in my blog project I can implement delete functionality for deleting blog post after doing that the page renders.

```js
import { useState, useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: "How to Fail in programming", body: "Programming is like thresome in other terms", author: "NjoxPy", id: 1, category: "mindset" },
        { title: "Getting started with Go", body: "Before diving into go, you need to configure Your text editor", author: "Mdudu", id: 2, category: "web development" },
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log("React is awesome!");
    });

    useEffect((title) => {
        title = document.title;
        <h2>{title}</h2>
    });

    return (
        <div className="container-fluid">
            <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete} />
            <BlogList blogs={blogs.filter((blog) => blog.author == "Alpha X")} title="Alpha Blogs" />
            <BlogList blogs={blogs.filter((blog) => blog.author == "NjoxPy")} title="NjoxPy Blogs" />
        </div>
    );
}

export default Home;
```

## Practical Uses

- Update the document title: If you want to update the document title based on the content of your component,you can use the useEffect hook to set the document title.

- Fetching Data.If you need to fetch data from an API when component mounts or wen a ceratin prop changes.

## useEffect Dependecy

- Sometimes when you don't want to fire a callback useEffect function after each render into your program then it's important to use dependecy array [ ], dependency is passed into useEffect function as a an argument.Inside [] you can pass a number which details on how many times you want useEffect function to fire a callback function.

```js
// fires a callBack function once since array doesn't have anything
    useEffect(() => {
        console.log("React is awesome!");
    }, []);
```

- There are certain  instance in your project you want certain components to be updated into your project but some not, in this situation you pass the name of the component you want to change into your project as a state object.

```js
import { useState, useEffect } from "react";

const Home = () => {
    // useState in action
    const [framework, setFramework] = useState("react");

    // useEffect function
    useEffect(() => {
        console.log("useEffect in action");
    }, [framework])

    return (
        <div>
            <button onClick={setFramework("vue")}>Change Framework</button>
            <p>{framework}</p>
        </div>
    );
}

export default Home;
```

From the above example we are only updating famework object into home component, since we have passed framework object as a dependency name into our useEffect callback function so other components are not concerned about that only setFramework function is concerned about that on every render.

## Best Practices

- Be cautious when using useEffect function with useState.
- useEffect function doesn't return anything so be careful.
