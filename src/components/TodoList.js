import React, { useRef, useState } from 'react';
import Todo from './Todo';
import TodoInput from './TodoInput';

function TodoList(){
    const [todos, setTodos] = useState([
        {
            id : 1,
            text: '밥 먹기',
            done: false
        },
        {
            id: 2,
            text: '낮잠 자기',
            done: true
        },
        {
            id: 3,
            text: '놀기',
            done: false
        }
    ]);

    const nextId = useRef(4);
  
    const onCreate = text =>{
      const todo = {
        id:nextId.current,
        text,
        done: false
      };
      setTodos(todos=>todos.concat(todo));
      nextId.current += 1;
    };
    
    const onRemove = id => {
        setTodos(todos.filter(todo=>todo.id !== id));
    };
    
    const onToggle = id => {
        setTodos(todos.map
            (todo => todo.id === id ? 
                {...todo, done: !todo.done} : todo
                )
            )
        }; 
    
    return (
        <div>
            <TodoInput onCreate={onCreate} />
            <Todo todos={todos} onRemove={onRemove} onToggle={onToggle}  />
        </div>
    )
}

export default TodoList;
