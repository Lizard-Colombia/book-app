import React from "react";
import useSaveBook from "../hooks/use-save-book";
import "./add-book.css";
import BookForm from "./book-form";

function AddBook(props) {
  // console.log(props.user);
  const userId = props.user.uid;
  const [saveBook, isSaving, formMessage] = useSaveBook();

  const onBookSumbit = async (title, rating, releaseYear, author, level, series, numberSeries, pages, review) => {
    saveBook({ title, rating, releaseYear, author, level, series, numberSeries, pages, review }, userId);
  };

  return (
    <div className="add-container">
      <h1>Add Book</h1>
      <BookForm onSubmit={onBookSumbit} isSaving={isSaving} message={formMessage} />
    </div>
  );
}

export default AddBook;
