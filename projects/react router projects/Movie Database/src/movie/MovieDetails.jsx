import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

export default function MovieDetails() {
  const { id } = useParams();
  const movieDetails = useLoaderData();
  return (
    <div>
      <h2>Movie Details For <span>{movieDetails.title}</span></h2>
    </div>
  );
}

export const movieDetailsLoader = async ({ params }) => {
  const {id} = params;

  const response = await fetch(`http://localhost:8000/movies/${id}`+ id) // ${movieId}

  return response.json();
};
