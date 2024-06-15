// import libraries
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";

// pages
import Add from "./auth/Add";
import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage";
import Create from "./auth/Create";

// loader
import Movie, { moviesLoader } from "./movie/Movie";
import MovieDetails, { movieDetailsLoader } from "./movie/MovieDetails";

// layout
import MovieLayout from "./layout/MovieLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />}></Route>
      <Route path="movies" element={<MovieLayout />}>
        <Route index element={<Movie />} loader={moviesLoader} />
        <Route path=":id" element={<MovieDetails />}  loader={movieDetailsLoader}/>
      </Route>
      <Route path="add" element={<Add />}></Route>
      <Route path="create" element={<Create />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Route>
  )
);
export default function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

/**
 * const getMovies = () => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText);
      console.log(data);
    } else if (request.readyState === 4) {
      console.log("could not fetch data");
    }
  });
  request.open("GET", "http://localhost:8000/movies");
  request.send();
};

// getMovies();

fetch("http://localhost:3000/movies")
  .then((response) => {
    console.log("resolved ", response);
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("rejected ", error);
  });
 */
