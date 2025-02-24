import React, { useState } from "react";


function Add(){
    const [enteredNumbers, setEnteredNumbers] = useState(
        {firstNumber: 0, secondNumber: 0}
    );


    // Convert inputs to numbers
    function changeFirstNumberHandler(event){
        setEnteredNumbers((prevNumbers) => ({
            firstNumber: +event.target.value,
            secondNumber: prevNumbers.secondNumber
        }));
    }
    function changeSecondNumberHandler(event){
        setEnteredNumbers((prevNumbers) => ({
            firstNumber: prevNumbers.firstNumber,
            secondNumber: +event.target.value
        }));
    }

    const result = enteredNumbers.firstNumber + enteredNumbers.secondNumber;    
    
    return (
        <p>
            <input type="number" onChange={changeFirstNumberHandler} /> +
            <input type="number" onChange={changeSecondNumberHandler} /> =
            {result}
        
        </p>   
    )
}

export default Add;