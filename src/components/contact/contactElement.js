import styled from "styled-components";

export const ContactContainer = styled.div`
  height: 250px;
  overflow: hidden;
  float: right;
  width: 95%;
  color: #FFF;
  background: #2a2e33;

  @media screen and (max-width: 768px){
    height: 50px;
  }
`;

export const ContactWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;  
  align-items: center;
  margin-top: -110px;

  @media screen and (max-width: 768px){
    display: none;
  }
`;

export const ContentWrapper = styled.div`
  height: 250px;
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (max-width: 768px){
    display: none;
  }
`;

export const H1LogoN = styled.p`
  font-family: 'Rubik Glitch', cursive;
  text-transform: uppercase;
  padding : 50px 0 20px;
  margin-left: 50px;
  font-size: 24px;
  text-shadow: 2px 2px 2px #db0707; 

  @media screen and (max-width: 768px){
    display: none;
  }
`;

export const H2Desc = styled.p`
  font-family: 'Poppins';
  width: 600px;
  font-size: 16px;
  font-weight: 600;
  margin-left: 50px;

  @media screen and (max-width: 768px){
    display: none;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  width: 20%;
  height: 250px;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 768px){
    display: none;
  }
`;

export const H1Text = styled.p`
  font-family: "Poppins";
  font-weight: 800;
  padding: 0 0 10px 0;
  margin: 0 0 0 10px;
  font-size: 24px;
  text-shadow: 2px 2px 2px #db0707; 
  
  @media screen and (max-width: 768px){
    display: none;
  }
`;

export const ListTxt = styled.p`
  margin: 0 0 0 10px;
  padding: 5px;
  font-size: 14px;
  font-family: 'Poppins';

  @media screen and (max-width: 768px){
    display: none;
  }
`;

export const Mobile = styled.div`
display: none;
@media screen and (max-width: 768px) {
  display: flex;
  align-items: center;
  margin-top: -90px;
  justify-content: center;
  gap: 20px;
}
`