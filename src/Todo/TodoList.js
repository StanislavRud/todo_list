import React from 'react';
import style from "./TodoList.module.css"
import TodoItem from "./TodoItem";

const TodoList = (props) => {
    return (
        <ul className={style.todoList}>
            {props.todos.map((todo, index) => {
                return <TodoItem todo={todo} key={todo.id} index={index}/>
            })}
        </ul>
    );
};

export default TodoList;