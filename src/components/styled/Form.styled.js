import styled from "styled-components";

export const Form = styled.form `
    position: relative;
`

export const Input = styled.input `
    background: #F9F9F9;
    border: 1px solid rgba(119, 119, 119, 0.2) !important;
    border-radius: 32.5px !important;
    color: #353D46;
    height: 65px !important;
    box-shadow: none !important;
    padding: 0 15px !important;
    width: calc(100% - 30px) !important;
    font-size: 18px !important;

    &:focus:not([readonly]) {
        border-color: black !important;
    }

    &:focus:not([readonly])+label {
        color: black !important;
    }
`

export const Label = styled.label `
    &.active {
        color: #6E7883;
        left: 20px;
        background: #F9F9F9;
        top: 4px;
    }
`

export const GridField = styled.div `
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;

    @media(max-width: 600px) {
        grid-template-columns: 100%;
        gap: 0;
    }
`

export const CheckboxFieldLabel = styled.label `
    [type="checkbox"].filled-in:checked+span:not(.lever):after {
        border-color: var(--pry-color);
        background-color: var(--pry-color)
    }
`