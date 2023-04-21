import styled, {keyframes} from "styled-components";

const SpinnerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    z-index: 9999;
`

const Spinner = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

const LoadingSpinner = styled.div`
    width: 40px;
    height: 40px;
    border: 10px solid #f3f3f3;
    border-top: 10px solid #383636; 
    border-radius: 50%;
    animation: ${Spinner} 1.5s linear infinite
`

export { SpinnerContainer, LoadingSpinner }