import React, { useContext } from "react";
import styles from "../Todo.module.css";

// import { TodoConsumer } from "../contexts/todo";

import TodoContext from "../contexts/todo";

const TodoInput = ({ input, onInsert, onChangeInput }) => {

    const onSubmit = (e) => {
        e.preventDefault();

        onInsert(input);
        onChangeInput("");
    };

    const onChange = (e) => onChangeInput(e.target.value);
    const { state, actions } = useContext(TodoContext);

    return (
        <div className={styles.input}>
            <form onSubmit={onSubmit}>
                <input
                    placeholder="할 일을 입력하세요"
                    value={input}
                    onChange={onChange}
                />
                <button type="submit">추가</button>
            </form>
        </div>
    );
};

export default TodoInput;