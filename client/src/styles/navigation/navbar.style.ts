import styled from "styled-components";

const Navigation = styled.nav`
    height: 60px;
    width: 100%;
    display: flex;
    align-items: center;
    position: relative;
    padding: 0.5rem 0rem;
    background-color: #fff;
    color: black;
    box-shadow: 0 2px 2px 2px rgba(9, 9, 9, 0.23);
`

const Name = styled.a`
    text-decoration: none;
    color: black;
    font-size: 1.3rem;
    margin-left: 1rem;
    letter-spacing: 5px;
    text-transform: uppercase;
`

export { Navigation, Name }