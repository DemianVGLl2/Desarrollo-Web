import React from "react";
import "./Card.css"
import Avatar from "./Avatar";

function Card(props) {
    return (
        <div className="card">
            <div className="top">
                <h2 className="name">{props.name}</h2>
                <Avatar src={props.img}></Avatar>
            </div>
            <div className="bottom">
                <p className="info">{props.phone}</p>
            </div>
        </div>
    );
}

export default Card;