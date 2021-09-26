import styled from 'styled-components'

export const MenuToggleBtn = styled.a<{ onClick: any }>`
    outline: none;
    border: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: pointer;
    position: absolute;
    top: 90%;
    right: 20px;
    width: auto;
    height: auto;
    border-radius: 50%;
    background: transparent;
    pointer-events: all;
    display: inline-block;
    text-align: center;
    align-items: flex-start;
`;