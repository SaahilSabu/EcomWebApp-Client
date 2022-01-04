import styled from "styled-components";
import { mobile } from "./../responsive";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const BgImg = styled.img`
  filter: blur(8px);
  width: 100%;
  height: 100%;
  transform: scale(1.1);
  object-fit: cover;
`;
const Wrapper = styled.div`
  position: absolute;

  width: 40%;
  background-color: white;
  padding: 10px 10px;

  ${mobile({
    width: "60%",
  })};
`;
const Title = styled.h1`
  padding: 20px 10px 5px;
  margin: 5px 0px;
  font-size: 40px;
  font-weight: 300;
  ${mobile({
    fontSize: "25px",
  })};
`;
const Form = styled.form`
  padding: 20px 0px;
`;
const Input = styled.input`
  flex: 1;
  font-size: 15px;
  width: 220px;
  margin-right: 30px;
  margin-left: 10px;
  margin-bottom: 10px;
  padding: 20px;
  -webkit-box-shadow: 0 0 0px 1000px white inset;

  ${mobile({
    fontSize: "12px",
    width: "70%",
  })};
`;
const Agreement = styled.span`
  padding: 5px 0px;
  margin-left: 10px;
  font-weight: 500;
  ${mobile({
    fontSize: "10px",
  })};
`;

const Bold = styled.span`
  text-decoration: underline;
  padding: 5px 0px;
  margin-left: 10px;
`;
const Button = styled.button`
  padding: 20px;
  margin-top: 10px;
  margin-left: 10px;
  margin-bottom: 10px;
  width: 220px;

  background-color: transparent;
  transition: all 1s ease;
  border: 1px solid grey;
  &:hover {
    background-color: black;
    color: white;
  }

  ${mobile({
    width: "100%",
    margin: "5px 0px 0px",
  })};
`;

const Error = styled.span`
  font-size: 14px;
  display: flex;
  margin-top: 10px;
  margin-left: 10px;
  margin-bottom: 10px;
  color : red;
`;

const Register = () => {
  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/auth/register", {
        username: newUser.username,
        email: newUser.email,
        password: newUser.password,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      //FIX
  };

  return (
    <Container>
      <BgImg src="https://wallpaperaccess.com/full/2126190.png" />
      <Wrapper>
        <Title>Create Account</Title>
        <Form>
          <Input
            placeholder="Username"
            value={newUser.username}
            name="username"
            onChange={handleChange}
          />
          <Input
            placeholder="Email"
            value={newUser.email}
            name="email"
            onChange={handleChange}
          />
          <Input
            type="password"
            placeholder="Password"
            value={newUser.password}
            name="password"
            onChange={handleChange}
          />
          <Input
            type="password"
            placeholder="Confirm Password"
            value={newUser.confirmPassword}
            name="confirmPassword"
            onChange={handleChange}
          />
          <Agreement>
            By creating an account, I hereby consent to the
            <Bold>Terms & Conditons</Bold> of Zuke Inc.
          </Agreement>

          {newUser.password !== newUser.confirmPassword && (
            <Error>Passwords dont match</Error>
          )}

          <Button onClick={handleClick}>Register</Button>
          <Link
            to="/login"
            style={{ color: "inherit", fontSize: "14px", marginLeft: "10px" }}
          >
            Already have an account?
          </Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
