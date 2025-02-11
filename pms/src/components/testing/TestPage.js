import React, { useState } from "react";
import GoalComponent from "./GoalComponent";

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

const TestPage = () => {
    return (
        <>
            <Link config={config}>Google</Link>
            <GoalComponent title={title} description={description} />
            <EmailInput />
        </>
    );
}

export default TestPage;