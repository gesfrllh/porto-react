import styled, { keyframes } from "styled-components";
import img from "../../images/bgFirst.jpg";
import { Link } from "react-router-dom";

const AnimationMarre = keyframes`
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;
const AnimationMarle = keyframes`
  0%{
    margin-left: -80px;
    opacity: 0;
  }
  100%{
    margin-left: 0;
    opacity: 1;
  }
`;

export const HeaderFirst = styled.div`
  height: 100vh;
  display: flex;
  background: url(${img});
  flex-direction: column;
`;

export const H1Logo = styled.p`
  text-align: left;
  padding: 20px 0 0 15px;
  color: #222;
  font-family: 'Rubik Glitch', cursive;
  font-size: 28px;
  margin: 20px 0 -60px 0;
  width: 100px;
  animation-name: ${AnimationMarle};
  animation-duration: 0.8s;
`;

export const H1Desc = styled.p`
  text-align: left;
  font-size: 24px;
  font-family: 'Rubik Glitch', cursive;
  color: #222;
  padding: 35px 0 0 50px;
  margin-top: 30px;
  animation-name: ${AnimationMarle};
  animation-duration: 0.8s;
`;

export const MainContainer = styled.div`
  width: 700px;
  height: 500px;
  display: flex;
  position: fixed;
  z-index: 0;
  top: 150px;
  left: 370px;
  margin: auto;
  border-radius: 50px;

  &::before {
    content: "";
    filter: blur(5px);
    width: 100%;
    height: 500px;
    opacity: 0.5;
    background: white;
    border-radius: 50px;
  }

  &::after {
    content: "";
    background: red;
  }

  @media screen and (max-width: 768px) {
    width: 450px;
    left: 18px;
  }

  @media screen and (max-width: 490px) {
    width: 350px;
    left: 18px;
  }
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
  margin: auto;

  @media screen and (max-width: 768px) {
    width: 500px;
  }

  @media screen and (max-width: 490px) {
    width: 250px;
  }
`;

export const TextTitle = styled.p`
  font-family: 'Rubik Glitch', cursive;
  text-align: center;
  padding-top: 25px;
  margin: auto;
  font-size: 20px;
  z-index: 999;
  animation-name: ${AnimationMarre};
  animation-duration: 0.8s;
`;

export const TextDesc = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  width: 50%;
  text-transform:uppercase;
  z-index: 999;
  margin: -20px auto auto auto;
  align-items: center;
  font-weight: 600;
  padding-top: 20px;
`;

export const Btn = styled(Link)`
  text-align: center;
  font-family: "Poppins", sans-serif;
  color: #fff;
  font-weight: 600;
  background: #222;
  width: 150px;
  height: 30px;
  padding: 2px 0 ;
  margin: -20px auto auto auto;
  text-decoration: none;
  z-index: 9999;
  cursor: pointer;

  &:hover {
    background: #fff;
    color: #222;
    transition: 0.3s ease-in;
  }
`;
