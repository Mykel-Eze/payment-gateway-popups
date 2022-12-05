import styled from "styled-components";

export const Modal = styled.div `
    background: transparent;
    border: none;
    max-width: 600px;
    max-height: 100%;
    transform: scale(0.7) !important;
    top: -5% !important;
    overflow: visible;
    box-shadow: none;

    &::-webkit-scrollbar {
        display: none;
    }

    @media(max-width: 600px) {
        width: 110%;
        margin-left: -5%;
        height: 100%;
    }
`

export const CloseModal = styled.img `
    position: absolute;
    right: -50px;
    top: -50px;

    @media(max-width: 600px) {
        top: 0;
    }
`

export const ModalBody = styled.div `
    background: #F9F9F9;
    border: 1px solid rgba(119, 119, 119, 0.2);
    border-radius: 48px;
    width: 100%;
    padding: 20px 0 40px;
    max-height: none;
    overflow-y: scroll;
    box-shadow: 0 24px 38px 3px rgb(0 0 0 / 14%), 0 9px 46px 8px rgb(0 0 0 / 12%), 0 11px 15px -7px rgb(0 0 0 / 20%);

    &::-webkit-scrollbar {
        display: none;
    }

    @media(max-width: 600px) {
        max-height: 100%;
    }
`

export const ModalContent = styled.div `
    padding: 24px;
`