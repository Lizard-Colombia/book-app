import { useState, useEffect } from "react";
import { usersCollection } from "../data/firebase";

function useAllBooks(userId) {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setIsLoading(true);

    const onNext = (snapshot) => {
      setIsLoading(false);
      const docs = snapshot.docs;
      setBooks(docs);
    };

    const onError = (error) => {
      setIsLoading(false);
      setErrorMessage("There was a problem loading your book ratings. Please try again.");
      console.error(error);
    };
const unsubscribe = usersCollection.doc(userId).collection("books").orderBy("title", "desc").onSnapshot(onNext, onError);
    return unsubscribe;
  }, []);

  return [books, isLoading, errorMessage];
}

export default useAllBooks;
