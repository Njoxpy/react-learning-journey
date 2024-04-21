# React Router

## Introduction

- In normal website when sending request to server it returns out the response for the request we sent to the website, so for every request we send into the browsers the server sends a request, but in react application is quite simple and fast, when we send a request to the server react delegates activities, only initial request to the server then a server responds to that sending html page to the browser and compiled files(JS Bundle) which controls our application, so next time we send a request to the `/contact` page the react handles all that by updating dynamically for the contact page which found into the bundle js without sending a request to the server and hence makes our react application fast.

## Installation

- Since react router is not part of the react core libraray then we need to install it into the terminla, so navigate into the terminal and install using below command.

```js
npm install react-router-dom
```

## Importing

- So we have installed react router into our application, so what follows now is how to use into our react application and to do that we have to import the following things into the root component of our project.

- There are several components which should be used from react router dom but it depends on your project requirement or on what you want to accompilish with it, but here are some of the important react router dom functionality which we will be using into our project, the first is browser router which helps to wrap all our links which heads a user into various section of the website so what we do here is wrapping all component into browser router.Another important component to use is Routers which wraps all routes to different part of the website and another thing is the use of route in which helps to route navigation links for the sites example `/contact` page is wrapped into route component, link component instead of using anchor tag we use link tag but there is another componet called navlink which helps on styling uing CSS for active element into your page.

```js
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
```

-

```js
<BrowserRouter>
  <header>
    <h1>Job Routes</h1>
    <Link to="/">Home</Link>
    <NavLink to="/about">About</NavLink>
    <NavLink to={"/contact"}>Contact</NavLink>
  </header>
  <main>
    <Routes>
      <Route index element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
    </Routes>
  </main>
</BrowserRouter>
```

- From the above code we have wrapped all components which we will using the browser router for routing and if a certain component or link is not into the browser router there if you request what is happening is that a browser sends a fresh request to the server but when it is being wrapped into browser router then there is no need to send a fresh request to the server because react router dom is the one incharge of it instead of sending a fresh request to the server.

- So we wrap inside the `BrowserRouter` then after that we create routes and inside routes we wrap all of our component which should be used for routing such as contact page about page and home,route contains two properties the first one is path and the second one is element whereby we pass a component concerning ,make sure a component which you are passing is imported.

```js
<main>
  <Routes>
    <Route index element={<Home />}></Route>
    <Route path="/about" element={<About />}></Route>
    <Route path="/contact" element={<Contact />}></Route>
  </Routes>
</main>
```

- Into the page the path for it can be `index` or `/` both works but remember to choose only one method at a time.After we have wrapped all that using Routes and route and pass path and element for each component so what follows next is specifying link to those pages into our project, into the normal way without react router we would have used the anchor tag, but in react router dom instead of using the anchor tag we have to use the link and navlink tag and we pass a property called into it we pass the where we want to go incase a user has clicked into `contact`, We use navlink to make our link be into active state this works when styling using CSS

```js
<header>
  <h1>Job Routes</h1>
  <Link to="/">Home</Link>
  <NavLink to="/about">About</NavLink>
  <NavLink to={"/contact"}>Contact</NavLink>
</header>
```

## React Router Dom Version 6

## Sources

- [React Router Docs](https://reactrouter.com/)
