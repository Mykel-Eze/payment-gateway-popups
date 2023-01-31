import styled, { keyframes } from "styled-components";

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

export const LoaderWrapper = styled.div `
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`

export const SpinnerAnimation = keyframes`
  from { 
    transform: rotate(0deg);
  }

  to { 
    transform: rotate(360deg);
  }
`

export const Loader = styled.img `
    transform: rotate(0deg);
    animation: ${SpinnerAnimation} 2s linear infinite;
    animation-play-state: inherit;
`
