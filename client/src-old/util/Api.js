// import React from 'react';
import axios from 'axios';



   async function googleBookSearch(searchTerm) {
        console.log("in fetch" + searchTerm)
  await  axios.get({url: `https://www.googleapis.com/books/v1/volumes?q=search+${searchTerm}`})
             
    }


export default googleBookSearch;
