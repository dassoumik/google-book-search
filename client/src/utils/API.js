import axios from "axios";

export default {
  // Gets all books
  getBooks: (query) => {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=" + ${query}`);
  },
  // Gets the book with the given id
  getBook: function(id) {
    console.log(id);
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: async function(bookData) {
    console.log(bookData);
    let res = await axios.post("/api/books", bookData);
    return res.status;
  },
  getSearchPage: (searchTerm) => {
    axios.get("/search/" + searchTerm)
      .then(response => {
        console.log(response.data);
        return(response.data);
      })
    // <Redirect push to="/search"/>
  },
  // Gets the saved books with the 
  getSavedBooks: () => {
    return axios.get("/api/books/");
  },
  
};
