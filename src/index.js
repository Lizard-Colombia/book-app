import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
// import { usersCollection } from "./data/firebase";
import "./index.css";

ReactDOM.render(<App />, document.getElementById("root"));

// async function getAllUsers() {
//   try {
//     const snapshot = await usersCollection.get();
//     snapshot.forEach((doc) => {
//       console.log(doc.id);
//       console.log(doc.data());
//     });
//   } catch (error) {
//     console.error(error);
//   }
// }

// async function getUsersBooks() {
//   try {
//     const snapshot = await usersCollection
//       .doc("YfbZfUhWTPeOl1K7XvtAhYmXEtH3")
//       .collection("books")
//       .get();
//     snapshot.forEach((doc) => {
//       console.log(doc.id);
//       console.log(doc.data());
//     });
//   } catch (error) {
//     console.error(error);
//   }
// }

// getUsersBooks();
