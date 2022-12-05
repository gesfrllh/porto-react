import styled from "styled-components";
import Icon1 from "../../images/design.jpeg";
import Icon2 from "../../images/poto2.jpg";
import Icon3 from "../../images/poto3.jpg";
import Icon4 from "../../images/poto4.jpg";

export const ServicesContainer = styled.div`
  width: 95%;
  float: right;
  height: 350px;
  background: #393e46;
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    height: 100vh;
  }
`;

export const ServicesTitle = styled.p`
  margin-top: 20px;
  padding-top: 10px;
  color: #393e46;
  position: relative;
  z-index: 999;
  font-family: 'Rubik Glitch', cursive;
  text-transform: uppercase;
  @media screen and (max-width: 468px){
    color: #fff;
  }
`;

export const ServicesWrapper = styled.div`
  width: 100%;
  display: flex;
  padding-top: 10px;
  justify-content: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ServicesCard1 = styled.div`
  filter: saturate(0);
  max-height: 340px;
  display: flex;
  background: #fff;
  margin-top: 50px;
  flex-direction: column;
  height: 280px;
  width: 350px;

  background: url(${Icon1});
  background-position: center;
  background-size: cover;

  @media screen and (max-width: 768px) {
    height: 165px;
    margin-top: 50px;
  }

`;

export const ServicesCard2 = styled.div`
  width: 350px;
  filter: saturate(0);
  max-height: 340px;
  display: flex;
  background: #fff;
  flex-direction: column;
  height: 280px;
  margin-top: 50px;
  background: url(${Icon2});
  background-position: center;
  background-size: cover;

  @media screen and (max-width: 768px) {
    height: 165px;
    margin-top: 0;
  }
`;

export const ServicesCard3 = styled.div`
  width: 350px;
  max-height: 340px;
  display: flex;
  background: #fff;
  flex-direction: column;
  height: 280px;
  background: url(${Icon3});
  margin-top: 50px;
  background-position: center;
  background-size: cover;
  filter: saturate(0);
  @media screen and (max-width: 768px) {
    margin-top: 0;
    height: 165px;
  }
`;
export const ServicesCard4 = styled.div`
  width: 350px;
  max-height: 340px;
  display: flex;
  background: #fff;
  flex-direction: column;
  height: 280px;
  background: url(${Icon4});
  background-position: center;
  margin-top: 50px;
  background-size: cover;
  filter: saturate(0);
  @media screen and (max-width: 768px) {
    height: 165px;
    margin-top: 0;
    margin-bottom: 5px;
  }
`;

export const ServicesT = styled.p`
  color: #fff;
  font-size: 20px;
  font-family: 'Poppins';
  text-shadow: 2px 2px 2px #393e46;
  display: flex;
  height: 300px;
  margin: auto;
  width: 300px;
  z-index: 999;
  padding-top: 20px;
  @media screen and (max-width: 768px) {
    font-size: 10px;
    margin-top:30px ;
  }
  @media screen and (max-width: 468px) {
    font-size: 10px;
    width: 50px;
    margin-left: 30px;
  }
`;

export const ServicesD = styled.p`
  position: relative;
  z-index: 999;
  text-shadow: 2px 2px 2px #393e46;
  color: #fff;
  font-family: "Poppins";
  font-size: 10px;
  margin-bottom: 50px;
  padding-left: 15px;

  @media screen and (max-width: 768px) {
    font-size: 10px;
    width: 200px;
    margin-left: 30px;
    margin-top: 30px;
    flex: 1;
  }
  @media screen and (max-width: 428px) {
    font-size: 12px;
    padding-left: 15px;
  }
  `;
