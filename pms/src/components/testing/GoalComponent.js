import React from "react";

function GoalComponent({title, description}) {
    return (
        <li>
            <article>
                <h2>{title}</h2>
                <p>
                    {description}
                </p>
            </article>
        </li>
    );
}
export default GoalComponent;