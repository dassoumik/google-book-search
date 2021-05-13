import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import "../assets/images/bookshelf.jpg";
import Nav from "../components/Nav"

function Books() {


    return (
      <>
      <Nav type="books"/>
      <Container fluid>
        <Row>
            {/* <Jumbotron> */}
              {/* <h1>What Books Should I Read?</h1> */}
              <img src="../assets/images/bookshelf.jpg" height="50px" alt="bookshelf" style={{width: "100%", height: "10%"}}/>
            {/* </Jumbotron> */}
        </Row>
        <Row>
        </Row>
      </Container>
      </>
    );
  }


export default Books;
