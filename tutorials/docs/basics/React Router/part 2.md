# Part 2

- [React Router Version 6](#react-router-version-6)
  - [Router Provider](#router-provider)
  - [createBrowserRouter](#createbrowserrouter)
  - [Outlet](#outlet)
  - [Custom 404 Page](#custom-404-page)
  - [Route Parameters](#route-parameters)
  - [Error Elements](#error-elements)
  - [Forms and Actions](#forms-and-actions)
- [Loaders](#loaders)

## React Router Version 6

- In react router introduced a new way to deal with routes in react some of the things which were introduced into react router were `Router Provider`, `createBrowserRouter` , `Outlet`, `Custom 404 Page` , `Route Parameters`, `Error Elements`, `Forms and Actions`.

- At the end of the project we will create a poject which will be about a simple project which is concerned about.The link to the project is found [here](/projects/react%20router%20projects/Basic%20Navigation/src/)

## createBrowserRouter

- In react version 6 instead of creating routes for the page we have to wrap whole browser components into the create browser functions and we create routes from elements.

## Router Provider

- Router provider helps to deal with routes which a rendered at the time after they have been defined with routes, assume you have a page with home section, service, section, about and contact section so we define routes for each section using createbrowser routes then we wrap with createRoutesFromElements then inside parentesis we pass routes which contains path and element which is rendered at the time int the page.

```jsx
// import router dom lirary
import {
  createBrowserRouter,
  routerProvider,
  Router,
  createRoutesFromElements,
} from "react-router-dom";

// create router function
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="services" element={<Services />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
export default function app() {
  return <RouterProvider router={router}></RouterProvider>;
}

```

## Outlet

## Custom 404 Page

- Custom 404 is the page which is found when a user tries to request a page which is not found in the page and that is why is called 404 page which stands for not found sometimes 404 page can be called as `NotFound` page is used when a user requests for a certain page and when is not found the returns out the not found page which directs a user to the homepage of the website.Let's create a simple 404 page such that when a user requests for a page that is not found we return that page.

```jsx
// import navlink
import { Navlink } from "react-router-dom"

export default function NotFound() {
    return (
        <main>
            <div>
                <h1>Not Found</h1>
                <p>Sorry the page was not found, return to <Navlink to="/">Homepage</Navlink></p>
            </div>
        </main>
    )
}
```

- We start by import navlink from react-router-dom the we craete a components which return a ui which has a heading not found and contains a paragraph with a link to homepage.After we have done that there is a need to add a route to the `app.jsx` path.

```jsx
<Route path = "*" element={<NotFound />}>
```

- We have to add not found page such that when a user sends a request to a path that does not exist then it returns about a not found page example when a user request `page/inivation` since this page doesn't exist then it will return a page with ui which directs a user to the homepage of the website.

## Route Parameters

## Error Elements

## Forms and Actions

## Navigate Component

## Loaders

- Loaders is the new feature introduced into react router dom and is available to version 6.4 and so on, so if have older version this will not work you will need to install the newer vesrion of react router dom.

```sh
# install react latest vesrion
npm install react-router-dom@latest
```

- Loader is just the way to load data into a component before it renders,You might have a jobs page which lists a list of jobs that comes from an API, loader helps to fetch those list of jobs from an API Before the component renders from the browser.
