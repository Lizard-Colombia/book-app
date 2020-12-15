import React from "react";
import useSaveMovie from "../hooks/use-save-movie";
import "./add-movie.css";
import MovieForm from "./movie-form";

function AddMovie(props) {
  // console.log(props.user);
  const userId = props.user.uid;
  const [saveMovie, isSaving, formMessage] = useSaveMovie();

  const onMovieSumbit = async (title, rating, releaseYear, author, level, series, numberSeries, pages, review) => {
    saveMovie({ title, rating, releaseYear, author, level, series, numberSeries, pages, review }, userId);
  };

  return (
    <div className="add-container">
      <h1>Add Book</h1>
      <MovieForm onSubmit={onMovieSumbit} isSaving={isSaving} message={formMessage} />
    </div>
  );
}

export default AddMovie;
