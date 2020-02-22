import React, { useState } from 'react';
import Todo from './Todo';
import TodoInput from './TodoInput';

function TodoList() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '밥 먹기',
      done: false,
    },
    {
      id: 2,
      text: '낮잠 자기',
      done: true,
    },
    {
      id: 3,
      text: '놀기',
      done: false,
    },
  ]);

  const onCreate = text => {
    const todo = {
      id: todos[todos.length - 1].id + 1,
      text,
      done: false,
    };

    setTodos(todos => todos.concat(todo));
  };

  const onRemove = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const onToggle = id => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    );
  };

  return (
    <div>
      <TodoInput onCreate={onCreate} />
      <Todo todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </div>
  );
}

export default TodoList;
