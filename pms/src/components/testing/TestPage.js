import React from "react";
import GoalComponent from "./GoalComponent";

const goalData1 = { title: "Finish the course", description: "Notes notes notes" };
const { title, description } = goalData1;


function Link({ children, config }) {
    return <a {...config} target="_blank" rel="noopener noreferrer">{children}</a>;
}

const config = { href: 'https://some-site.com', download: true };

const TestPage = () => {
    return (
        <>
            <Link config={config}>Google</Link>
            <GoalComponent title={title} description={description} />
        </>
    );
}

export default TestPage;