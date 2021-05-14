import React from "react";
import {Col, Row} from 'react-bootstrap';
import "./style.css";
import {IoSaveSharp} from "react-icons/io5"

// This file exports both the List and ListItem components

function List({item}) {
  console.log("in List", item.volumeInfo?.title);
  console.log(typeof(item));
  let image;
  let title, buyLink, retailPrice, description;
  let authors = []; 
  if (typeof(item) === "string") {
  const element = JSON.parse(JSON.stringify(item));
   image = element.volumeInfo.imageLinks.smallThumbnail;
   title = element.volumeInfo.title;}
  else if (typeof(item) === "object") {
     image = item.volumeInfo?.imageLinks?.smallThumbnail;
     title = item.volumeInfo?.title;
     buyLink = item.saleInfo?.buyLink;
     retailPrice = item.saleInfo?.retailPrice?.amount;
     description= item.volumeInfo?.description;
     authors.push( item.volumeInfo?.authors);


  }
  return (
    <div className="container-fluid">
    <div className="d-flex row m-5 border border-dark roundedlg">
      <Row>
        <Col className="mt-5 pl-5"><img src={image} height="200" width="200" alt="volume"/></Col>
    {/* </div> */}
    {/* <div className="d-flex row"> */}
        <Col className="mt-1">
          <dl>
          <dt><a href={buyLink}>{title}</a></dt>
          <dd>{authors} </dd>
          <dd>{description}</dd>
          </dl>
        </Col>
        </Row>
        <Row>
         <Col></Col>
         <Col></Col> 
         <Col></Col>
         <Col></Col>
        <Col className="mb-5 mt-4 d-flex flex-column "><div>Price: <small>$</small>{retailPrice}</div><button className="pl-5"><IoSaveSharp className="pl-5"/></button></Col>
        </Row>
    </div>
</div>
  );
}

export default List;

// export function ListItem({ children }) {
//   return <li className="list-group-item">{children}</li>;
// }
