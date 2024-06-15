import { NavLink, useLoaderData } from "react-router-dom";

const Movie = () => {

  const movies = useLoaderData();  
  return (
    <div className="p-8">
      <h1 className="font-bold text-center p-2">Movies Available</h1>
      {movies.map((movie) => (
        <div key={movie.id}>
            <div className="bg-movieDatabase-backgroundCard border-movieDatabase-secondary hover:shadow-lg">
                {<NavLink to={movie.id.toString()} className="text-movieDatabase-textPrimary">{movie.title}</NavLink>}
            </div>
        </div>
      ))}
    </div>
  );
};

export default Movie;

export const moviesLoader = async() => {
    const response = await fetch("http://localhost:8000/movies")

    return response.json();
}
/*
const request = new XMLHttpRequest();
request.addEventListener("readystatechange")
request.open("GET", "http://localhost:3000/movies")
request.send()
 */
