import React from 'react';
import styled, {css} from 'styled-components';
import {MdClear} from 'react-icons/md';

const TextBlodck=styled.div`
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
    margin: auto;
    font-family: 'Roboto';
    font-size: 16px;

    svg{
        color: #ff476c;
        float: right;
        padding-right: 8px;

        &:hover{
            color:#ffffff;
        }
    }

    & + &{
        margin-top: 1rem;
    }

    ${props =>
        props.done && css`
            text-decoration:line-through;
        `}; 
`;
function Todo({todos, onRemove, onToggle}){
    return (
        <TodoItemBlock>
            {todos.map(Todos =>
                <TodoItem
                    key={Todos.id}
                    id={Todos.id}
                    done={Todos.done}
                >
                <TextBlodck onClick={()=>onToggle(Todos.id)}>
                    {Todos.text}
                </TextBlodck>
                    <MdClear onClick={()=>onRemove(Todos.id)} />
                </TodoItem>
            )}
        </TodoItemBlock>
    );
}

export default Todo;