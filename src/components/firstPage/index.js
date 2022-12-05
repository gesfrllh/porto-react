import React from "react";
import {
  HeaderFirst,
  H1Logo,
  H1Desc,
  MainContainer,
  MainWrapper,
  TextTitle,
  TextDesc,
  Btn,
} from "./firstElement";

const First = () => {
  return (
    <>
      <HeaderFirst>
        <H1Logo>Welcome</H1Logo>
        <H1Desc>My Portfolio</H1Desc>
        <MainContainer></MainContainer>
        <MainWrapper>
          <TextTitle>Hi I'am Arya</TextTitle>
          <Btn to="/Home">Let's Go</Btn>
          <TextDesc>
            I'm A Junior ReactJS Developer, Please see some of my projects here
            :)
          </TextDesc>
        </MainWrapper>
      </HeaderFirst>
    </>
  );
};

export default First;
