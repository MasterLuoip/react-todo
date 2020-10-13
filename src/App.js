import React, { useState } from 'react';
import TodoForm from './TodoForm/TodoForm';
import './App.css';
import Todo from './TodoOp/Todo';

const initTodo = [
  { text: 'todo1', isCompleted: false },
  { text: 'todo2', isCompleted: false },
  { text: 'todo3', isCompleted: false },
];

function App() {
  const [todos, setTodos] = useState(initTodo);

  const addTodo = (text) => {
    const newValue = [...todos, { text }];
    setTodos(newValue);
  };

  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className='app'>
      <div className='todo-list'>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            index={index}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
