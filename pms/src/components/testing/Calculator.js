import React, { useState } from "react";
import Add from "./Add";


const Calculator = () => {
    return(
        <>
            <h1>Calculator</h1>
            <input type="text" placeholder="Enter first number" />+
            <input type="text" placeholder="Enter second number" />
            <button>Add</button>
            <p></p>
        </>
    )
}


export default Calculator;