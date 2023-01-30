import styled from "styled-components";

export const Button = styled.button `
    position: relative;
    height: 65px;
    width: 100%;
    font-size: 18px;
    color: #ffffff;
    background-color: var(--pry-color) !important;
    border-radius: 32.5px;
    border: none;
    cursor: pointer;
    transition: transform 1.2s;

    &:hover {
        transform: scale(1.03);
    }


    &.default-btn {
        background-color: #ffffff !important;
        color: #353D46 !important;
        border: 1px solid rgba(119, 119, 119, 0.2) !important;
    }
`

export const ButtonWrapper = styled.div `
    margin: 40px 0 20px;

    &.spaced {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }
`

export const RightArrow = styled.img `
    position: absolute;
    top: 40%;
    right: 30px
`