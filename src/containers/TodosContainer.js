import React from "react";
import { connect } from "react-redux"

import {
    input,
    todos,
    changeTodoInput,
    addTodo,
    toggleTodoStatus,
    removeTodo,
    clearAllTodos
} from "../modules/todos";

// Todos 컴포넌트 임포트
import Todos from "../components/Todos";

const TodosContainer = ({
    input,
    todos,
    changeTodoInput,
    addTodo,
    toggleTodoStatus,
    removeTodo,
    clearAllTodos,
}) => {
    return (
        <Todos
            input={input}
            todos={todos}
            onChangeInput={changeTodoInput}
            onInsert={addTodo}
            onToggle={toggleTodoStatus}
            onRemove={removeTodo}
            onClearAll={clearAllTodos}
        />
    );
};

export default connect(
    (state) => ( {
        input : state.input,
        todos: state.todos,
    }),

    (dispatch) => ({
        changeTodoInput: 
            (input) => dispatch(changeTodoInput(input)),
        addTodo: 
            (input) => dispatch(addTodo(input)),
        toggleTodoStatus: 
            (id) => dispatch(toggleTodoStatus(id)),
        removeTodo:
            (id) => dispatch(removeTodo(id)),
        clearAllTodos:
            () => dispatch(clearAllTodos()),
    }),
)(TodosContainer);
