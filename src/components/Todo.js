import React from 'react';
import styled, { css } from 'styled-components';
import { MdClear } from 'react-icons/md';

const TextBlodck = styled.div`
  display: inline;
`;

const TodoItemBlock = styled.div`
  padding-bottom: 1rem;
`;

const TodoItem = styled.div`
  background: #4470ff;
  width: 320px;
  height: 21px;
  border-radius: 4px;
  padding: 7px;
  color: white;

  svg {
    color: #ff476c;
    float: right;
    padding-right: 8px;

    &:hover {
      color: #ffffff;
    }
  }

  & + & {
    margin-top: 1rem;
  }

  ${props =>
    props.done &&
    css`
      text-decoration: line-through;
    `};
`;

function Todo({ todos, onRemove, onToggle }) {
  const todoList = todos.map(todo => (
    <TodoItem key={todo.id} id={todo.id} done={todo.done}>
      <TextBlodck onClick={() => onToggle(todo.id)}>{todo.text}</TextBlodck>
      <MdClear onClick={() => onRemove(todo.id)} />
    </TodoItem>
  ));

  return <TodoItemBlock>{todoList}</TodoItemBlock>;
}

export default Todo;
