import styled from "styled-components";

export const Container = styled.div `
    width: 85%;
    margin: auto;
    position: relative;

    @media(max-width: 600px) {
        width: 95%;
    }
`

export const Flex = styled.div `
    display: flex;
    align-items: center;

    @media(max-width: 600px) {
        flex-direction: column;
        text-align: center;
        gap: 10px;
    }
`

export const Text = styled.div `
    font-size: 18px;
    line-height: 23px;
    text-align: center;
    color: #353D46;
    margin: 20px auto;

    .title {
        font-size: 20px;
        line-height: 26px;
        font-family: var(--font-medium);
    }
`
