# APIs

- [Project Structure Setup](#project-structure-setup)

## Project Structure Setup

- So the initial step for getting started with this project in on project structure where by we will start by setting workspace for working with golang.

- Create a folder named api. Within this folder, we'll place our main program file named main.go, which will serve as the entry point for our application.

```sh
# Create the 'api' folder
mkdir api

# Navigate into the 'api' folder
cd api

# Create the 'main.go' file
touch main.go

```

- With this, our project structure is set up, laying the groundwork for our development process. Next Steps: With the project structure in place, our next steps involve installing dependencies and further development.

## Dependency Installation

## Instal gin framework

- Gin franmework saves for establishing routes into our application

```go
# install gin
go get -u github.com/gin-gonic/gin
```

## Install gorm and gorm database

- gorm serves as the database for working with requests, here we need to install go libraray and ;ibraray for working with database, I will use postgress.

```go
go get -u gorm.io/gorm

// database installation
go get -u gorm.io/driver/postgres
```

## Godot env

- Install godot env libraray for working with environment variables

```go
go get github.com/joho/godotenv
```

## compile daemon

- Install `compile daemon` package which will help in realoding our react application once chages have occured.

```go
go get github.com/githubnemo/CompileDaemon

go install github.com/githubnemo/CompileDaemon
```

- After it has been installed then you need to add some code into main.go

```go
package main

import "fmt"

func main() {
    fmt.Println("hello world")
}
```

- After that you need to reload using compile daemon.

```sh
CompileDaemon -command="./FolderName"
# for me my folder name is api

# reload main.go
CompileDaemon -command="./api"
# output: $ CompileDaemon -command="./api"
# 2024/04/08 08:37:50 Running build command!
# 2024/04/08 08:37:51 Build ok.
# 2024/04/08 08:37:51 Restarting the given command.
# 2024/04/08 08:37:51 stdout: hello world

```

- So now everything works, what vwe need to do here is use gin framework for setting up routes fo our projects.

```go
package main

import (
	"example.com/api/initializers"
	"github.com/gin-gonic/gin"
)

func main() {

	r := gin.Default()
	r.GET("/", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"Vamos": "Amigos!",
		})
	})
	r.Run() // listen and serve on 0.0.0.0:8080
}
```

- From the above code we have setup routes for our project an now project is serving at `http://localhost:3000/` then after that we need to change if everything is working into our project.

## Working with Environment variables

- Godot env helps when working with environment variables so what is important here is that craete `.env` file and set the port to 3000

```sh
touch .env
```

```sh
PORT=3000
```

- Our project is serving at `http://localhost:3000/` now we need to change the port to 3000 but it will be automaticaly confiogured into it we look you look at the terminal.

- Create a file for working with environment variables and connecting with the database for our project.

## Writing API Handlers

## Defining Data Models

- Since we are creating an API for blogs, then our module will contain `blog post` model and `comments` model only for now but as we advance we will change various things from our program to make it more advanced.So the model of blog post will contain the following things

```txt
blog_id, blog_author, blog_time, blog_
```

- So we will store those information into a struct for our project.

```go
type BlogPost Struct{
	
}
```

## Setting up Routes

## Running with Compile Daemon

## Articles

- [Tutorial: Create a Go module](https://go.dev/doc/tutorial/create-module)

- [Creating API For JSON CRUD in Swahili](https://medium.com/@godblessnyagawa/kuandaavisual-studio-code-kwa-ajili-ya-kuunda-api-ya-json-crud-katika-go-na-gin-na-gorm-661644ec1e14)

- [Gin framework](https://github.com/gin-gonic/gin)

- [Gorm framework](https://gorm.io/)

- [Elephant sql](https://www.elephantsql.com/)
