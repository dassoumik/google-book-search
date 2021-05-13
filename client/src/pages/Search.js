import React from 'react';
import {Col} from 'react-bootstrap';
import Nav from "../components/Nav";
import API from "../utils/API";


function Search(req, res) {
    let searchTerm = req.params.id;
  let bookData = [];

    const bookList = API.getBooks(searchTerm)
    async function extractData() {
    bookData =   await bookList.then(res => res.data.items) 
    // setBooks(bookData);
    // setPage("search");
    console.log(bookData);
   }
   extractData(); 
 
   
 

    return (
        <div>
            {/* {bookData.map(item => {
              console.log(item.volumeInfo, item.searchInfo);
            return (<div className="container-fluid">
                <div className="d-flex row">
                    <img src={item.volumeInfo.imageLinks.smallThumbnail} alt="volume-image"/>
                </div>
                <div className="d-flex row">
                    <Col>{item.volumeInfo.readingModes.title}</Col>
                </div>
            </div>)
            })} */}
            <Nav type="search" bookData={bookData}/>
        </div>
    )
}

export default Search
