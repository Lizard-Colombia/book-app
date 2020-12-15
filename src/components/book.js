import React, { useState } from "react";
import { Delete, Edit } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import ErrorMessage from "./error-message";
import { usersCollection } from "../data/firebase";
import "./book.css";
https://book-app-puce.vercel.app
function Book(props) {
  const { id, data, userId } = props;
  const { title, rating, releaseYear, author, level, series, numberSeries, pages, review } = data;

  const ratingString = "⚜️".repeat(rating);
  // const ratingString = "⚜️".repeat(rating) + "🤍".repeat(5 - rating);

  const history = useHistory();
  const [isDeleting, setIsDeleting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const deleteBook = async () => {
    setIsDeleting(true);
    setErrorMessage("");
    try {
      const docRef = usersCollection.doc(userId).collection("books").doc(id);
      await docRef.delete();
    } catch (error) {
      console.error(error);
      setErrorMessage("Something went wrong while deleting. Please try again.");
      setIsDeleting(false);
    }
  };

  return (
    <div className="book">
      <div className="book__contents">
        <div className="book__title">Title: {title}</div>
        <div className="book__title">Author: {author}</div>
        <div className="book__rating">{ratingString}</div>
        <div className="book__year">{releaseYear}</div>

        <div className="book__subtitle">Reading Level: {level}</div>
        <div className="book__subtitle">Series? {series == true ? "Yes" : "No"} </div>


        <div className="book__subtitle">Number in Series: {numberSeries}</div>
        <div className="book__subtitle">Pages: {pages}</div>
        <div className="book__review">Review: {review}</div>

        <div className="book__review">{review ? review : "No review saved."}</div>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </div>
      <div>
        <button className="book__button" disabled={isDeleting} onClick={deleteBook}>
          <Delete />
        </button>
        <button className="book__button" onClick={() => history.push(`/edit/${id}`)}>
          <Edit />
        </button>
      </div>
    </div>
  );
}

export default Book;
