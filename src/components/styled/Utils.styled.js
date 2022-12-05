import styled from "styled-components";

export const Flex = styled.div `
    display: flex;
    align-items: center;

    @media(max-width: 600px) {
        flex-direction: column;
        text-align: center;
        gap: 10px;
    }
`

export const Container = styled.div `
    width: 85%;
    margin: auto;
    position: relative;

    @media(max-width: 600px) {
        width: 95%;
    }
`