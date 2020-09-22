import React from 'react';
import style from "./TodoList.module.css"
import TodoItem from "./TodoItem";

const TodoList = (props) => {
    return (
        <ul className={style.todoList}>
            {props.todos.map(todo => {
                return <TodoItem todo={todo} />
            })}
        </ul>
    );
};

export default TodoList;