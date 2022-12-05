import React from "react";
import {
  HomeContainer,
  HomeHeader,
  H1TeksLogo,
  HomeWrapper,
  HomeBgImg,
  ImgWrappaer,
  TeksFirst,
  TeksDesc,
  TeksSecond,
  TeksWrapper,
  ArrowForward,
} from "./homeSecElement";
import Img from "../../images/poto1.jpg";
import Typewriter from "typewriter-effect";

const HomeSection = () => {
  return (
    <>
      <HomeContainer id="home">
        <HomeHeader>
          <H1TeksLogo>Welcome</H1TeksLogo>
        </HomeHeader>
        <HomeWrapper>
          <ImgWrappaer>
            <HomeBgImg>
              <img src={Img} alt="" width={300} height={250} />
            </HomeBgImg>
          </ImgWrappaer>
          <TeksWrapper>
            <TeksFirst>I'm a </TeksFirst>
            <TeksSecond>
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 40,
                  strings: [
                    "Dwi Arya Safrulloh",
                    "Front End Developers",
                    "React-JS Developer",
                  ],
                }}
              />
            </TeksSecond>
            <TeksDesc to="portofolio"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}>
              Lets See My Portfolio
              <ArrowForward />
            </TeksDesc>
          </TeksWrapper>
        </HomeWrapper>
      </HomeContainer>
    </>
  );
};

export default HomeSection;
