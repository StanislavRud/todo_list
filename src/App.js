import React from 'react';
import './App.css';
import TodoList from "./Todo/TodoList";

function App() {
    const todos = [
        { id: 1, completed: false, title: "Купить хлеб" },
        { id: 1, completed: false, title: "Купить сидр" },
        { id: 1, completed: false, title: "Купить чипсы" },
        { id: 1, completed: false, title: "Купить суши"}
    ];
  return (
    <div className="wrapper">
        <h1>Hello</h1>
        <TodoList todos={todos} />
    </div>
  );
}

export default App;
