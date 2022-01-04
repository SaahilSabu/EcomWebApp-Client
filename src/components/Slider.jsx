import styled from "styled-components";
import {ArrowBackIosOutlined, ArrowForwardIosOutlined} from "@material-ui/icons";
import React, {useState} from "react";
import {sliderItems} from "../data.js";
import { mobile } from './../responsive';

const Container = styled.div `
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
   ${mobile({display:"none"})};
`;
const Arrow = styled.div `
  width: 50px;
  height: 50px;
  background-color: #f7eeee;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${props => props.direction === "left" && "10px"};
  right: ${props => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div `
  height: 100%;
  display: flex;
  transform: translateX(${props => props.sliderIndex * -100}vw);
  transition: all 1.5s ease;
`;

const Slide = styled.div `
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #${props => props.bg};
`;

const ImgContainer = styled.div `
  flex: 1;
  height: 100%;
`;
const Img = styled.img `
  height: 80%;
  padding: 50px;
`;

const InfoContainer = styled.div `
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1 `
  font-size: 70px;
`;
const Desc = styled.p `
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button `
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    background-color: black;
    color: #${props => props.bg};
  }
`;

const Slider = () => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const handleClick = direction => {
    if (direction === "left") {
      setSliderIndex(
        sliderIndex > 0
        ? sliderIndex - 1
        : 2);
    } else {
      setSliderIndex(
        sliderIndex < 2
        ? sliderIndex + 1
        : 0);
    }
  };
  return (<Container>
    <Arrow direction="left" onClick={() => handleClick("left")}>
      <ArrowBackIosOutlined/>
    </Arrow>
    <Wrapper sliderIndex={sliderIndex}>
      {
        sliderItems.map(item => (<Slide bg={item.bg} key={item.id}>
          <ImgContainer>
            <Img src={item.img}/>
          </ImgContainer>
          <InfoContainer>
            <Title>{item.title}</Title>
            <Desc>{item.desc}</Desc>
            <Button bg={item.bg}>SHOP NOW</Button>
          </InfoContainer>
        </Slide>))
      }
    </Wrapper>
    <Arrow direction="right" onClick={() => handleClick("right")}>
      <ArrowForwardIosOutlined/>
    </Arrow>
  </Container>);
};

export default Slider;
