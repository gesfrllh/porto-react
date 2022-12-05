import React from "react";
import {
  ContactContainer,
  ContactWrapper,
  ContentWrapper,
  H1LogoN,
  H2Desc,
  TextWrapper,
  H1Text,
  ListTxt,
  Mobile
} from "./contactElement";
import { FaGithub, FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import "./svgC.css";

const ContactSec = () => {
  return (
    <>
      <ContactContainer id="contact">
        <div class="custom-shape-divider-top-1669935756">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path d="M1200 0L0 0 598 50 1200 100 0z" class="shape-fill"></path>
          </svg>
        </div>
          <Mobile>
            <FaInstagram style={{fontSize:'18px', cursor:'pointer'}}/>
            <FaGithub style={{fontSize:'18px', cursor:'pointer'}} />
            <FaWhatsapp style={{fontSize:'18px', cursor:'pointer'}} />
            <FaLinkedin style={{fontSize:'18px', cursor:'pointer'}} />
          </Mobile>
        <ContactWrapper>
          <ContentWrapper>
            <H1LogoN to="/home">Dwi Arya Safrulloh</H1LogoN>
            <H2Desc>
              Hi This is my little portofolio, i hope your enjoy for look at
              this my portfolio
            </H2Desc>
          </ContentWrapper>
          <TextWrapper>
            <H1Text>Contact us</H1Text>
            <ListTxt>
              {" "}
              <FaInstagram style={{fontSize:'18px'}}/> Gesfrllh
            </ListTxt>
            <ListTxt>
              {" "}
              <FaGithub style={{fontSize:'18px'}}/> gesfrllh
            </ListTxt>
            <ListTxt>
              {" "}
              <FaWhatsapp style={{fontSize:'18px'}}/> 0821 - 2544 - 6495
            </ListTxt>
            <ListTxt>
              {" "}
              <FaLinkedin style={{fontSize:'18px'}}/> Dwi Arya Sfrllh
            </ListTxt>
          </TextWrapper>
        </ContactWrapper>
      </ContactContainer>
    </>
  );
};

export default ContactSec;
