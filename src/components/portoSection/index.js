import React, { useEffect } from "react";
import {
  PortoContainer,
  PortoHeader,
  PortoWrapper,
  PortoCard,
  DescriptionPorto,
  Img,
  DescWrapper,
  ProjectSec,
  TitleDesc,
  CratedDate,
  PortoTitle,
  PortoDesc,
} from "./portoElement";
import ImgPorto from "../../images/Project1.png";
import ImgPortofolio from "../../images/Project2.png";
import "./svg.css";
import AOS from "aos";
import '../../../node_modules/aos/dist/aos.css'

const PortoSection = () => {
  useEffect(() =>{
    AOS.init({duration: 2000})
  }, [])
  
  return (
    <>
      <div class="custom-shape-divider-top-1669334795">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M1200 0L0 0 598.97 114.72 1200 0z" class="shape-fill"></path>
        </svg>
      </div>
      <PortoContainer >
        <PortoHeader data-aos="fade-down" id="portofolio">
            <PortoTitle>Portofolio</PortoTitle>
        </PortoHeader>
        <PortoWrapper>
          <DescriptionPorto>
            <PortoDesc data-aos="fade-up">
              Hi this my little project, and i building this project with coffe,
              because i really like it the coffe, I made this small project alone, and I used several frameworks like React, and for the other web portfolio I made with pure html, css and vanilla js
            </PortoDesc>
          </DescriptionPorto>
          <ProjectSec >
            <div data-aos="fade-left" duration="4000">
            <PortoCard >
              <Img src={ImgPorto} alt="" width={500} />
            </PortoCard>
            </div>
            <DescWrapper data-aos="fade-left">
              <TitleDesc>Bank Virtual React JS</TitleDesc>
              <CratedDate>08/19/2022</CratedDate>
            </DescWrapper>
            <div data-aos="fade-right">
            <PortoCard >
              <Img src={ImgPortofolio} alt="" width={500} />
            </PortoCard>
            </div>
            <DescWrapper data-aos="fade-right" >
              <TitleDesc>Portofolio HTML CSS JS</TitleDesc>
              <CratedDate>05/14/2022</CratedDate>
            </DescWrapper>
          </ProjectSec>
        </PortoWrapper>
      </PortoContainer>
    </>
  );
};

export default PortoSection;
