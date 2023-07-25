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
  LinkRed
} from "./portoElement";
import ImgPorto from "../../images/project3.png";
import ImgPortofolio from "../../images/project4.png";
import "./svg.css";
import AOS from "aos";
import '../../../node_modules/aos/dist/aos.css'

const PortoSection = () => {
  useEffect(() =>{
    AOS.init({duration: 2000})
  }, [])
  
  return (
    <>
      <PortoContainer >
        <PortoHeader data-aos="fade-down" id="portofolio">
            <PortoTitle>Portofolio</PortoTitle>
        </PortoHeader>
        <PortoWrapper>
          <DescriptionPorto>
            <PortoDesc data-aos="fade-up">
            HI this is my project, I am working on several Dashboard projects to make sales, purchases and view data in real time, for the stack I use vue in these two projects
            </PortoDesc>
          </DescriptionPorto>
          <ProjectSec >
            <div data-aos="fade-left" duration="4000">
            <PortoCard >
            <LinkRed href="https://office.aksestani.com/dashboard" target="_blank">
              <Img src={ImgPorto} alt="" width={500} />
            </LinkRed>
            </PortoCard>
            </div>
            <DescWrapper data-aos="fade-left">
              <TitleDesc>Dashboard Aksestani</TitleDesc>
              <CratedDate>01/19/2023 - Now</CratedDate>
            </DescWrapper>
            <div data-aos="fade-right">
            <PortoCard >
            <LinkRed href="https://app.lemburhiling.com/" target="_blank">
              <Img src={ImgPortofolio} alt="" width={500} />
            </LinkRed>
            </PortoCard>
            </div>
            <DescWrapper data-aos="fade-right" >
              <TitleDesc>Dashboard Lembur Hiling</TitleDesc>
              <CratedDate>03/14/2023 - Now</CratedDate>
            </DescWrapper>
          </ProjectSec>
        </PortoWrapper>
      </PortoContainer>
    </>
  );
};

export default PortoSection;
