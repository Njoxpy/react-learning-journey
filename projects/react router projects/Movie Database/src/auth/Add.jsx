import { useState } from "react";
import { createBrowserHistory } from "@remix-run/router";

const AddMovie = () => {
  // create state variables
  const [title, setTitle] = useState("");
  const [releaseDate, setReleaseDate] = useState(0);
  const [runtime, setRuntime] = useState(0);
  const [plot, setPlot] = useState("");
  const [director, setDirector] = useState("");
  const [actors, setActors] = useState("");
  const [genre, setGenre] = useState("comedy");

  const history = createBrowserHistory();

  // pending
  const [isPending, SetIsPending] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const movie = {
      title,
      releaseDate,
      runtime,
      plot,
      director,
      actors,
      genre,
    };
    SetIsPending(true);

    fetch("http://localhost:8888/movies", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(movie),
    }).then(() => {
      SetIsPending(false);
      console.log("new movie added!");
      history.push("/");
    });

    setActors('');
    setDirector('');
    setGenre('');
    setPlot('');
    setReleaseDate(0);
    setRuntime(0);
    setTitle('');
  };
  return (
    <div className="p-8">
      <h1 className="font-bold text-center mb-2">Add Movie</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="title"
            className="p-1 text-movieDatabase-textSecondary"
          >
            Movie Title
          </label>
          <input
            type="text"
            name=""
            id=""
            required
            placeholder="Enter Movie Title"
            className="border focus:to-blue-700 border-blue-700"
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>

        <div>
          <label
            htmlFor="title"
            className="p-1 text-movieDatabase-textSecondary"
          >
            Release Date
          </label>
          <input
            type="date"
            name=""
            id=""
            required
            placeholder="Enter Release Date"
            className="border border-zinc-400"
            value={releaseDate}
            onChange={(event) => {
              setReleaseDate(event.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="runtime">Runtime</label>
          <input
            type="number"
            name=""
            id=""
            required
            placeholder="Enter Movie Runtime in Seconds"
            className="border focus:to-blue-700 border-blue-700"
            value={runtime}
            onChange={(event) => {
              setRuntime(event.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="title">Plot</label>
          <input
            type="text"
            name=""
            id=""
            required
            placeholder="Enter Movie Plot"
            className="border focus:to-blue-700 border-blue-700"
            value={plot}
            onChange={(event) => {
              setPlot(event.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="director">Director</label>
          <input
            type="text"
            name=""
            id=""
            required
            placeholder="Enter Movie Director"
            className="border focus:to-blue-700 border-blue-700"
            value={director}
            onChange={(event) => {
              setDirector(event.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="actors">Actors</label>
          <input
            type="text"
            name=""
            id=""
            required
            placeholder="Enter Movie Actors"
            className="border focus:to-blue-700 border-blue-700"
            value={actors}
            onChange={(event) => {
              setActors(event.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="genre">Genre</label>
          <select
            name="genre"
            id=""
            required
            value={genre}
            onChange={(event) => {
              setGenre(event.target.value);
            }}
          >
            <option value="comedy">Comedy</option>
            <option value="scifi">Scifi</option>
            <option value="fantasy">Fantasy</option>
            <option value="drama">Drama</option>
            <option value="music">Music</option>
            <option value="adventure">Adventure</option>
            <option value="history">History</option>
            <option value="thriller">Thriller</option>
            <option value="animation">Animation</option>
            <option value="family">Family</option>
            <option value="biography">Biography</option>
          </select>
        </div>

        <div>
          {!isPending && (
            <button className="bg-movieDatabase-buttonPrimary p-2 text-white rounded hover:bg-movieDatabase-buttonPrimary-hover font-bold">
              Add
            </button>
          )}
          {isPending && (
            <button
              className="bg-movieDatabase-buttonPrimary p-2 text-white rounded hover:bg-movieDatabase-buttonPrimary-hover font-bold"
              disabled
            >
              Adding Movie..
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddMovie;

/*
- A form for adding new movies to the database.
- Includes fields for movie title, release date, plot, cast, and other relevant information.
- How to ensure the user selects genre where there are the following genres(Comedy, Fantasy, )
- How to have  a section only for selecting year.
- Handling negative value for the runtime. and greater than 1960 - 2020
- How to allow user to enter iamge.
- Impose limit of words to plot and other elements

import {useHistory} from "react-router-dom"
- How to to redirect a user back
*/
