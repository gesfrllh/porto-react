import React from "react";
import {
  ServicesContainer,
  ServicesTitle,
  ServicesWrapper,
  ServicesCard1,
  ServicesCard2,
  ServicesCard3,
  ServicesCard4,
  ServicesD,
  ServicesT,
} from "./servicesElement";
import AOS from "aos";
import "../../../node_modules/aos/dist/aos.css";
import { useEffect } from "react";
import "./SvgSrv.css";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <ServicesContainer id="services">
        <ServicesTitle data-aos="fade-up">Our Services</ServicesTitle>
        <ServicesWrapper>
          <ServicesCard1 data-aos="fade-right">
            <ServicesT>Design Graphic</ServicesT>
            <ServicesD>
              We can help you, To make it designs that are attractive and
              beautiful to look at
            </ServicesD>
          </ServicesCard1>
          <ServicesCard2 data-aos="fade-right">
            <ServicesT>illustrator</ServicesT>
            <ServicesD>I'm Freelance Illustrator</ServicesD>
          </ServicesCard2>
          <ServicesCard3 data-aos="fade-left">
            <ServicesT>UI/UX Designer</ServicesT>
            <ServicesD>I'm freelance UI/UX Designer.</ServicesD>
          </ServicesCard3>
          <ServicesCard4 data-aos="fade-left">
            <ServicesT>Front End Developer</ServicesT>
            <ServicesD>I'm a Front End Developer</ServicesD>
          </ServicesCard4>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
