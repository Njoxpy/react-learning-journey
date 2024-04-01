# Day 16

## Introduction

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
