# Redux

- [Introduction](#introduction)
- [Why Redux?](#why-redux)
- [State Management Tools](#state-management-tools)
- [Njox Explains Redux](#njox-explains-redux)
- [Prons And Cons Of Redux](#prons-and-cons-of-redux)
  - [Prons](#prons)
  - [Cons](#cons)
- [Redux Importance](#redux-importance)

## Introduction

- Redux is the state management library for JavaScript applications and hance we can use redux with any JavaScript framework such as Angular, Vue, React and Even Vanila JavaScript.

## Why Redux?

- Since We have talked that redux is the state management tool so when to use Redux in React applications, Take an example you have built a large complex application (Website) such that when a user changes a certain part of the website may be has changed the profile picture then you want other part of the website sync with other parts so due to that we can write code for changing various things into our website and due to that we can end up perform many number of operations without good results.

- So solve that then here is when `redux` state management tool comes into play for our website.

## State Management Tools

- There are about 3 state management tools used in react applications also in other frameworks.

  - `Flux`: This is the framework created by JavaScript in 2014
  - `Redux`: Insipired from Facebok but is quite advanced and simplified.
  - `Mobx`

## Njox Explains Redux

- Imagine you are a coach of football you want to keep track of various aspects of your team's performance such as score, player statistics and game events,Instead of recording each player information on separate part what is required here is that in Redux we have a single database(respository) called `Store` this is what keeps track of all the activities which are happenning into our component. Instead of passing as a prop from one component to another component into our application then what we do here is use central store for managing all activities.

- From another analogy redux is like a central authority for controlling everything into our application take an example you have a website an for delivery and people can book for various things into your application such as books, shoes and so on, so when a person Has added something into a shopping cart of your application redux manages all activities nto your application.

## Prons And Cons Of Redux

### Prons

- Here are some of the prons of Redux

1. Powerfull and easier when debugging: With redux DevTools,you have clear records of all changes which are happenning into your application, example, when a user has added an item into a cart, has removed and so on.

2. Predictable state changes.

3. Centralized state.

4. Preserve page state.

5. Undo and redo feature.

6. Community Support

### Cons

1. Complexity.

2. Verbosity.

## Redux Importance

__1__; Redux centralizes application's state due to the presence of the redux store.

__2__; Makes data flow transparent and predictable into our application.

__3__; Any Component can access data from it.

__4__; Easier debugging

__5__;Better performance f the application.

## Articles

- [You Might Not Need Redux By Dan Abramov]()
