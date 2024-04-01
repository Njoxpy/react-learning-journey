<!-- Outputting lists and props in react -->

# Outputting List and Props

- [Outputting Lists](#outputting-lists)
- [Props](#props)

## Outputting Lists

- One of the important and crucial JavaScript concept used in react is the use of `.map` method in react, you can use map method to rotate into each item in your array and do somethind with the item item which is inside an array.

- On this day 9 of react I have learned on how to output list in react using map method, Example you can have a list of blog articvles when are into your blogs and you want to display the list of all blogs which are into your website, so to do that you have start hardcoding all values, but there is a esaier way to do that, How? The use of map method also since our blog articles changes at a time here is the perfect opportunity to use react state hook, so we first have to import it.

```js
import { useState } from "react";
```

- We create a new react state function but first have to destructure it.

```js
const [blogs, setBlogs] = useState([
     { title: "How to Fail in programming", body: "Programming is like thresome in other terms", author: "NjoxPy", id: 1 },
    { title: "Getting started with Go", body: "Before diving into go, you need to configure Your text editor", author: "Mdudu", id: 2 }
])
```

- From the above example I have a a list of blogs which are into an array and inside an array we have an object where by an object contains title, body, author and id, those are keys for object and each one has it's own value.From the above it is like a blog contains various contents and each content have title, body, author and an id.

- So inorder to display the list of blogs inside the homepage we first need to cycle through an array and display each element in the blog as the list of blogs present, and all of that should be inside the `div` tag, to do that we have to use `array.map` method which cycles through each item in the array and does something according the way you want to manipulate data into your project.

```js
div>
                {blogs.map((blog) => (
                    <div key={blog.id} className="m-2">
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                    </div>
                ))}
            </div>
```

- callback functions is the function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array. Calls a defined callback function on each element of an array, and returns an array that contains the results.

- We first have to cycle through each blog in the blogs array using callback function and pass a paremeter to help store each cycled item you can pass anything but for me I have passed blog as a parameter and inside

- Create curly braces for cycling through each item in the array blogs using a callback function and pass a blog as a parameter but you can use whatever parameter you want, each time we cycle through the blogs array we get access to blog title, body, author and id.

- We map through each item in the blogs array an display a title of the blog and author, but we don't want to display the whole article into the homepage I want to only display article title and and author of the article.

## Props

- props in react stands for properties, props is the way to pass data from parent to child components in data.Props is like HTML attributes that provide some extra information about a certain tag.

- In building a real world project you can have a website havind many blogs into various section, and those blogs can be into various categories such as men, women, healtyh and so on so if we if you were building that application then we will resue the below code into various section of your blog post

```js
            <div>
                {blogs.map((blog) => (
                    <div key={blog.id}>
                        <h3>{blog.title}</h3>
                        
                        <p>Written by {blog.author} </p>
                    </div>
                ))}
            </div>
```

so instead of doing that we have a separate components such as blog list component for and use props(properties) to pass component from one component to another component into your project.In the home page we might show the list of all blogs into our project but in the search page we can show only blogs which matches the search term.

- Create a blog list component, and the name of the component is just gona be BlogList and inside we have to grab the template in which we have used for maping into blog since we want to reuse.In the Home.js

```js
            <div>
                {blogs.map((blog) => (
                    <div key={blog.id}>
                        <h3>{blog.title}</h3>
                        <p>Written by {blog.author} </p>
                    </div>
                ))}
            </div>
```

- In the blog list component your code will look like this:

```js
const BlogList = () => {
    return (
        <div>
            <div>
                {blogs.map((blog) => (
                    <div key={blog.id}>
                        <h3>{blog.title}</h3>
                        <p>Written by {blog.author} </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BlogList;
```

- Since we have removed from the Home.js so inorder to use in the Home.js file we have to import and then use in the Home.js after the navigation menu.

```js
import BlogList from "./BlogList";
// use after navigation menu
        <div className="container-fluid">
            <BlogList/>
        </div>
```

- After that when we are trying to map through the blog array in the `BlogList.js` we get error,that blogs is not defined.

```js
src\BlogList.js
  Line 5:18:  'blogs' is not defined  no-undef
```

This is because in the bloglist component we are trying to cycle through the blogs component but in our application is doesn't understand what we are trypig to do with blogs since blogs in not defined in the `BlogList` component.

- To solve that error into our project we have to pass data from `Home.js` component into a `BlogList.js` using props, and we always pass data from parent component to the child component into our project.Inside our component Home.js is the parent component and bloglist component is the child component.

- In the `<BlogList/>` we pass a property with a value for referencing blogs and blogs can have a value for it which is dynamic value:Example

```js
            <BlogList blogs={blogs} />
```

From the above example we are sending blogs property with a value in it which is the dynamic value and that dynamic value is the blogs array, blogs is the props(property) which contains a property and a value but from our code is the dynamic value. After we need to receive the property using props keyword into `BlogList.js` component.

- To use props passed from the `<BlogList blogs={blogs} />` tag then we have to pass keyword props into the BlogList component at the top after the BlogList component name has been declared but is passed as a parameter and create a variable for storing a blogs property received from the BlogList function as a parameter. At a look below code!

```js
const BlogList = (props) => {
    const blogs = props.blogs;
    
    return (
        <div>
            <div>
                {blogs.map((blog) => (
                    <div key={blog.id}>
                        <h3>{blog.title}</h3>
                        <p>Written by {blog.author} </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BlogList;
```

- When we are receiving the blog props in the BlogList.js, our code looks weird so we can destructure it

- NOTE: Prop passed from parent element can have default value

## Exercise

- As a part of learning React.js I tried on using react developer tools to see props for the blog list component and then what we can do with props into a project.

- Props Passing: Explain how props are passed from a parent component to a child component in React.

- Default Props: How can you provide default values for props in a React component?

- Conditional Rendering: Write a component called Message that accepts a prop called isLoggedIn. If isLoggedIn is true, the component should render "Welcome back!" message, otherwise, it should render "Please log in.".

- List Rendering: Create a functional component called TodoList that accepts an array of todo items as a prop. Render each todo item as a list item (<li>) inside an unordered list (<ul>).

- Keys in Lists: Explain the importance of keys in React when rendering lists. Provide an example where you render a list of items without keys, and then modify it to include keys.

- Mapping Props to Components: Write a component called ProductList that accepts an array of product objects as a prop. Each product object should have id, name, and price properties. Render each product as a separate Product component passing it the necessary props.

- Updating State with Props: Discuss the concept of lifting state up in React and provide an example scenario where you might need to update the parent component's state based on changes in child component's props.

- Outputting Dynamic Lists: Create a component called UserList that accepts an array of user objects as a prop. Each user object should have id, name, and age properties. Render a list of users, displaying their names and ages.

- Conditional Rendering in Lists: Explain how you can conditionally render items in a list based on some criteria. Provide an example scenario where you might want to conditionally render certain items in a list.

- Handling Events in List Items: Write a component called ClickableList that accepts an array of items as a prop. Render each item as a list item `(<li>)` inside an unordered list `(<ul>)`, and attach an onClick event handler to each item that logs the item's name to the console when clicked.

_____________AWESOME, BETTER TOGETHER_____________
