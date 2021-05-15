import React, {useState} from "react";
import {Col, Row, Button} from 'react-bootstrap';
import "./style.css";
import {IoSaveSharp} from "react-icons/io5"
import API from "../../utils/API";
import Notification from "../Notification";
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css/animate.min.css';

// This file exports both the List and ListItem components

function List({item}) {
  const [notifyFlag, setNotifyFlag] = useState(false);
  let bookData = {id:"",title:"",image: "",author:[],description:"",buyLink:"",price:"",};
  let bookArray = new Array();
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
     bookArray.push(bookData);

  }
  let {image, title, buyLink, price, description, author, id} = bookData;
  const saveBook = (e) => {
    e.preventDefault();
    let bookSaveData ;
    bookArray.forEach(book => {
      if (book.id === e.target.id) bookSaveData = book;
    })
    API.saveBook(bookSaveData)
      .then(res => res === 200 ? showNotification() : null);
  }

  const showNotification = () => {
    setNotifyFlag(true);
    setTimeout(function() {
      setNotifyFlag(false);
    }, 3000);
  }

  return (
    <div className="container-fluid">
    <div className="d-flex row m-5 border border-dark roundedlg">
      <Row>
        <Col className="mt-5 pl-5"><img src={image} height="200" width="200" alt="volume"/></Col>
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
        <Button className="btn button bg-light outline-info box-border " style={{fontWeight: "700"}} variant="outline-info" id={id} onClick={saveBook} ><IoSaveSharp className="pl-5 mr-5 ml-2" style={{color: "green"}} /> SAVE</Button>
        </Col>
        </Row>
    </div>
    {notifyFlag ? <Notification />: null}
</div>
  );
}

export default List;

