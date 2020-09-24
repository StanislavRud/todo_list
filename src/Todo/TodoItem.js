import React from 'react';
import PropTypes from 'prop-types'
import style from './TodoItem.module.css'

const TodoItem = ({todo, index, onChange}) => {
    console.log('todo', todo)
    return (
        <li>
            <span>
                <input type="checkbox"
                       style={style.input}
                       onChange={() => onChange(todo.id)}/>
            <strong>{index + 1}</strong>
                {todo.title}
            </span>
            <button className={style.rm}>&times;</button>
        </li>

    );
};

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
};

export default TodoItem;