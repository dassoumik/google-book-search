import React from "react";
// default context object with properties corresponding to Provider values

const BookDataContext = React.createContext({
//   display: false,
//   msg: "default value",
  bookData: ""
//   onClick: () => undefined
});

export default BookDataContext;
