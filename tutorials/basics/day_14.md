# Day 14

- [Introduction](#introduction)
- [Conditional Loading Message](#conditional-loading-message)

## Introduction

## Conditional Loading Message

- After implementing the search functionality into our project so what follows is the implementation of the laoding message inacase a user has clicked into a homepage then a user sees a message `loading...` that our application is searching for something but after it has finished then we need to tell that the search has finished. How we do that, We use `useState()` function we set the initially value is equal to true.

```js
// import the use state at the top
const [isPending, setIsPending] = useState(true)
```

From the above code we have set the state of an object to be true and desctructured `isPending` and `setIsPending()` function after that when a page is loading we display that the page is loading using conditional AND Operator we combine the Blogs json data.

```jsx
// we implement the isLoading functionality at the bottom of the page
{isPending && <div>Loading....</div>}
```

- From the above code we have called the isPending function but don't use () you will invoke a function and then we use && conditional && operator which get executed when both sides are true then we craete a div having content `Loading...`, Chcek inot the browser to see if it's working you will see a loading message.But our aim is not on that waht we want is that we only use when a website is fetching data and after it has finsihed loading data then we set function is false.

- After we have fetching data from endpoints from JSON server then we need to set is equal to false.

```js
    useEffect(() => {
        fetch('http://localhost:8001/blogs')
            .then(res => {
                return res.json()
            })
            .then((data) => {
                setBlogs(data);
                // setIsPending function now is set to false
                setIsPending(false);
            })
    }, []);
```

- So we have covered the Conditonal laoding Message alredy. The whole code will be like this.

```js
import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import Career from "./components/career"
import Interview from "./components/interview"
import Mobile from "./components/mobile_dev"
import WebDevelopment from "./components/web_dev"
import Navbar from "./Navbar"

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    // incase of program is loading when a user sends a request to the server we create a state for it and set to initial value true
    const [isPending, setIsPending] = useState(true);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        fetch('http://localhost:8001/blogs')
            .then(res => {
                return res.json()
            })
            .then((data) => {
                // console.log(data);
                setBlogs(data);
                setIsPending(false);
            })
    }, []);

    return (
        <div className="container-fluid">
            {isPending && <div>Loading....</div>}
            {blogs && <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete} />}
            {blogs && <BlogList blogs={blogs.filter((blog) => blog.author === "Alpha X")} title="Alpha Blogs" />}
            {blogs && <BlogList blogs={blogs.filter((blog) => blog.author === "NjoxPy")} title="NjoxPy Blogs" />}
            {blogs && <BlogList blogs={blogs.filter((blog) => blog.category === "career")} title="Blogs based on Career" />}
        </div>
    );
}

export default Home;
```

- So I have learned on how to set the loading message for the project, after we have state state is false then what we do is to include it after we have fetched the list of blogs and set to false then, We have to use in the return body to return a text laoding inorder to do that we have to use conditional operator to combine both isPending and a div containing a message loading incase the statement is true for both sides then a loading message will be displayed. You can implment a setTimeout function to clearly see the loading message displayed.

## Instances to use The Loading Message

- Fetching Data: You can use the loading message when displaying information into a website when you are fetching data from an API and this can help in mnaging user expectations when navigating into a website, remember that people attention span has decreased so whta to do here you have to log a message that page is laoding or you can use `loading....`

- Dynamic Content Loading: If your page has content in which is based on user interaction you can implement a functionality for loading incase a user a clicked a button.

- Authorization and Authenticatin:If a user has is requesting for logging into a website or particular application built using react so after a user has entered details, they you can add a message `logging in`.

- Form Submission: After user has submitted a form may be payment application then you can implement a functionality when a server is processing application add a functionality to see that `payment is processed`
