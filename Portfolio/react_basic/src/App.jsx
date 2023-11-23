//import logo from './logo.svg';
import React, { useState } from 'react'; //Change state for reactive components
import { Routes, Route, Navigate } from "react-router-dom"; //Navigation
import './App.css';
import Header from "./components/Header";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Directory from "./components/Directory";
//import Math from './components/Math';
import PhoneBook from './components/PhoneBook';
import Agenda from './components/Agenda';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function changeLoggedState() {
    setIsLoggedIn(!isLoggedIn);
  }

  function CheckLogStatus(props) {
    return isLoggedIn ? <props.component status={isLoggedIn} listener={changeLoggedState}/> : <Navigate to="/"/>;
  }

  return (
    <div className="App container">
      <CheckLogStatus component={Header}/>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Navigate to="/directory"/> : <Login listener={changeLoggedState}/>} />
        <Route path='/directory' element={<CheckLogStatus component={Directory}/>} />
        <Route path='/phonebook' element={<CheckLogStatus component={PhoneBook}/>} />
        <Route path='/agenda' element={<CheckLogStatus component={Agenda}/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;