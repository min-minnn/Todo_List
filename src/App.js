import React from 'react';
import './App.css';
import styled from 'styled-components';
import TodoList from './TodoList';

const ListBlock = styled.div`
  width: 480px;
  margin: 0 auto;
  margin-top: 4rem;
  box-shadow: 0px 0px 20px #d7d7d7;
`;

function App() {
  return (
    <ListBlock>
      <TodoList/>
    </ListBlock>
  );
}

export default App;
