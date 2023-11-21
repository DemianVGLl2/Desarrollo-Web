//import logo from './logo.svg';
import React, { useState } from 'react'; //Change state for reactive components
import { Routes, Route } from "react-router-dom"; //Navigation
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

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Login listener={changeLoggedState} />} />
        <Route path='/directory' element={<Directory listener={changeLoggedState} />} />
        <Route path='/phonebook' element={<PhoneBook />} />
        <Route path='/agenda' element={<Agenda/>} />
      </Routes>
      {/*{isLoggedIn ? <Directory listener={changeLoggedState}/> : <Login listener={changeLoggedState}/>}*/}
      <Footer />
    </div>
  );
}

export default App;