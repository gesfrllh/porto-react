import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import Img from "../../images/AboutPoto.png";
import { Link as LinkR } from "react-router-dom";
import { IoCloudDownloadOutline } from "react-icons/io5";

export const AboutWrapper = styled.div`
  width: 95%;
  float: right;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
`;

export const AboutHeader = styled.div`
  height: 130px;
  font-size: 24px;
  width: 100%;
  display: flex;
  padding-left: 25px;
  padding-top: 25px;
  margin-top: 50px;
  position: relative;
  z-index: 3;
`;

export const AboutLogo = styled(LinkS)`
  font-family: 'Rubik Glitch', cursive;
  text-transform: uppercase;
  margin-top: 70px;
  color: #393e46;
  cursor: pointer;
  display: flex;
`;
export const AboutMain = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ImgWrapperr = styled.div`
  display: grid;
  margin: auto;
`;

export const BgImg = styled.div`
  padding: 15px;
  width: 300px;
  height: 280px;
  background: #393e46;

  @media screen and (max-width: 768px) {
    width: 250px;
    height: 200px;
  }
`;

export const ImgBG = styled.div`
  background: url(${Img});
  background-size: cover;
  height: 280px;
  width: 300px;
  background-position: center;

  @media screen and (max-width: 768px) {
    width: 250px;
    height: 200px;
  }
`;

export const AboutTitle = styled.p`
  font-family: 'Rubik Glitch', cursive;
  text-transform: uppercase;
  margin-bottom: 20px;
`;

export const AboutDesc = styled.p`
  margin: auto;
  font-family: "Poppins";
  color: #393e46;
  width: 350px;

  @media screen and (max-width: 768px) {
    font-size: 14px;
    width: 300px;
  }
`;

export const DescWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const BtnWrapper = styled.div`
  margin: auto;
`;

export const DownloadCv = styled(LinkR)`
  width: 150px;
  text-align: center;
  text-decoration: none;
  padding: 10px;
  color: #393e46;
  font-size: 14px;
  font-family: "Poppins";
  border: 1px solid;
  display: flex;
  background: #fff;

  &:hover {
    background: #393e46;
    transition: 0.3s ease-in-out;
    color: #fff;
  }
`;

export const BtnBg = styled.div`
  width: 150px;
  background: #393e46;
  padding: 10px;
  height: 48px;
`;

export const ArrowDownload = styled(IoCloudDownloadOutline)`
  font-size: 18px;
  margin-left: 10px;
`;
