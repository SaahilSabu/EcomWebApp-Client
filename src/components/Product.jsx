import React from "react";
import styled from "styled-components";
import {
  FavoriteBorderOutlined,
  Search,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import { mobile } from "./../responsive";
import { Link } from "react-router-dom";

const Info = styled.div`
  opacity: 0;
  height: 250px;
  width: 250px;
  position: absolute;
  background-color: rbga(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: space-around;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  margin: 5px 0px;
  flex: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  min-width: 250px;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.4);
  }
  ${mobile({ justifyContent: "center" })};
`;

const Image = styled.img`
  width: 250px;
  height: 250px;
  z-index: 2;
  ${mobile({ height: "100px", objectFit: "cover" })};
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #ced4da;
    transform: scale(1.1);
  }
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <Link to={`/product/${item._id}`}>
            <Search />
          </Link>
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
