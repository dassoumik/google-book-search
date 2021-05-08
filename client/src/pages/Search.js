import React, {useRef} from 'react'
import logo from '../logo.svg';
import Books from '../components/Books'

function Search() {
    const searchTerm = useRef();
    const handleSubmit = (e) => {
       e.preventDefault(); 
       const bookName = encodeURIComponent(searchTerm.current.value);
       console.log(bookName);

    }
    return (
        <div>
            <div className={"App-header"}>
        <img src={logo} className={"App-logo"} alt={"logo"} />
        <h2>Welcome to Book Search</h2>
        </div>
            <form className={"form-inline"}>
                
  <div className={"form-group mx-sm-3 mb-2"}>
    <label  className={"sr-only mt-3"}>Search Book</label>
    <input type={"text"} className={"form-control mt-2 mb-3"} id={"search-input"} placeholder={"Search Books..."} ref={searchTerm}/>
  </div>
  <button type={"submit"} className={"btn btn-primary mb-2"} onClick={handleSubmit}>Submit</button>
</form>
            
        <div>
            <Books/>
        </div>
        </div>

    )
}

export default Search
