# Day 1

- [Introduction](#introduction)
- [Single Page Applications](#single-page-applications)
- [Traditional Websites](#traditional-websites)
- [Prerequisites](#prerequisites)
- [Tools](#tools)
- [Creating React Application](#creating-react-application)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [npm start](#npm-start)
- [Best Practices](#best-practices)
- [Exercise](#exercise)
- [Articles](#articles)

## Introduction

- React is a JavaScript library that helps us create interactive web applications. React also allows us to easily create SPAs (Single Page Applications).

## Single Page Applications

- SPAs, which stands for Single Page Applications, involve the user requesting a single HTML page initially. Subsequent activities such as click events and routing (navigation) are managed by React using the `bundle.js` file, so when a user request for a certain page may be `/contact` contact page react looks into the bundle.js file without sending request to the server this makes the website faster.

## Traditional Websites

- A traditional website differs from a React application in that when a user requests anything on the website, the request is sent to the server for a response. For every request made by a user, such as routing to the `/contact` page, a request is sent to the server, and then a response is returned.

- Due to this process, every request a user makes on a website, such as routing, can slow down the page since each request is sent to the server. However, React solves this issue by loading the website fully when a user initially enters it. So, when a user clicks on the `/contact` page, React handles it using `bundle.js`, which looks for that link and returns results without sending a request to the server.

## Prerequisites

- Knowledge of HTML, CSS, and JavaScript and CSS Framework (Bootstrap or Tailwind) (Optional).

## Tools

| Tools                 | Purpose                                                      |
| :-------------------- | :----------------------------------------------------------- |
| [Code Editor(VS Code)](https://code.visualstudio.com/download)  | For writing our React code                                   |
| [Simple React Snippets Extension](https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets) | For React Snippets, to generate boilerplate React components |
| [Node.js](https://nodejs.org/en/download)               | Helps with installing React.js file boilerplate              |
| [Git(Optional)](https://git-scm.com/downloads)               | Version Control |

## Creating React Application

- After covering the basics of what React and SPAs are, let's dive into how to kickstart our first React project. To install React, we will use a command-line tool called `create-react-app`, which creates a starter React project boilerplate. However, you can also set it up manually. Before we do that, we need to have Node.js installed on our machine so that we can install it using `npx`.

```sh
# check node version
node -v
# v18.17.1
```

![Node.js Version](/assets/node.js%20version.PNG)

- To check if Node.js is installed on your machine, simply type node -v. If it returns command unrecognized, you need to install Node.js on your machine. You can install it by following this [link](https://nodejs.org/en/download).

## Installation

- To install React and get started, navigate to the folder where you want to create your React application folder. Then type the following commands into the terminal. Make sure you have navigated to that folder using the terminal. For example, if I want to create my project on the desktop, it will look like this. First, I will open the terminal (I will use CMD - Command Prompt).

```sh
# navigate to the desktop folder
cd Desktop

# install React
npx create-react-app project-name

# navigate to that project
cd project-name

# open VS Code in that project folder
code .
```

- Make sure you replace project-name with your project name. After the installation is complete, you will see some guidelines about starting and building the project.

## Project Structure

- In the project name, there are various files and folders, each with its own purpose.

  - `build`: Contains the list of files to be built so they can be launched into production.

  - `node_modules`: Contains the list of all project dependencies (packages), including the React library. If you have installed Bootstrap, it will also be present here.

  - `public folder`: Includes files that are public to the browser. In the public folder, there is a file called index.html. This is where React code is injected into the div tag with an id of root.

  - `src`: This is where we will spend most of our time when learning React. All React components will be in the src folder. In the src folder, there are components which we will be creating for our react application example contact page, home page, footer and so on.

## npm start

- To view your project in the browser, start a local development server by running npm run start in the terminal.

- The npm run start command executes the start script defined in the package.json file's scripts section. It starts the development server specified in the script.

```sh
# start development server
npm run start
```

- This command starts a locally development server into the browser which automatically refreshes when you change code.After it has compilled successfully will look like this

![Npm start](/assets/compiled%20sucessfully.PNG)

- After that will open into your default browser automatically with this UI

![Locally Development Server](/assets/npm%20start.PNG)

## Best Practices

## Exercise

## Articles

- [How To Learn React By  Ruben Wieruch in 2024.](https://www.robinwieruch.de/learn-react-js/)
- [React Official Documentation.](https://react.dev/)

<br>

- [React Day 1](/tutorials/basics/day_2.md)