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

const ContactSec = () => {
    const phoneNumber = '6282125446495';
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}`  
  return (
    <>
      <ContactContainer id="contact">
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
            <ListTxt href="https://www.instagram.com/gesfrllh/" target="_blank">
              {" "}
              <FaInstagram style={{fontSize:'18px'}}/> Gesfrllh
            </ListTxt>
            <ListTxt href="https://github.com/gesfrllh" target="_blank">
              {" "}
              <FaGithub style={{fontSize:'18px'}}/> gesfrllh
            </ListTxt>
            <ListTxt href={url} target="_blank">
              {" "}
              <FaWhatsapp style={{fontSize:'18px'}}/> 0821 - 2544 - 6495
            </ListTxt>
            <ListTxt href="https://www.linkedin.com/in/dwi-arya-safrulloh-073208188/" target="_blank">
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
