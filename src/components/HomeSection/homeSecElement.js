import styled, { keyframes } from "styled-components";
import { Link } from "react-scroll";
import { MdArrowForward } from "react-icons/md";

const Animation = keyframes`
    0%{
        margin-top: -80px;
        opacity: 0;
    } 100%{
        margin-top: 0;
        opacity: 1;
    }
`;

const ImgAnimation = keyframes`
    0%{
        transform:scale(0%) ;
        opacity: 0;
    } 100% {
        transform:scale(100%) ;
        opacity: 1;
    }
`;

export const HomeContainer = styled.div`
  width: 95%;
  float: right;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const HomeHeader = styled.div`
  width: 100%;
  height: 80px;
`;
export const Div = styled.div`
  float: right;
  margin-right: 2.8rem;
  margin-top: 3rem;
  position: relative;
  z-index: 999;
`;

export const H1TeksLogo = styled.p`
  padding: 50px 0 0 25px;
  font-size: 24px;
  font-family: 'Rubik Glitch', cursive;
  text-transform: uppercase;
  animation-name: ${Animation};
  animation-duration: 0.8s;
  color: #393e46;
`;

export const HomeWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  height: 100vh;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const DarkMode = {
  bodyBg: "#fff",
  fontColor: "#222",
};

export const LightMode = {
  bodyBg: "#393E46",
  fontColor: "#fff",
};

export const ImgWrappaer = styled.div`
  display: grid;
  margin: auto;
  animation-name: ${ImgAnimation};
  animation-duration: 1s;
  transition: 0.8s ease-in-out;
`;

export const HomeBgImg = styled.div`
  width: 300px;
  background: #393e46;
  height: 250px;
  transition: 0.8s ease-in-out;
  padding: 15px;

  @media screen and (max-width: 768px) {
    margin: auto;
  }
`;

export const TeksWrapper = styled.div`
  display: grid;
  margin: auto;
  grid-template-columns: 1fr;
`;

export const TeksFirst = styled.p`
  margin: auto;
  font-size: 24px;
  color: #393e46;
  font-family: 'Rubik Glitch', cursive;
  text-transform: uppercase;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const TeksSecond = styled.p`
  margin: auto;
  font-size: 20px;
  font-family: 'Rubik Glitch', cursive;
  text-transform: uppercase;
  color: #393e46;
  padding: 10px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const TeksDesc = styled(Link)`
  margin: auto;
  margin-top: 20px;
  color: #393e46;
  text-decoration: none;
  font-family: "Poppins", sans-serif;
  font-weight: 800;
  padding-top: 5px;
  transition: 0.8s ease-in-out;
  cursor: pointer;

  &:hover {
    color: #59c1bd;
    transition: 0.3s ease-in-out;
  }
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 5px;
  font-size: 24px;
  padding-top: 10px;
`;
