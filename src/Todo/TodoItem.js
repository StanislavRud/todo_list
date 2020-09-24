import React, {useContext} from 'react';
import PropTypes from 'prop-types'
import style from './TodoItem.module.css'
import './../index.css'
import Context from "../context";

const TodoItem = ({todo, index, onChange}) => {

    const {removeTodo} = useContext(Context);

    const classes = [];

    if (todo.completed === true) {
        classes.push('done')
    }

    return (
        <li >
            <span className={classes.join(' ')}>
                <input type="checkbox"
                       style={style.input}
                       checked={todo.completed}
                       onChange={() => onChange(todo.id)}/>
            <strong>{index + 1}</strong>
                {todo.title}
            </span>
            {/*<button className={style.rm} onClick={() => removeTodo(todo.id)}>&times;</button>*/}
            <button className={style.rm} onClick={removeTodo.bind(null, todo.id)}>&times;</button>
        </li>

    );
};

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
};

export default TodoItem;