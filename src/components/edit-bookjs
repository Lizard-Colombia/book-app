import React from "react";
import useBook from "../hooks/use-book";
import useSaveBook from "../hooks/use-save-book";
import "./edit-book.css";
import ErrorMessage from "./error-message";
import LoadingSpinner from "./loading-spinner";
import BookForm from "./book-form";

function EditBook(props) {
  // console.log(props.user);
const bookId = props.id;
const userId = props.user.uid;

  const [bookData, isLoading, errorMessage] = useBook(userId, bookId);
  const [saveBook, isSaving, formMessage] = useSaveBook();

  const onBookSubmit = async (title, rating, releaseYear, author, level, series, numberSeries, pages, review) => {
    saveBook({ title, rating, releaseYear, author, level, series, numberSeries, pages, review }, userId, bookId);
  };

  return (
    <div className="edit-container">
      <h2>Edit Book</h2>
      {isLoading && (
        <LoadingSpinner
          size="50px"
          spinnerColor="white"
          backgroundColor="rgb(255, 255, 255, 0.2)"
        />
      )}
      {errorMessage && <ErrorMessage displayAsCard>{errorMessage}</ErrorMessage>}
      {bookData && (
        <BookForm
          initialState={bookData}
          onSubmit={onBookSubmit}
          isSaving={isSaving}
          message={formMessage}
        />
      )}
    </div>
  );
}

export default EditBook;
