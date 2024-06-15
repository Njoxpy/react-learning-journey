import { Outlet, useParams } from "react-router-dom";

const MovieLayout = () => {
  const { id } = useParams;
  return (
    <div className="p-8">
      <p>{id}</p>
      <Outlet />
    </div>
  );
};

export default MovieLayout;

/* 
- Individual pages for each movie.
- Display detailed information about the movie, such as the plot, cast, director, and ratings.
- Uses dynamic routing to display content based on the movie ID or slug.
*/
