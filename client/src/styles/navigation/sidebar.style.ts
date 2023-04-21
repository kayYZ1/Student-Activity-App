import styled from "styled-components";
import { Link } from "react-router-dom";

import { SideBarProps } from "../../ts/types/navbar.types";

const NavLink = styled(Link)`
    list-style-type: none;
    text-decoration: none;
    color: #000;
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {    
        margin: 0px 10px;
        color: black;
        width: 100%;
        padding: 1.5rem 0;
    }
`

const NavigationMenu = styled.div<SideBarProps>` 
	display: flex;
	align-items: center;
	margin-right: -25px;
	@media (max-width: 768px) {
        flex-flow: column nowrap;
        background-color: #4D4D4D;
        position: fixed;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        right: 0;
        height: 100vh;
        width: 300px;
        padding: 4em;
        transition: transform 0.3s ease-in-out;
    }
`

const List = styled.ul`
  display: flex;
  padding: 0;
  @media screen and (max-width: 768px) {
    position: absolute;
    top: 60px;
    left: 0;
    flex-direction: column;
    width: 100%;
    height: calc(100vh - 77px);
    background-color: white;
    border-top: 1px solid black;
  }
`;

const Row = styled.li`
  list-style-type: none;
  margin: 0 1rem;
  @media screen and (max-width: 768px) {
    text-align: center;
    margin: 0;
    &:hover {
      background-color: #eee;
    }
  }
`;

export { Row, List, NavigationMenu, NavLink }