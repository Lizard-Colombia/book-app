import React, { useState } from "react";
import { Delete, Edit } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import ErrorMessage from "./error-message";
import { usersCollection } from "../data/firebase";
import "./movie.css";

function Movie(props) {
  const { id, data, userId } = props;
  const { title, rating, releaseYear, author, level, series, numberSeries, pages, review } = data;

  const ratingString = "⚜️".repeat(rating);
  // const ratingString = "⚜️".repeat(rating) + "🤍".repeat(5 - rating);

  const history = useHistory();
  const [isDeleting, setIsDeleting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const deleteMovie = async () => {
    setIsDeleting(true);
    setErrorMessage("");
    try {
      const docRef = usersCollection.doc(userId).collection("movies").doc(id);
      await docRef.delete();
    } catch (error) {
      console.error(error);
      setErrorMessage("Something went wrong while deleting. Please try again.");
      setIsDeleting(false);
    }
  };

  return (
    <div className="movie">
      <div className="movie__contents">
        <div className="movie__title">Title: {title}</div>
        <div className="movie__title">Author: {author}</div>
        <div className="movie__rating">{ratingString}</div>
        <div className="movie__year">{releaseYear}</div>

        <div className="movie__subtitle">Reading Level: {level}</div>
        <div className="movie__subtitle">Series? Y/N: {series}</div>
        <div className="movie__subtitle">Number in Series: {numberSeries}</div>
        <div className="movie__subtitle">Pages: {pages}</div>
        <div className="movie__review">Review: {review}</div>

        <div className="movie__review">{review ? review : "No review saved."}</div>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </div>
      <div>
        <button className="movie__button" disabled={isDeleting} onClick={deleteMovie}>
          <Delete />
        </button>
        <button className="movie__button" onClick={() => history.push(`/edit/${id}`)}>
          <Edit />
        </button>
      </div>
    </div>
  );
}

export default Movie;
