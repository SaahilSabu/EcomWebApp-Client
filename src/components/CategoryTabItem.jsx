import styled from "styled-components";
import { mobile } from "./../responsive";
import { Link } from "react-router-dom";
const Container = styled.div`
  margin: 5px;
  display: flex;
  height: 100%;
  width: 100%;
  position: relative;
  ${mobile({
    display: "flex",
    justifyContent: "center",
    margin: "0px 0px 5px",
  })};
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  ${mobile({ width: "100%", height: "30vh", objectFit: "cover" })};
`;
const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
  ${mobile({ fontSize: "20px", display: "flex", alignItems: "center" })};
`;
const Button = styled.button`
  background-color: white;
  padding: 15px;
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

const CategoryTabItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
          <Button>SHOP NOW</Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryTabItem;
