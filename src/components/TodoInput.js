import React from "react";
import styles from "../Todo.module.css";

const TodoInput=( { input, onChange, onSubmit} ) =>{
    return (
        <div className={styles.input}>
            <form onSubmit={onSubmit}>
                <input placeholder="할 일을 입력하세요" value={input} onChange={onChange}/>
                <button type="submit">추가</button>
            </form>
        </div>
    )
};

export default TodoInput;