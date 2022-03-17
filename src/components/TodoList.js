import React from "react";
import TodoItem from "./TodoItem"
import styles from "../Todo.module.css";

const TodoList=({todos, onRemove, onToggle})=>{
    // const [todos, setTodos] = useState(["todoItem]", "todoItem2", "todoItem3"]);
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