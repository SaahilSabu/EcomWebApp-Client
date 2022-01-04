import styled from "styled-components";
import { Send } from "@material-ui/icons";
import { mobile } from "./../responsive";

const Container = styled.div`
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #ced4da;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  ${mobile({ fontSize: "50px", margin: "10px 20px" })};
`;
const Desc = styled.div`
  font-size: 25px;
  font-weight: 400;
  margin-bottom: 20px;
  ${mobile({ fontSize: "25px", margin: "10px 20px", textAlign: "center" })};
`;
const InputContainer = styled.div`
  width: 50%;
  height: 50px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid #e9ecef;
  ${mobile({ margin: "10px 20px", width: "80%" })};
`;
const Input = styled.input`
  flex: 8;
  border: none;
  font-weight: 400;
  padding-left: 20px;
  outline: none;
`;
const Button = styled.button`
  flex: 1;
  background-color: #e9ecef;
  color: #343a40;
  border: none;
  outline: none;
  cursor: pointer;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>NEWSLETTER</Title>
      <Desc>
        GET DAILY UPDATES ON DISCOUNTS BY SIGNING UP TO OUR NEWSLETTER
      </Desc>
      <InputContainer>
        <Input placeholder="Enter your Email here" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
