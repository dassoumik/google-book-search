import React, {useState, useRef, createContext} from "react";
import {FcGoogle, FcSearch} from "react-icons/fc";
import Books from "../../pages/Books";
import API from "../../utils/API";
import Search from "../../pages/Search";
import {Redirect, useHistory, Switch, BrowserRouter as Router, Route} from "react-router-dom";
import BookDataContext from "../../utils/BookDataContext";
import {Col} from 'react-bootstrap';


// export default BookDataContext = createContext();

function Nav() {
  const searchTerm = useRef();

  let searchContext = React.createContext(searchTerm);
  const [books, setBooks] = useState();
  // const [page, setPage] = useState(type);
  let history = useHistory();
  // const [redirect, setRedirect] = useState(false);
  let bookData = [];
  const initiateSearch = (e) => {
    e.preventDefault();
   console.log(searchTerm.current.value); 
   const bookList = API.getBooks(searchTerm.current.value)
   async function extractData() {
   bookData =   await bookList.then(res => res.data.items) 
   setBooks(bookData);
  //  setPage("search");
   console.log(bookData);
  //  API.getSearchPage(bookData)

   }
  extractData(); 

  }

  function renderSearch(e) {
    e.preventDefault();
    console.log(searchTerm.current.value);
    // return(
    // <div>
    {/* <searchContext.Provider value={searchTerm.current.value}/> */}
     history.push(`/search/${searchTerm.current.value}`)
    {/* <Search/> */}
    {/* <searchContext.Provider/> */}
    {/* </div> */}
    {/* ) */}
     
    {/* <Router>
    <Switch>
       <Route exact path="/search" component={() => {<Search searchTerm={searchTerm.current.value}/>} }/>
    </Switch>
    </Router> */}
    
    

  }

  
    // {redirect ? <Redirect to="/Search"/> : null}
    // <BookDataContext.provider value={bookData}>
    // {switch (type ) {
    //   case "books":

        return (

 
  
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="d-flex flex-row navbar-nav">
      <a className="navbar-brand" href="/">
      <span ><FcGoogle style={{marginLeft: "30px", marginRight: "5px"}}/></span>
      <span> Book Search </span> 
      </a>
      </div>
      <div className="ml-5 d-flex flex-row mr-5 navbar-nav ">
      <div className="input-group">
      <form className="form-outline pt-4" onSubmit={renderSearch}>
      <input type="search" id="form1" className="form-control" placeholder="Search..." ref={searchTerm} />
      {/* <label className="form-label" for="form1">Search...</label> */}
      <a href="/search"> <button type="submit" href="/search">Search</button></a>
      </form>
      </div>
      </div>
      <div className="d-flex flex-row-reverse navbar-nav ml-auto" style={{marginLeft: "auto", marginRight:"40px"}}>
      <a className="ml-5 mr-5 pl-5 pr-5 text-decoration-none" href="/saved">Saved</a>
     </div>
        {/* {bookData => bookData}
      </BookDataContext.provider> */}
     
       </nav>
      
      )
    //   case ("search"):
    //     return(
    //       <div>
    //         {bookData.map(item => {
    //           console.log(item.volumeInfo, item.searchInfo);
    //         return (<div className="container-fluid">
    //             <div className="d-flex row">
    //                 <img src={item.volumeInfo.imageLinks.smallThumbnail} alt="volume-image"/>
    //             </div>
    //             <div className="d-flex row">
    //                 <Col>{item.volumeInfo.readingModes.title}</Col>
    //             </div>
    //         </div>)
    //         })}

    //     </div>
    //     )
    //   }
    //     if (page) {
    //       return (page);
    // }
  // }
}

export default Nav ;
