// import { Checkbox } from "@material-ui/core";
import React, { useState } from "react";
import ErrorMessage from "./error-message";
import "./movie-form.css";

function MovieForm(props) {
  const { initialState = {}, message, isSaving, onSubmit } = props;

  if (initialState.title === undefined) initialState.title = "";
  if (initialState.author === undefined) initialState.author = "";
  if (initialState.rating === undefined) initialState.rating = 3;
  if (initialState.releaseYear === undefined) initialState.releaseYear = 2020;
  if (initialState.level === undefined) initialState.level = "";
  if (initialState.series === undefined) initialState.series = "";
  if (initialState.numberSeries === undefined) initialState.numberSeries = 1;
  if (initialState.pages === undefined) initialState.pages = 1;
  if (initialState.review === undefined) initialState.review = "";

  const [title, setTitle] = useState(initialState.title);
  const [author, setAuthor] = useState(initialState.author);
  const [rating, setRating] = useState(initialState.rating);
  const [releaseYear, setReleaseYear] = useState(initialState.releaseYear);
  const [level, setLevel] = useState(initialState.level);
  const [series, setSeries] = useState(initialState.series);
  const [numberSeries, setNumberSeries] = useState(initialState.numberSeries);
  const [pages, setPages] = useState(initialState.pages);
  const [review, setReview] = useState(initialState.review);

  const [errorMessage, setErrorMessage] = useState("");

  const onTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const onAuthorChange = (event) => {
    setAuthor(event.target.value);
  };
  const onRatingChange = (event) => {
    setRating(event.target.value);
  };
  const onYearReleasedChange = (event) => {
    setReleaseYear(event.target.value);
  };

  const onLevelChange = (event) => {
    setLevel(event.target.value);
  };

  const onSeriesChange = (event) => {
    setSeries(event.target.value);
  };

  const onNumberSeriesChange = (event) => {
    setNumberSeries(event.target.value);
  };

  const onPagesChange = (event) => {
    setPages(event.target.value);
  };

  const onReviewChange = (event) => {
    setReview(event.target.value);
  };

 
  const onMovieSumbit = async (event) => {
    if (title === ""){
      setErrorMessage("You must provide a title.");
      return;
    }
    event.preventDefault();
      
    onSubmit(title, rating, releaseYear, author, level, series, numberSeries, pages, review);
  };
    

  return (
    <form className="movie-form" onSubmit={onMovieSumbit}>
      <h2 className="movie-form__title">Book Details</h2>
      {message && <p className="movie-form__message">{message}</p>}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <fieldset className="movie-form__controls" disabled={isSaving}>

   {/* Title */}
        <label className="movie-form__label">Book Title:</label>
                <input className="movie-form__input" type="text" value={title} onChange={onTitleChange} />

  {/* Author */}
        <label className="movie-form__label">Author:</label> 
                <input className="movie-form__input" type="text" value={author} onChange={onAuthorChange} /> 

   {/*Rating  */}
        <label className="movie-form__label">Rating:</label>
          <input
          className="movie-form__input"
          type="number"
          value={rating}
          onChange={onRatingChange}
        />

   {/* Year */}
        <label className="movie-form__label">Year: </label>
        <input
          className="movie-form__input"
          type="number"
          value={releaseYear}
          onChange={onYearReleasedChange}
        />
  

  {/* Level */}
        <label className="movie-form__label">Book Level:</label>
                <input className="movie-form__input" type="text" value={level} onChange={onLevelChange} />

  {/* Series */}
        <label className="movie-form__label">Series?</label>
                <input className="movie-form__input" type="text" value={series} onChange={onSeriesChange} />

   {/* numberSeries */}
        <label className="movie-form__label">Number in series:</label>
                <input className="movie-form__input" type="number" value={numberSeries} onChange={onNumberSeriesChange} />

  {/* Pages */}
        <label className="movie-form__label">Total Pages:</label>
                <input className="movie-form__input" type="number" value={pages} onChange={onPagesChange} />

  {/* Review */}
        <label className="movie-form__label">Book Review:</label>
                <input className="movie-form__input" type="text" value={review} onChange={onReviewChange} />

  {/* SAVE BUTTON */}
        <input
          className="movie-form__submit"
          type="submit"
          value={isSaving ? "Saving..." : "Save"}
        />
        
      </fieldset>
    </form>
  );
}

export default MovieForm;
