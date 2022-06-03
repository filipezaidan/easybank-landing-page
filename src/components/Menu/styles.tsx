import styled from 'styled-components'

export const Container = styled.nav`
    display: flex;
    width: 100%;
    height: 100%;
`
export const MenuGroup = styled.ul`
    display: flex;
    gap: 3%;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    list-style-type: none;
`

export const Item = styled.li`
    display: flex;  
    align-items: center;
    font-size: 1.05em;
    font-weight: 300;
    border-bottom: 0.3em solid transparent;
    height: 100%;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover{
        transition: all 0.2s ease-in-out;
        border-bottom: 0.3em solid var(--green-color);
    }
`

