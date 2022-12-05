import { Link } from "react-scroll";
import styled, { keyframes } from "styled-components";

const Animation = keyframes`
    0% { 
        margin-left: -80px;
        opacity: 0;
    }
    100%{ 
        margin-left: 0;
        opacity: 1;
    }
`

export const Nav = styled.div`
    height: 100vh;
    width: 5%;
    box-shadow: 5px -5px 5px #222;
    transition: 0.3s ease-in;
    animation-name: ${Animation};
    position: fixed;
    z-index: 999;
    animation-duration: 0.8s;
    background: #393e46;
    overflow: hidden;
    `

export const NavMenu = styled.div`
    display: flex;
    flex-direction: row;
    padding: 15px;
    align-items: center;
    transform: rotate(-90deg);
    height: 100vh;
    justify-content: space-around;
`

export const NavMenuLinks = styled(Link)`
    padding: 0 25px;
    text-decoration: none;
    font-family: "Poppins", sans-serif;
    font-size: 18px;
    font-weight: 800;
    color: #fff;
    cursor: pointer;

    &:hover{
        color: #59C1BD;
        transition: 0.3s ease-in;
    }

    @media screen and (max-width: 768px) {
        font-size: 16px;
        margin-bottom: 5px;
    }
`