import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

function Nav(props) {
  return (
    <nav className="nav">
      <Link className="nav__link" to="/account-page">
        {props.user ? "Account" : "Login"}
      </Link>{" "}
      |{" "}
      <Link className="nav__link" to="/book-page">
        All Books
      </Link>{" "}
      |{" "}
      <Link className="nav__link" to="/add-book-page">
        Add Book
      </Link>{" "}
      |{" "}
      <Link className="nav__link" to="/movie-page">
        All Movies
      </Link>{" "}
      |{" "}
      <Link className="nav__link" to="/add-movie-page">
        Add Movie
      </Link>
    </nav>
  );
}

export default Nav;
