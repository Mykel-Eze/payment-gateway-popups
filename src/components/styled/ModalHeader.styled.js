import styled from "styled-components";

export const ModalHeader = styled.div ``

export const SecuredNotice = styled.div `
    display: flex;
    align-items: center;
    font-size: 18px;
    justify-content: center;
    margin-bottom: 20px;

    img {
        margin-right: 10px;
    }
`

export const ModalTopDetails = styled.div `
    padding: 15px 0;
    background-color: white;
`
export const BusinessLogo = styled.img `
    border-radius: 50%;
    max-width: 120px;
    margin-right: 20px;

    @media(max-width: 600px) {
        margin-right: 0;
        width: 90px;
    }
`

export const TransactionDetials = styled.div `
    .tranxn-amount {
        font-size: 32px;
        font-family: var(--font-medium);
        letter-spacing: -0.02em;
    }
    .tranxn-user-email {
        font-size: 18px;
    }
`