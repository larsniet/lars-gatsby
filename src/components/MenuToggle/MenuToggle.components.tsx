import styled from 'styled-components'

export const MenuToggleBtn = styled.button<{ onClick: any }>`
    outline: none;
    border: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: pointer;
    position: absolute;
    bottom: 18px;
    right: 15px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: transparent;
    pointer-events: all;
`;