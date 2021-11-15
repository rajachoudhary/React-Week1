import React from "react";
import styles from "./Button.module.css"

function Button(props){
    const {title} = props;
    return (
        <button id="btn" className={styles.button}>{title}</button>
        
    )
} 

export default Button