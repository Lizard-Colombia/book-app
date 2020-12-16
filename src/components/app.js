import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import AddBookPage from "../pages/add-book-page";
import EditBookPage from "../pages/edit-book-page";
import AccountPage from "../pages/account-page";
import BooksPage from "../pages/book-page";
import AddMoviePage from "../pages/add-movie-page";
import EditMoviePage from "../pages/edit-movie-page";
import MoviesPage from "../pages/movies-page";
import NotFoundPage from "../pages/not-found-page";
import { auth } from "../data/firebase";
import Nav from "./nav";

function AuthenticatedRoute(props) {
  const { isAuthenticated, children, ...routeProps } = props;
  return <Route {...routeProps}>{isAuthenticated ? children : <Redirect to="/account" />}</Route>;
}

function App() {
  const [user, setUser] = useState(null);
  const isAuthenticated = user !== null;

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);

  return (
    <BrowserRouter>
      <Nav user={user} />

      <Switch>
        <Route path="/account-page">
          <AccountPage user={user} />
        </Route>

        <AuthenticatedRoute path="/book-page" exact isAuthenticated={isAuthenticated}>
          <BooksPage user={user} />
        </AuthenticatedRoute>

        <AuthenticatedRoute path="/add-book-page" isAuthenticated={isAuthenticated}>
          <AddBookPage user={user} />
        </AuthenticatedRoute>

        <AuthenticatedRoute path="/edit/:id" isAuthenticated={isAuthenticated}>
          <EditBookPage user={user} />
        </AuthenticatedRoute>

        <AuthenticatedRoute path="/movie-page" exact isAuthenticated={isAuthenticated}>
          <MoviesPage user={user} />
        </AuthenticatedRoute>

        <AuthenticatedRoute path="/add-movie-page" isAuthenticated={isAuthenticated}>
          <AddMoviePage user={user} />
        </AuthenticatedRoute>

        <AuthenticatedRoute path="/edit/:id" isAuthenticated={isAuthenticated}>
          <EditMoviePage user={user} />
        </AuthenticatedRoute>

        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
