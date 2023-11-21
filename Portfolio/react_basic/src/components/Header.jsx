import React from "react";
import '../App.css';
import Picture from "./Picture";
import { Link } from "react-router-dom";

function Header() {
    var name = "Demián";
    var lname = "Velasco";
    let greeting;
    const customStyle = {
      color: "navy",
      fontSize: "20px",
      border: "1px solid black",
    };

    var today = new Date();

    /*
    if (num % 2 === 0) customStyle.background = "yellow";
    else customStyle.background = "red";
    */

    var currentTime = today.getHours();

    if (currentTime < 12) {
        greeting = "Good morning";
        customStyle.background = "yellow";
    }
    else if (currentTime < 18) {
        greeting = "Good afternoon";
        customStyle.background = "aqua";
    }
    else {
        greeting = "Good night";
        customStyle.background = "darkblue";
        customStyle.color = "white";
    }
    

    return (
        <div>
            <h1 style={customStyle}>{greeting} world! My name is {name + " " + lname}</h1>
            <Picture />
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/directory">Directory</Link></li>
                    <li><Link to="/phonebook">Phone Book</Link></li>
                    <li><Link to="/agenda">Agenda</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;