import styled from "styled-components";
import { mobile } from "./../responsive";
import { Link } from "react-router-dom";
const Container = styled.div`
  margin: 5px;
  flex: 1;
  height: 70vh;
  position: relative;
  ${mobile({
    display: "flex",
    justifyContent: "center",
    width: "100%",
    margin: "0px 0px 5px",
  })};
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "40vh", objectFit: "cover" })};
`;
const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 20px;
  left: 20px;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
  ${mobile({
    fontSize: "20px",
    display: "flex",
    alignItems: "center",
    width: "60vw",
  })};
`;
const Button = styled.button`
  background-color: white;
  width: 100px;
  height: 40px;
  color: grey;
  border: none;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.5s ease;
  &:hover {
    background-color: #bdc3c7;
    color: white;
  }
  ${mobile({
    width: "60px",
    height: "30px",
    fontSize: "10px",
    display: "flex",
    alignItems: "center",
  })};
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button >SHOP NOW</Button>
        </Info>
    </Container>
  );
};

export default CategoryItem;
