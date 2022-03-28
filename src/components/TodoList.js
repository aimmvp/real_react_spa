import React, { useContext} from "react";
import TodoItem from "./TodoItem"
import styles from "../Todo.module.css";
// import { TodoConsumer } from "../contexts/todo";

import TodoContext from "../contexts/todo";

const TodoList = ( { todos, onRemove, onToggle }) => {
    const { state, actions } = useContext(TodoContext);
    return (
        <div className={styles.list}>
            {todos.map((todo) => (
                <TodoItem
                    todo={todo}
                    key={todo.id}
                    onRemove={onRemove}
                    onToggle={onToggle}
                />
            ))}
        </div>
    )
};

export default TodoList;