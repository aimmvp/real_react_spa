import React, { useState , useRef } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoFooter from "./TodoFooter";
import TodoHeader from "./TodoHeader";

// 빈 배열 초기값 설정
const Todos=() => {
    const [todos, setTodos] = useState([]);
    // 로컬 변수 정의
    const nextId = useRef(1);

    const onInsert=(text) => {
        const todo = {
            id: nextId.current,
            text,
            done: false
        };

        setTodos(todos.concat(todo));
        nextId.current += 1;
    };

    // Todo 항목 삭제 이벤트처리
    const onRemove = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    //완료처리 이벤트 처리
    const onToggle = (id) => {
        setTodos(todos.map(
            (todo) =>
                todo.id === id ? {...todo, done: !todo.done } : todo
        ));
    };

    // 모두 삭제
    const onClearAll = () => {
        setTodos([]);
    };

        return (
            <div>
                <TodoHeader/>
                <TodoInput onInsert={onInsert}/>
                <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
                <TodoFooter onClearAll={onClearAll}/>
            </div>
        );
    };
export default Todos;