# Reusing Component

- [Introduction](#introduction)
- [Reusing Components](#reusing-components)
- [Exercise](#exercise)

## Introduction

## Reusing Components

- Reusing a component in react is ofter a good practise but sometimes can result into a technical debt, so when resuing a particular component make sure a component you want to reuse is working so that you can reuse into your project, for example after displaying the list of all articles into your project then we want to display the list of articles written a certain user only, so to do that we have to reuse the Blog list component:

```js
            <BlogList blogs={blogs} title="All blogs" />
```

- But there should be a few modification inorder to display the list of articles written by Alpa X, to do that hen we use the array.filter method to cycle through each item in the array and then pass blog as a paramter access a name of the author and see if is equal to "Alpha X" after that display but in the title section we have to change and pass the name of the author into our project.

```js
    return (
        <div className="container-fluid">
            <BlogList blogs={blogs} title="All blogs" />
            <BlogList blogs={blogs.filter((blog) => blog.author == "Alpha X")} title="Alpha Blogs"/>
            <BlogList blogs={blogs.filter((blog) => blog.author == "NjoxPy")} title="NjoxPy Blogs"/>
        </div>
    );
```

When our code has been rendered by react will appear like this:

![Alpha Blogs](/assets/alpha%20blogs.PNG)

from the above picture we see a separate tag for Alpha X contents.

## Exercise
