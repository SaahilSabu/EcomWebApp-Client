import styled from "styled-components";
import { mobile } from "./../responsive";

const Container = styled.div`
  height: 25px;
  display: flex;
  justify-content: center;
  align-contents: center;
  background-color: #455a64;
  font-weight: 600;
  padding: 10px 10px 10px;
  font-size: 20px;
  color: white;
  ${mobile({ fontSize: "15px", padding: "5px 5px 5px" })};
`;

const Announcement = () => {
  return (
    <Container>Super Deal --> Free shipping on orders over 50$.</Container>
  );
};

export default Announcement;
