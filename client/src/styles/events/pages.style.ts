import styled from "styled-components"

const NewEventContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 500px;
    padding: 30px;
    background: #FFFFFF;
    margin: 50px auto;
    border-radius: 10px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);
    -moz-box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);
    -webkit-box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.22);
    @media (min-width: 768px) {
        flex-direction: row;
        align-items: flex-end;
    }
`

const NewEventTitle = styled.h2`
    display: flex;
    flex-direction: column;
    background: #4D4D4D;
    text-transform: uppercase;
    color: #fff;
    font-size: 18px;
    font-weight: 100;
    padding: 20px;
    margin: -30px -30px 30px -30px;
`

const Input = styled.input `
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    outline: none;
    display: block;
    width: 100%;
    padding: 5px;
    border: none;
    border-bottom: 1px solid #ddd;
    background: transparent;
    margin-bottom: 10px;
    font: 16px Arial, Helvetica, sans-serif;
    height: 45px;
`

const TextArea = styled(Input)`
    resize: none;
    overflow: hidden;
`

const Button = styled(Input)`
    background: linear-gradient(to bottom, #4D4D4D 5%, #4D4D4D 100%);
    background-color: #4D4D4D;
    border: 1px solid #4D4D4D;
    display: inline-block;
    cursor: pointer;
    color: #fff;
    font-size: 14px;
    padding: 8px 18px;
    text-decoration: none;
    text-transform: uppercase;
`

const ErrorMessage = styled.div`
    color: red;
    padding: 15px;
`

export { ErrorMessage, NewEventContainer, NewEventTitle, Input, TextArea, Button }