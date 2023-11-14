import React from "react"
import pi, { doublePi, squarePi, square } from "./modules/math"

function Math() {
    var num = 7;
    return(
        <div>
            <p>Value of PI is {pi}</p>
            <p>Double of PI is {doublePi()}</p>
            <p>Square of PI is {squarePi()}</p>
            <p>Square of {num} is {square(num)}</p>
        </div>
    );
}

export default Math;