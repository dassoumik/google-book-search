import React, {useEffect, useState} from 'react';
import Nav from "../components/Nav";
import API from "../utils/API";
import List from "../components/List"

function Search(props) {
  const {id} = props.match.params;
const [listData, setListData] = useState();

  const initiateSearch = (id) => {
    // let bookData;
    const bookList = API.getBooks(id) 
    async function extractData() {
     const bookData =   await bookList.then(res => res.data.items) 
    console.log(bookData);
    console.log(typeof(bookData));
    setListData(JSON.parse(JSON.stringify(bookData)));
    return bookData;
}
const data = extractData(); 
return data;
  
}

useEffect(() => {
   initiateSearch(id);
 }, [id])

    return (
        <div>
          <Nav/>
          <div>
            {listData?.length ?     
            listData.map(item => 
               <List item={item} key={item.id}/>
          )
        : <div>No Data to display</div>}
        </div>
        </div>
    )
}

export default Search
