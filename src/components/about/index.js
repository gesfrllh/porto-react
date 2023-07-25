import React from "react";
import {
  AboutWrapper,
  AboutHeader,
  AboutLogo,
  AboutMain,
  ImgBG,
  ImgWrapperr,
  BgImg,
  DescWrapper,
  BtnWrapper,
  AboutTitle,
  AboutDesc,
  DownloadCv,
  BtnBg,
  ArrowDownload,
} from "./aboutElement";
import AOS from "aos";
import "../../../node_modules/aos/dist/aos.css";
import { useEffect } from "react";
import CV from "../../images/DwiAriaCV.pdf";

const AboutSection = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <> 
      <AboutWrapper>

        <AboutHeader id="about" data-aos="fade-up">
          <AboutLogo
            to="home"
            spy={true}
            smooth={true}
            offset={-80}
            duration={800}
          >
            About
          </AboutLogo>
        </AboutHeader>
        <AboutMain>
          <ImgWrapperr data-aos="fade-right">
            <BgImg>
              <ImgBG />
            </BgImg>
          </ImgWrapperr>
          <DescWrapper>
            <AboutDesc data-aos="fade-left">
              <AboutTitle>About Me </AboutTitle>
              Hi Introducing My name is Dwi Arya Safrulloh, I am 23 years old, I
              have aspirations to be able to work in a large company and in the
              space sector such as NASA, for my hobbies I like playing football,
              games, coding, and travel.
            </AboutDesc>
            <BtnWrapper data-aos="fade-left">
              <BtnBg>
                <DownloadCv to={CV} target="_blank" download>
                  Download CV <ArrowDownload />
                </DownloadCv>
              </BtnBg>
            </BtnWrapper>
          </DescWrapper>
        </AboutMain>
      </AboutWrapper>
    </>
  );
};

export default AboutSection;
