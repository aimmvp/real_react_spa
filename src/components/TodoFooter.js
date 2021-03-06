import React, { useContext } from "react";
import styles from "../Todo.module.css";
// import { TodoConsumer} from "../contexts/todo";

import TodoContext from "../contexts/todo";

const TodoFooter = ( {onClearAll} ) => {
    const { actions } = useContext(TodoContext);

    return (
        <div className={styles.footer}>
            <button onClick={onClearAll}>모두 삭제</button>
        </div>
    );
};

export default TodoFooter;