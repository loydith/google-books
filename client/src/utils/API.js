import axios from "axios";

export default {
  // Gets books from the Google API
  getBooks: function(q) {
    // return axios.get("/api/google", { params: { q: "title:" + q } });
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + q + "&maxResults=20");

  },
  // Gets all saved books as json
  getSavedBooks: function() {
    return axios.get("/api/books");
  },
  // Deletes book from the database with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};