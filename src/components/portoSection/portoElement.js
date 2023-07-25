import styled from "styled-components";



export const PortoContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: #393e46;
`;

export const PortoHeader = styled.div`
  width: 100%;
  margin-top: 30px;
`;

export const PortoWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  grid-template-columns: 1fr, 1fr;
  gap: 50px;

  @media screen and (max-width: 768px) {
    display: flex;
    margin-top: 120px;
    flex-direction: column;
    position: relative;
    z-index: 5;
  }
`;
export const DescriptionPorto = styled.div`
  align-items: center;
  width: 60%;
  display: flex;
  justify-content: center;
  padding-left: 150px;
  margin-top: -50px;
  
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 50px;
  }
  `;
export const PortoTitle = styled.p`
  font-size: 24px;
  font-family: 'Rubik Glitch', cursive;
  text-transform: uppercase;
  padding-top: 100px;
  color: #fff;
  margin-top: 100px;
  margin-left: 100px;

  @media screen and (max-width: 768px) {
    padding-top: 20px;
    margin-left: 50px;
    font-size: 20px;
  }
  `;

export const PortoDesc = styled.p`
  font-size: 20px;
  color: white;
  margin-top: -50px;
  font-family: 'Poppins';
  @media screen and (max-width: 768px) {
    width: 300px;
    font-size: 14px;
  }
`;

export const Img = styled.img`
  width: 300px;
  box-shadow: 0 2px 5px;

  @media screen and (max-width: 768px) {
    width: 250px;
  }
`;

export const ProjectSec = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 50px;
  margin-bottom: 50px;
`;
export const PortoCard = styled.div`
  width: 300px;
  background-color: #fff;
  padding: 15px;
  height: 170px;

  &:hover {
    transform: scale(104%);
    transition: 0.5s ease-in-out;
  }

  @media screen and (max-width: 768px) {
    height: 150px;
    width: 250px;
    margin-right: 50px;
  }
`;

export const LinkRed = styled.a`
  text-decoration: none;
`

export const DescWrapper = styled.div`
  width: 250px;
  text-align: center;
  padding: 10px 0;
`;
export const TitleDesc = styled.p`
  font-family: "Poppins", sans-serif;
  margin-top: 20px;
  font-weight: 600;
  color: white;
  
  @media screen and (max-width: 768px) {
    font-size: 12px;
    margin-top: 5px;
  }
`;

export const CratedDate = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 10px;
  margin-left: 100px;
  color: white;

  @media screen and (max-width: 768px) {
    font-size: 8px;
  }
`;
