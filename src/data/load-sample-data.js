import db from "./firebase";
import sampleData from "./sample-data.json";

async function loadSampleData() {
  sampleData.map(addBook);
}

async function addBook({ title, rating, releaseYear }) {
  try {
    const data = { title, rating, releaseYear };

    // Look up a book matching the title and release year.
    const snapshot = await db
      .collection("books")
      .where("title", "==", title)
      .where("releaseYear", "==", releaseYear)
      .get();

    // Create a doc reference that points to where this book is located in the DB - either a new
    // doc if it is not there, or the existing doc.
    let docRef;
    if (snapshot.empty) {
      docRef = db.collection("books").doc();
    } else {
      docRef = snapshot.docs[0].ref;
    }

    // Update the doc with the given data.
    await docRef.set(data);
  } catch (error) {
    console.log(error);
  }
}

export default loadSampleData;
