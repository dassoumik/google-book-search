import React from "react";
import { Row, Container } from "../components/Grid";
import "../assets/images/bookshelf.jpg";
import Nav from "../components/Nav"

function Books() {

    return (
      <>
      <Nav />
      <Container fluid>
        <Row>
          <img src="../assets/images/bookshelf.jpg" height="50px" alt="bookshelf" style={{width: "100%", height: "10%"}}/>
        </Row>
        <Row>
        </Row>
      </Container>
      </>
    );
  }


export default Books;
