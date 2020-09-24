import React from 'react';
import style from "./TodoList.module.css"
import TodoItem from "./TodoItem";
import PropTypes, {checkPropTypes} from "prop-types";

const TodoList = (props) => {
    return (
        <ul className={style.todoList}>
            {props.todos.map((todo, index) => {
                return <TodoItem todo={todo} key={todo.id} index={index}/>
            })}
        </ul>
    );
};

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired


}

export default TodoList;