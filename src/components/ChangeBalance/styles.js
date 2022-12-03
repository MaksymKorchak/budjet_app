import styled from "styled-components"

export const Button = styled.button`
    z-index: 100;
    position: fixed;
    bottom: 50px;
    right: 50px;
    width: 50px;
    height: 50px;
    font-size: 40px;
    background-color: #fff;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: teal;
    border: 2px solid teal;
    box-shadow: 2px 2px 20px gray;

    &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 20px teal;
    }
`
