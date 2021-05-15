import React from "react";
import {Col, Row} from 'react-bootstrap';
import "./style.css";
import {IoSaveSharp} from "react-icons/io5"
import API from "../../utils/API";

// This file exports both the List and ListItem components

function List({item}) {
  console.log("in List", item.volumeInfo?.title);
  console.log(typeof(item));
  let bookData = {id:"",title:"",image: "",author:[],description:"",buyLink:"",price:"",};
  let bookArray = new Array;
  // let image;
  // let title, buyLink, retailPrice, description;
  // let authors = []; 
  if (typeof(item) === "string") {
  const element = JSON.parse(JSON.stringify(item));
   bookData.image = element.volumeInfo.imageLinks.smallThumbnail;
   bookData.title = element.volumeInfo.title;}
  else if (typeof(item) === "object") {
     bookData.image = item.volumeInfo?.imageLinks?.smallThumbnail;
     bookData.title = item.volumeInfo?.title;
     bookData.buyLink = item.saleInfo?.buyLink;
     bookData.price = item.saleInfo?.retailPrice?.amount;
     bookData.description= item.volumeInfo?.description;
     bookData.author.push( item.volumeInfo?.authors);
     bookData.id = item.id;
     console.log(item.id);
     bookArray.push(bookData);

  }
  let {image, title, buyLink, price, description, author, id} = bookData;
  const saveBook = (e) => {
    e.preventDefault();
    console.log(e.target.id);
    let bookSaveData ;
    bookArray.forEach(book => {
      if (book.id === e.target.id) bookSaveData = book;
    })
    console.log(bookSaveData);
    API.saveBook(bookSaveData);
  }

  // document.addEventListener("click", saveBook);

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
          <dd>{author} </dd>
          <dd>{description}</dd>
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
            Price: <small>$</small>{price}
        </div>
        <button className="pl-5" id={id} onClick={saveBook}><IoSaveSharp className="pl-5"   /></button>
        </Col>
        </Row>
    </div>
</div>
  );
}

export default List;

// export function ListItem({ children }) {
//   return <li className="list-group-item">{children}</li>;
// }
