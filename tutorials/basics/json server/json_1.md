# JSON Sever

- JSON Server is the tool that you can use for web development especially for frontend developers who use API for receiving and transferring data in form of objects from one client to server.There are many requests which can be made to a server inorder to send and receive request to the server.

- Inorder to send and receive request to a server you just need HTTP methods which are PUT, GET, POST, UPDATE and DELETE, there are many HTTP Request which can be done to a server but these are some examples of them.So inorder to create fake restfull API we use __JSON Server__ package, you just have to install in our COmputer using NPM and start working with it.

## Prerequisites

- Inorder to install you need to have a pckage for installing into your PC, example of package are `npm` and `yarn`.

| Prerequisites | Tool |
| :-------------- | :----- |
|  Node package manager | Install using this [link](https://www.npmjs.com/package/json-server) (if you don't have).  |
| Node.js | JavaScript runtime which enables you to work with various project [Install](nodejs.org).  |
| Asynchronous JavaScript | You need to have a littel knowledge about Asynchronous JavaScript |

This how json server npm page looks.

![Json server page npm ](/assets/json%20server.PNG)

## Installation

- There are two choices on installing json server you can install it globally or you can install on a certain folder only, I suggest you choose to install it globally, but you are still not limited.

- Installing globally, you can use terminal of your choice some use bash, some powershell but as long as it works for you then it's fine.

```js
npm i -g json-server
// this install globally into your PC
```

- Istalling locally in a folder only

```js
npm i json-server
// instals in a directory
```

## Creating JSON DB

- We need to create a JSON folder/file in which a json server will be responsible for watching that file into your project.Navigate into the root directory of, the json file in which we will create is for watching your file and wrap with the end-point of your project.

- Create a folder for storing your json file for testing endpoints of your project, make sure you create into a root of your project.

```sh
# create data folder
mkdir data

# navigate into data folder
cd data

# create json file
touch db.json
```

- Remember that data that should be in the `db.json` in the json format and JSON stands for JavaScript object notation is the way to to transfer informtaion, json data are normally in key values pairs and each string should be warppe in quotes except for numbers (numerical values), son data start with `{}` and inside is where all values comes into play.

```json
{
    "blogs": [
        {
            "id": 1,
            "title": "Lack of Industry Exposure in Academic Curriculum",
            "author": "Alpha Olomi",
            "body": " Staying updated with the latest news and developments in the field of computer science is essential for students and programmers. Here are some popular websites where you can find news, articles, and updates related to computer science:Hacker News (https://news.ycombinator.com/): A community-driven news website that covers a wide range of topics, including computer science, programming, and technology.",
            "Likes": 23
        },
        {
            "id": 2,
            "title": "How To Make With Experienced Programmers",
            "author": "NjoxPy",
            "body": "Kuweza kupata connection na watu wenye experience ni muhimu sana na pia ni rewarding kwa wale watu ambao wanataka waweze kuenhance skils zao katika ulimwengu wa programming.Haijalishi kama ni beginner au advanced.Kutengeneza connection na watu professional inaweza ikawa ndio namna ya kukufungulia milango kwako ili kupata mentorship, collaaboration na pia fursa mpya katika jamii.",
            "Likes": 34
        },
        {
            "id": 3,
            "title": "How Copy and pasting can make your program worse",
            "author": "Alpha Olomi",
            "body": "I was working on building a smple calculator for C++ Learning Lab repository but It came at a point in program I decided to allow a user to enter first and second value then perform division on that number but Since I thought there is no need to write two cout at a time for message to the user for first number and second number so I decide to copy and paste it!",
            "Likes": 56
        },
        {
            "id": 4,
            "title": "Configuring Tailwind CSS for learning and development",
            "author": "Ronald Chaula",
            "body": "Configuring Tailwind CSS for learning and development involves setting up the necessary files, understanding the configuration options, and using it within your project. Here's a step-by-step guide to help you get started",
            "Likes": 12
        }
    ],
    "polls": [
        {
            "id": 1,
            "question": "Do you prefer JavaScript over Python",
            "answer1": "JavaScript",
            "answer2": "Python",
            "number of polls": 12
        }
    ]
}
```

You can create your own json data for id, title, uathor and a body but an id should be unique for each post.So from our json data is like a json data post havinbg 4 resources inside with are into an array containing objects which are three objects.So the JSON serverbis onna generate endpoint for each file in the project.

- For a json server to do that for us the we need to go into the terminal and navigate into a place where our project is located but if you are using VS Code click <kbd>ctrl</kbd> + <kbd>J</kbd>, alternative you can use <kbd>ctrl</kbd> <kbd>shift</kbd> + <kbd> I <kbd>

- When a terminals opens up then do this, but if your are not using VS Code make sure to navigate where your folder is located so that you can start a server.Start with the name json-server then --watch in which watches for `.json` file into your project then followed with the path to your project it depends but for mine my project is into the data folder `data/blogs.json`

```js
json-server --watch data/db.json
```

This watches a blogs.json file at port `http://localhost:3000/` but if you have a project which is at port 3000 you can change the port for your project using port.

```js
// this watches for db.json into the browser at port 8001
json-server --watch data/db.json --port 8001
```

- When is woking will be like this, if you click on each endpoints you will see the list resources/endpoints for your project , posts endpoint and polls endpoint and you can open into a browser to see how they look.

![Json Server at 8001](/assets/json%208001.PNG)

## Fetching Data

## Fetching Sinhle Item
<!--
add a link for materials about JSON
install json extension json by ZainChen-for data visualization
->
