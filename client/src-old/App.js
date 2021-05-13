import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from 'react-router-dom';
import Search from './pages/Search.js';
import Saved from './pages/Saved.js';


function App() {
  return (


    <div className="App">
      <Switch>
      
      <Route exact path="/" component={Search}/>
      <Route exact path="/saved" component={Saved}/>
      <Route exact path="/search" component={Search}/>

    
      </Switch> 
     
    </div>
  );
}


export default App;
