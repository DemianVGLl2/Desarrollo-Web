import React from "react";
import '../App.css';
import Picture from "./Picture";
import { Link } from "react-router-dom";

function Header(props) {
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

    function logOut() {
        props.listener();
    };

    return (
        <div>
            <div className="container">
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <ul className="navbar-nav">
                                <li className="nav-item"><Link to="/directory" className="nav-link">Directory</Link></li>
                                <li className="nav-item"><Link to="/phonebook" className="nav-link">Phone Book</Link></li>
                                <li className="nav-item"><Link to="/agenda" className="nav-link">Agenda</Link></li>
                                {!props.status ? <li className="nav-item"><Link to="/" className="nav-link">Login</Link></li> : <li className="nav-item"><Link to="/" className="btn btn-outline-success" onClick={logOut}>Logout</Link></li>}
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <h1 style={customStyle}>{greeting} world! My name is {name + " " + lname}</h1>
            <Picture />
        </div>
    );
}

export default Header;