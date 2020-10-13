import React from 'react';

function Todo({ todo, toggleComplete, deleteTodo, index }) {
  return (
    <>
      <div
        className='todo'
        style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
      >
        {todo.text}
        <div>
          <button onClick={() => toggleComplete(index)}>{todo.isCompleted ? 'Redo' : 'Done'}</button>
          <button onClick={() => deleteTodo(index)}>x</button>
        </div>
      </div>
    </>
  );
}

export default Todo;
