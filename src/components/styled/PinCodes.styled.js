import styled from "styled-components";

export const PinCodes = styled.div `
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50px 0 10px;

    input {
        text-align: center !important;
        line-height: 1 !important;
        font-size: 30px !important;
        outline: none !important;
        width: 60px !important;
        transition: all 0.2s ease-in-out;
        margin-right: 10px !important;
        padding: 3px 0 !important;
        height: 60px !important;
        background: #F9F9F9 !important;
        border: 1px solid rgba(119, 119, 119, 0.2) !important;
        border-radius: 12px !important;
        box-sizing: border-box !important;
    }
    input:last-child {
        margin-right: 0 !important;
    }
    input:focus {
        border-color: var(--pry-color) !important;
        box-shadow: 0 0 5px var(--pry-color) inset !important;
    }
    input::-moz-selection {
        background: transparent !important;
    }
    input::selection {
        background: transparent !important;
    }
    .input-error-txt {
        font-size: 12px;
        letter-spacing: -0.1px;
        color: #C92135;
        text-align: center;
    }
`