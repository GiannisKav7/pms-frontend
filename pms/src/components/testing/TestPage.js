import React, { useState } from "react";
import GoalComponent from "./GoalComponent";
import TextInput from "../customElements/TextInput";
import Add from "./Add";
import NumberInput from "../customElements/NumberInput";

const goalData1 = { title: "Finish the course", description: "Notes notes notes" };
const { title, description } = goalData1;

function Link({ children, config }) {
    return <a {...config} target="_blank" rel="noopener noreferrer">{children}</a>;
}

function EmailInput() {
    const [errorMessage, setErrorMessage] = useState('');

    function evaluateEmail(event) {
        const enteredEmail = event.target.value;
        if (enteredEmail.trim() === '' || !enteredEmail.includes('@')) {
            setErrorMessage('The entered email address is invalid.');
        } else {
            setErrorMessage('');
        }
    }

    return (
        <div>
            <input placeholder="Your email" type="email" onBlur={evaluateEmail} />
            <p>{errorMessage}</p>
        </div>
    );
}

const config = { href: 'https://some-site.com', download: true };

// Combined state objects
function LoginForm(){
    const [userData, setUserData] = useState({ email: '', password: '' });

    function emailEnteredHandler(event){
        setUserData((prevState) => ({
           email: event.target.value,
           password: prevState.password 
        }));
    }

    function passwordEnteredHandler(event){
        setUserData((prevState) => ({
            email: prevState.email,
            password: event.target.value
        }));
    }

    return (
        <form>
            <input type="email" placeholder="Email" onChange={emailEnteredHandler} />
            <input type="password" placeholder="Password" onChange={passwordEnteredHandler} />
        </form>
    );
}

function NewsletterField(){
    const [email, setEmail] = useState('');

    function emailEnteredHandler(event){
        setEmail(event.target.value);
    }

    function clearInputHandler(){
        setEmail(''); // reset email input (back to an empty string)
    }

    return (
        <>
            <input type="email" placeholder="Email" value={email} onChange={emailEnteredHandler} />
            <button onClick={clearInputHandler}>Clear</button>
        </>
    );

}

// Lifting State Up
// This problem can be solved by lifting state up. When lifting state up, the state is not
// managed in either of the two components that use it—neither in Overview, which
// reads the state, nor in SearchBar, which sets the state—but in a shared ancestor
// component instead. To be precise, it is managed in the closest shared ancestor
// component
function SearchBar(props){
    return <input type="search" placeholder="Search" onChange={props.onUpdateSearch}></input>;
}

function Overview ({currentTerm}){
    return <p>You are currently searching for: {currentTerm}</p>;
}

function SearchAncestor(){
    const [searchTerm, setSearchTerm] = useState('');

    function updateSearchTermHandler(event){ 
        setSearchTerm(event.target.value);
    }

    return(
        <>
            <SearchBar onUpdateSearch={updateSearchTermHandler} />
            <Overview currentTerm={searchTerm} />
        </>
    );

}


const TestPage = () => {
    return (
        <>
            <TextInput />
            <NumberInput />
            <Add/>
        </>
    );
}

export default TestPage;