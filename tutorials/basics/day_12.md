# Using JSON Server

## JSON Server

- JSON Server package used to create a fake database for searching data from a server, in my project I will use it for fetching blog post, Before I used API but for now I will use JSON Server package for working with it, Why that in real world project we cannnot have a list of blogs into our project but instead we will fetch.

## Data

- To do that we have to create a folder into a root of our project, create a folder called data for working with json data, then navigate into that folder then create a file for storing json data.

```sh
# create a directory
mkdir data

# navigate into that directory
cd data

# create a file
touch db.json
```

```json
 npx json-server --watch data/db.json --port 8000
 ```
