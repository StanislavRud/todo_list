import React from 'react';
import PropTypes from 'prop-types'
import style from './TodoItem.module.css'

const TodoItem = ({todo, index}) => {
    return (
        <li>
            <p className={style.item__number}>{index + 1}</p>{todo.title}
        </li>
    );
};

TodoItem.propTypes = {
    todos: PropTypes.object.isRequired
}

export default TodoItem;