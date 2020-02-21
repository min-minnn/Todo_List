import React from 'react';
import styled from 'styled-components';
import TodoList from './components/TodoList';

const ListBlock = styled.div`
  width: 480px;
  display:flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-top: 4rem;
  box-shadow: 0px 0px 20px #d7d7d7;
  font-family: 'Roboto';
  font-size: 16px;
`;

function App() {
  return (
    <ListBlock>
      <TodoList/>
    </ListBlock>
  );
}

export default App;
