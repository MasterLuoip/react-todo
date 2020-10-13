import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [value, setValue] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        type='text'
        className='input'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <input type='submit' value='Add' />
    </form>
  );
}

export default TodoForm;
