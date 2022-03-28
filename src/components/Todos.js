// import React, { useState , useRef, useCallback } from "react";
import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoFooter from "./TodoFooter";
import TodoHeader from "./TodoHeader";

// TodoProvider 임포트
import { TodoProvider } from "../contexts/todo";

// Provider 사용
const Todos = ({
    input,
    todos,
    onChangeInput,
    onInsert,
    onToggle,
    onRemove,
    onClearAll,
}) => {
    return (
        <div>
            <TodoHeader/>
            <TodoInput
                input={input}
                onInsert={onInsert}
                onChangeInput={onChangeInput}
            ></TodoInput>
            <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
            <TodoFooter onClearAll={onClearAll}/>
        </div>
    );
};

export default Todos;