import React from "react";
import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import Badge from "@material-ui/core/Badge";
import { mobile } from "./../responsive";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../redux/userRedux.js";

const Container = styled.div`
  height: 60px;
  margin-bottom: 30px;
  ${mobile({
    margin: "10px",
  })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  ${mobile({
    justifyContent: "center",
    padding: "5px",
  })};
`;

const Lang = styled.span`
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  ${mobile({
    display: "none",
  })};
`;

const SearchContainer = styled.div`
  display: flex;
  border: 0.5px solid lightgrey;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  outline: none;
  ${mobile({
    display: "none",
  })};
`;

const Input = styled.input`
  outline: none;
  border: none;
`;

const Logo = styled.h1`
  font-weight: bold;
  font-size: 50px;
  ${mobile({
    fontSize: "34px",
    margin: "10px",
  })};
`;

const MenuItem = styled.div`
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  margin-left: 30px;
  ${mobile({
    fontSize: "12px",
    marginLeft: "15px",
  })};
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  ${mobile({
    display: "none",
  })};
`;

const Right = styled.div`
  flex: 1;
  text-align: center;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ${mobile({
    flex: "2",
    marginRight: "15px",
  })};
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;


const Navbar = () => {
  const user = useSelector((state) => state.user.currentUser);
  const quantity = useSelector((state) => state.cart.quantity);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(logOut());
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Lang>EN</Lang>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search
              style={{
                color: "grey",
                fontSize: 14,
              }}
            ></Search>
          </SearchContainer>
        </Left>
        <Center>
          <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}>
            <Logo>Zuke.</Logo>
          </Link>
        </Center>
        <Right>
          {user ? (
            <MenuItem>{`${user.username}`.toUpperCase()}</MenuItem>
          ) : (
            <MenuItem>
              <Link to="/login" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                Sign In
              </Link>
            </MenuItem>
          )}
          <MenuItem onClick={handleClick}>
            <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}>
              Sign Out
            </Link>
          </MenuItem>
          <Link to="/cart" style={{ color: 'inherit', textDecoration: 'inherit'}}>
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined color="action" />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
