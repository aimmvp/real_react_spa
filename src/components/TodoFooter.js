import React from "react";
import styles from "../Todo.module.css";

const TodoFooter=( { onClearAll }) => {
    // return <h1>TodoFooter</h1>;
    return (
        <div className={styles.footer}>
            <button onClick={() => onClearAll()}>Delete All</button>
        </div>
    )
};

export default TodoFooter;