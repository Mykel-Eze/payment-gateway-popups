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

    &.left-align {
        text-align: left;
    }
    &.right-align {
        text-align: right;
    }

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

export const InfoBox = styled.div `
    position: relative;
    width: 100%;
    font-size: 18px;
    background-color: #f9f9f9;
    color: #353D46;
    border: 1px solid rgba(119, 119, 119, 0.2);
    border-radius: 69.5px;
    cursor: pointer;
    padding: 20px 40px;
`
export const AccountInfo = styled.div `
    font-size: 24px;
    font-family: var(--font-medium);

    span.title-label {
        font-size: 12px;
        font-family: var(--font);
    }
`

export const CopyIcon = styled.img `
    position: absolute;
    right: 30px;
    top: 50%;
    transform: translateY(-50%);
`
