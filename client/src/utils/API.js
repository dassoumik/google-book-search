import axios from "axios";
import React from "react";
import {Redirect} from "react-router-dom";
import Search from "../pages/Search";

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
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  getSearchPage: (searchTerm) => {
    // return axios.get("/search");
    // render()
//  return <Search bookData={bookData}/> 
console.log(searchTerm);
 axios.get("/search/" + searchTerm)
      .then(response => {
        console.log(response.data);
        return(response.data);
      })

    // <Redirect push to="/search"/>
  }
  
};
