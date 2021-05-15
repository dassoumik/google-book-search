import React, { useEffect, useState} from 'react';
import {Col, Row, Container, Jumbotron} from 'react-bootstrap';
import Nav from "../components/Nav";
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn"

function Saved() {
 // Setting our component's initial state
                  
  const [books, setBooks] = useState();

  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks();
  }, [books]);

  // Loads all books and sets them to books
  function loadBooks() {
    API.getSavedBooks()
      .then(res => 
        setBooks(res.data)
    )
    .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteBook(id) {
    API.deleteBook(id)
      .then(res => loadBooks())
      .catch(err => console.log(err));
  }

    return (
        <div>
          <Nav/>
            <img src="../assets/images/bookshelf.jpg" height="250px" width="100%" alt="bookshelf" />
            <Container className="ml-0 mr-0 pl-0 pr-0">

          <Row>    
          <Col >
            <Jumbotron className="bg-info p-3">
              <h3 className="text-center">Books On My List</h3>
            </Jumbotron>
            
            {books?.length ? (
              <>
                {books.map(book => {
                  return (
                <div className="container-fluid">
                <div className="d-flex row m-5 border border-dark roundedlg">
                <Row>
                  <Col className="mt-5 pl-5"><img src={book.image} height="200" width="200" alt="volume"/></Col>
                  <Col className="mt-1">
                  <dl>
                  <dt><a href={book.buyLink}>{book.title}</a></dt>
                  <dd>{book.author} </dd>
                  <dd>{book.description}</dd>
                  </dl>
                </Col>
                </Row>
                <Row>
                  <Col></Col>
                  <Col></Col> 
                  <Col></Col>
                  <Col></Col>
                  <Col className="mb-5 mt-4 d-flex flex-column ">
                  <div>
                    Price: <small>$</small>{book.price}
                  </div>
                  <DeleteBtn onClick={() => deleteBook(book._id)} />
                  </Col>
                </Row>
                </div>
              </div>)})}
            </>)       
 : (
      <h3 className="mt-4 text-center" style={{color:"red"}}>No Results to Display</h3>
    )}  
        </Col>
      </Row>
    </Container>
   </div>

    )}

export default Saved
