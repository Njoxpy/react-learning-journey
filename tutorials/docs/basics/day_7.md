# Day 15

## Handling Fetch Errors

| Javascript Knowledge | Tool |
| --------------------- | ----- |
| Asynchronous JavaScript | [MDN Docs](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous)|
| Error Handling | [Error Handling API](https://rapidapi.com/guides/error-handling-fetch)|

----------------------------------------------------------------

- So we have implemeneted the fetch inorder to fetch the list of blog articles into a blog, so what if the url for fetching a request isnot working for now, What to do? Oops! to do that we have to implement a function to catch errors into a website, instance when a website has failed to get the list of blogs available, to do that we have to use `.catch()` which fires a callback function and we pass error `err` as a parameter and inside we log that error message into a console to see it to the console instead of the react application interface.

```js
.catch((err) => {
    console.log(err.message)
})
```

- To make sure if it's working or not we have to cancel the json server for fetching blogs, use <kbd>Ctrl</kbd>+<kbd>C</kbd> into the terminal and if it's asking do you want to terminate job then click y.Below is how it looks when you have cancelled a fetch request into blogs articles json data.

![Fetching catch errors](/assets/fetching%20errors.PNG)

- As from the above photo you will see the loading message since is pending and then you will see into the console that message has been prined that

```js
Home.jsx:20 
 GET http://localhost:8001/blogs net::ERR_CONNECTION_REFUSED
Home.jsx:30 Failed to fetch
Home.jsx:20 
 GET http://localhost:8001/blogs net::ERR_CONNECTION_REFUSED
Home.jsx:30 Failed to fetch
```

![Console Message](/assets/fetch.PNG)

Connection refused, looks a good practice instead of just leaving to implemnet a functionality for loading error message we include it into the console.

## Instances where you may encounter difficulties or be unable to fetch data from an API. Here are some common scenarios and how you can handle them

- __Network Issues__ : In our project we are just fetching data locally from endpints but when create a real world projects we will not use that instead we will use API from server, so in this instance can happen when a user requests something into a site but a user lacks data, so the response returns an error instaed of displaying that error to the user we can implement the `.catch()` functionality to catch an error when there is network connection issues.

```js
fetchFromApi(){
    .then(response => {
        // handle sucessfull response here
    })
    .catch(error => {
        console.error("Network error", error);
    })
}
```

This error can also happen when using working with JSON Server, when you have set the link to fetch request but there is no server for watching your JSON Files.

- __API Rate limits__ : In our project we have just created a custom API using json server locally, but when working with really world project, we will use API to get data from a server then we send request to the server but API can have limit can a certain amount of request can be sent to the server to that API so when API limit exceeds we need to catch taht error and display the error with the messaghe try again later,so how do we do that.To handle that error into our project w need to display that error and tell a user to wait latter or try again, the status code for that code is 429.

```js
fetch("http://localhost:8001/blogs")
// handle response
    .then(res => {
        // handle response
    })
    // data
    .then(data => {
        console.log(data);
    })
    // error handling
    .then(err => {
        if(err.response.status === 429 ){
            // handle rate limit exceeded error
            console.log("Rate limit exceede, Try again later!", err);
            alert("API rate limit exceeded.Please try again later");
        }
        else{
            console.error("Error fetching data", err)
        }
})
```

- From the above code I have implemented a way to handle API rate limit exceeed error which returns the status code 404, so in the catch block we check the status code of the response and if is 429 we alert user but also we can use optional else block to handle another instance and if is not API rate limit error then may be error when fateching data from a an API.

- __Authentication error__:Another error is Authentication error this happens when when an API requires athenticatio and the provided credentials are invalid or expired, you won't be able to fetch data.To handle this we have to prompt user for credentials or tokens.We can also redirect them to the login page if authentication is required.The status code for the authentication code is 401 or 403.

```js
fetch("http://localhost:8001/blogs")
// handle response
    .then(res => {
        // handle response
    })
    // data
    .then(data => {
        console.log(data);
    })
    // error handling
    .then(err => {
        if(err.response.status === 401 || err.response.status === 403 ){
            // handle rate limit exceeded error
            console.log("Authentication error", err);
            alert("AAuthentication error");
        }
        else{
            console.error("Error fetching data", err)
        }
})
```

- __API Changes or Deprecation__ : APIs may have undergone changes or be deprecated overtime leading to compatibilty issues with your applicaion.To handle this stay updated with API Documentation and anouncements.If an API you rely on undergoes changes, update your application code accordingly.

- __Reponse Error__ : This error occurs when the response status of your API is not ok, we this is the programmer task to handle this.So we check the response if is not ok and due to that we call throw and handle error.

```js
fetch("http://localhost:8001/blogs")
// handle response
    .then(res => {
        if(!res.ok){
        throw Error('Could not fetch data for that resources')
        }
        console.log(res);
        return res.json()
    })
    // data
    .then(data => {
        console.log(data);
    })
    // error handling
    .then(err => {
    //    handle connectivity error
})
```

- There are many instances where you may encounter difficulties or be unable to fetch data from an API. Some are caused by a programmer but some are caused by server error which is not a programmer mistake so being updated as a programmer is important.

## Artciles

- [Handling errors.](https://rapidapi.com/guides/error-handling-fetch)

- MDN Status Code
