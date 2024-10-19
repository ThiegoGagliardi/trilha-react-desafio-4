import styled from 'styled-components';


export const ButtonContainer = styled.button`

    width: 100%;
    height: 42px;
    background-color: #81259D;
    color: #FFF;

    border: 1px solid #81259D;
    border-radius: 21px;
   
   &.habilitado{
     opacity: 1;

    &:hover {
        color: #81259D;
        background-color: white;       
        cursor:pointer;
    }      
   }

    &.desabilitado{
       opacity: 0.3;       
    }   

`