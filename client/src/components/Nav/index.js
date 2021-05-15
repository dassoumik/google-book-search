import React, {useRef} from "react";
import {FcGoogle, FcSearch} from "react-icons/fc";
import { useHistory} from "react-router-dom";
import { InputGroup, FormControl, Button} from 'react-bootstrap';


function Nav(props) {
  const searchTerm = useRef();

  let history = useHistory();
  function renderSearch(e) {
    e.preventDefault();
     history.push(`/search/${searchTerm.current.value}`)
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="d-flex flex-row navbar-nav">
      <a className="navbar-brand" href="/">
      <span ><FcGoogle style={{marginLeft: "30px", marginRight: "5px", marginBottom: "3px"}}/></span>
      <span> Book Search </span> 
      </a>
      </div>
      <div className="ml-5 d-flex flex-row mr-5 navbar-nav ">
      <div className="input-group">
      <InputGroup className="mt-3 mb-3" >
    <FormControl
      placeholder="Search..."
      ref={searchTerm}
      aria-label="Search"
      aria-describedby="basic-addon2"
      onSubmit={renderSearch}
    />
    <InputGroup.Append>
      <Button variant="outline-info" type="submit"  onClick={renderSearch}><FcSearch/></Button>
    </InputGroup.Append>
    </InputGroup> 
      </div>
      </div>
      <div className="d-flex flex-row-reverse navbar-nav ml-auto" style={{marginLeft: "auto", marginRight:"40px"}}>
      <a className="ml-5 mr-5 pl-5 pr-5 text-decoration-none" href="/saved">Saved</a>
     </div>
       </nav>
  )
}

export default Nav ;
