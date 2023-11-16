//import logo from './logo.svg';
import React, { useState } from 'react';
import {BrowserRouter as Router, Route} from "react-dom";
import './App.css';
import Header from "./components/Header";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Directory from "./components/Directory";
//import Math from './components/Math';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function changeLoggedState() {
    setIsLoggedIn(!isLoggedIn);
  }

  return (
    <div className="App">
      <Header />
      {isLoggedIn ? <Directory listener={changeLoggedState}/> : <Login listener={changeLoggedState}/>}
      <Footer />
    </div>
  );
}

export default App;