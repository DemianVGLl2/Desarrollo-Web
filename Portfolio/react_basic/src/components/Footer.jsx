import React from "react";
import '../App.css';

function Footer() {
    var today = new Date();

    return (
        <div>
            <p>Copyright {today.getFullYear()}</p>
        </div>
    );
}

export default Footer;