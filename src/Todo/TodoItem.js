import React from 'react';
import style from './TodoItem.module.css'

const TodoItem = ({todo, index}) => {
    return (
        <li>
            <p className={style.item__number}>{index + 1}</p>{todo.title}
        </li>
    );
};

export default TodoItem;