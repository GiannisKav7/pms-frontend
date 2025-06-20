import React from "react";
import styles from "./Tag.module.css";

type TagType = "default" | "success" | "warning" | "error" | "info";

interface TagProps extends React.HTMLAttributes<HTMLDivElement>{
    children: React.ReactNode;
    type?: TagType;
}

const Tag: React.FC<TagProps> = ({children, type = "default", className, ...props}) => {
    
    const combinedStyle = `${styles.tag} ${styles[type]} ${className}`;

    return (
        <div className={combinedStyle} {...props}>
            {children}
        </div>
    );
};


export default Tag;