import React from "react";
import { Helmet } from "react-helmet";
import BookListing from "../components/book-listing";

function BooksPage(props) {
  return (
    <main>
      <Helmet>
        <title>Books</title>
      </Helmet>
      <BookListing {...props}/>
    </main>
  );
}

export default BooksPage;
