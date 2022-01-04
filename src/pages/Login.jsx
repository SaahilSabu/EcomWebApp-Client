import styled from "styled-components";
import { mobile } from "./../responsive";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { login } from './../redux/apiCalls';
import { Link } from 'react-router-dom';

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
  object-fit: cover;
  border: none;
  transform: scale(1.1);
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
  width: 420px;
  margin-right: 30px;
  margin-left: 10px;
  margin-bottom: 10px;
  padding: 20px;
  -webkit-box-shadow: 0 0 0px 1000px white inset;
  display: flex;
  ${mobile({
    fontSize: "12px",
    width: "70%",
  })};
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

  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;
const LinkSpan = styled.a`
  display: flex;
  margin-top: 10px;
  margin-left: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 14px;
  text-decoration: underline;
  ${mobile({
    fontSize: "10px",
  })};
`;

const Error = styled.span`
  color: red;
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { email, password });
  };
  return (
    <Container>
      <BgImg src="https://hardwarecanucks.com/wp-content/uploads/HyperX-Ducky-One-2-Mini-29.png" />
      <Wrapper>
        <Title>Sign In</Title>
        <Form>
          <Input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          <Input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          <Button onClick={handleClick} disabled={isFetching} >Login</Button>
          {error && <Error>Something went wrong...</Error>}
          <LinkSpan>Forgot Password?</LinkSpan>
          <Link to = "/register" style={{ color: 'inherit', fontSize: "14px", marginLeft: "10px"}}>Create an Account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
