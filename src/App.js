import React, {useEffect} from 'react';
import './App.css';
import TodoList from "./Todo/TodoList";
import Context from "./context";
import AddTodo from "./Todo/AddTodo";

function App() {
    const [todos, setTodos] = React.useState([
        { id: 1, completed: false, title: "Купить хлеб" },
        { id: 2, completed: false, title: "Купить сидр" },
        { id: 3, completed: false, title: "Купить чипсы" },
        { id: 4, completed: false, title: "Купить суши"}
    ]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
            .then(response => response.json())
            .then(todos => {
                setTodos(todos)
            })
    }, []);

    function toggleTodo(id) {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        })
        )
    }

    function addTodo(title) {
        setTodos(todos.concat([{
            title,
            id: Date.now(),
            completed: false
        }]))
    }

    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id))
    }

  return (
      <Context.Provider value={{removeTodo}}>
          <div className="wrapper">
              <h1>Hello</h1>
              <AddTodo onCreate={addTodo}/>
              {todos.length ? <TodoList todos={todos} onToggle={toggleTodo}/> : <p>У Вас нет задач :)</p>}
          </div>
      </Context.Provider>

  );
}

export default App;
