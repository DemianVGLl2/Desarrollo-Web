import React from "react";
import "./Card.css"
import Avatar from "./Avatar";

function Card(props) {
    return (
        <div className="card">
            <Avatar src={props.img}></Avatar>
            <h2>{props.name}</h2>
            <p>{props.phone}</p>
        </div>
    );
}

export default Card;