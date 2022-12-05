import styled from "styled-components";

export const ModalFooter = styled.div `
    padding: 15px 0;
    background-color: white;
`

export const TransferTypeWrapper = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const TransferType = styled.div `
    font-size: 16px;
    cursor: pointer;
    text-align: center;

    &.active, &:hover {
        font-weight: bold;
    }

    img.active-img {
        display: none;
    }
    img.default-img {
        display: initial;
    }
    &.active img.active-img, &:hover img.active-img {
        display: initial;
    }
    &.active img.default-img, &:hover img.default-img {
        display: none;
    }

    @media(max-width: 600px) {
        font-size: 14px;
        
        img {
            width: 80%;
        }
    }
`