import React, {useState} from 'react';
import s from './AddTodo.module.css';
import PropTypes from 'prop-types'

const AddTodo = ({ onCreate}) => {
    const input = useInputValue('');

    function useInputValue(defaultValue = '') {
        const [value, setValue] = useState(defaultValue);
        return {
            bind: {
                value,
                onChange: event => setValue(event.target.value)
            },
            clearValue: () => setValue(''),
            value: value
        }
    }
    

    function submitHandler(event) {
        event.preventDefault();

        if (input.value.trim()) {
            onCreate(input.value);
            input.clearValue()
            // setValue('')
        }
    }

    return (
        <form action=""  onSubmit={submitHandler}>
            <input {...input.bind}/>
            <button type="submit">Добавить задачу</button>
        </form>
    );
};

AddTodo.prototype = {
    onCreate: PropTypes.func.isRequired
}

export default AddTodo;