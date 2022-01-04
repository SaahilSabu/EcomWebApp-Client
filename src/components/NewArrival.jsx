import styled from "styled-components";
import { newRelease } from "../newReleasesData";
import { mobile } from "./../responsive";
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  background-color: #000009;
  ${mobile({ flexDirection: "column", height: "100%" })};
`;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex: 1;
  position: relative;
  ${mobile({ alignItems: "center" })};
`;

const Desc = styled.p`
  color: white;
  padding: 20px;
  z-index: 3;
  font-size: 30px;
  font-weight: 300;
  letter-spacing: 3px;
  ${mobile({ fontSize: "13px", margin: "0px 20px", padding: "5px" })};
`;

const Title = styled.h1`
  font-size: 50px;
  margin: 20px 20px;
  position: absolute;
  top: 0;
  left: 0;
  color: white;
  z-index: 2;
  ${mobile({ fontSize: "25px" })};
`;

const ImgContainer = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  height: 100%;
  z-index: 2;
  ${mobile({ alignItems: "center", justifyContent: "center" })};
`;

const Button = styled.button`
  font-size: 30px;
  background-color: transparent;
  color: white;
  outline: none;
  border: 1px solid white;
  cursor: pointer;
  margin: 20px 20px;
  padding: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: white;
    color: black;
  }
  ${mobile({ fontSize: "13px", margin: "15px" })};
`;

const Gif = styled.img`
  width: 100%;
  height: 100%;
  display: flex;
  ${mobile({ width: "75%", objectFit: "contain" })};
`;

const NewArrival = () => {
  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          <Title>CYBERBOARD R3</Title>
          <Gif src={newRelease.gif1} />
        </ImgContainer>
      </Wrapper>
      <Wrapper>
        <Desc>{newRelease.desc}</Desc>
        <Button>Learn More</Button>
      </Wrapper>
    </Container>
  );
};

export default NewArrival;
