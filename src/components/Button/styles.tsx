import styled from 'styled-components'


export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ButtonItem = styled.button`
    display: inline-block;
    margin: 10px;
    text-align: center;
    transition: 0.5s;
    font-size: 1.01em;
    text-align: center;
    border: none;
    padding: 10px 20px;
    width: 10em;
    height: 42px;
    color: #FFF;
    border-radius:15px;
    font-family: 'Public Sans';
    cursor: pointer;
    background-image: linear-gradient(to right, var(--green-color), var(--cyan-color));
    transition: 0.2s;

    &:hover{
        transform: all 0.2s ease-in-out;
        opacity: 65%;
    }


    
`


