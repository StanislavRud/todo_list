import React, {useState} from 'react';
import './App.css';
import TodoList from "./Todo/TodoList";

function App() {
    const [todo, setTodo] = useState([
        { id: 1, completed: false, title: "Купить хлеб" },
        { id: 2, completed: false, title: "Купить сидр" },
        { id: 3, completed: false, title: "Купить чипсы" },
        { id: 4, completed: false, title: "Купить суши"}
    ])


    function toggleTodo(id) {
        todos = todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        })
    }

  return (
    <div className="wrapper">
        <h1>Hello</h1>
        <TodoList todos={todos} onToggle={toggleTodo}/>
    </div>
  );
}

export default App;
