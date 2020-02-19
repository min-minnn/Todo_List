import React, { useState } from 'react';
import styled from 'styled-components';
import {MdAdd} from 'react-icons/md';


const Add = styled.button`
    font-size: 16px;
    cursor: pointer;
    border: none;
    background: none;
    outline: none;
    &:hover {
    color: #52525a;
    }
`;

const TodoInput = styled.input`
    width: 75%;
    border: none;
    margin-top: 1rem;
    border-bottom: 1px solid #ff476c;
    font-size: 16px;
    font-family: 'Roboto';
    `;

const TodoAddBlock = styled.div`
    margin-bottom: 1rem;
    margin-left: 73px;
`;

function TodoCreate({onCreate, onToggle}){
    const [value, setValue] = useState('');

        const onChange = e => {
            setValue(e.target.value);
        };
        
        const onClick = () =>{
            if(value === ""){
                alert('할 일을 입력하세요.');
            }else{
                onCreate(value);
                setValue('');
            }
        };

    return (
        <TodoAddBlock>
            <TodoInput value={value} onChange={onChange} onToggle={onToggle} />
            <Add onClick={onClick}>
                <MdAdd />
            </Add>
        </TodoAddBlock>
    );
}

export default TodoCreate;
