// import React, { useState , useRef, useCallback } from "react";
import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoFooter from "./TodoFooter";
import TodoHeader from "./TodoHeader";

// TodoProvider 임포트
import { TodoProvider } from "../contexts/todo";

// Provider 사용
const Todos = () => {
    return (
        <TodoProvider>
            <TodoHeader/>
            <TodoInput/>
            <TodoList/>
            <TodoFooter/>
        </TodoProvider>
    );
};
export default Todos;