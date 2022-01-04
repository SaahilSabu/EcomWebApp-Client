import styled from "styled-components";
import { mobile } from "./../responsive";
import {
  Facebook,
  Twitter,
  Instagram,
  LocationOn,
  LocalPhone,
  EmailOutlined,
} from "@material-ui/icons";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })};

`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  ${mobile({ width: "100%" })};
`;
const Center = styled.div`
  padding: 20px;
  flex: 1;
  ${mobile({ display: "none" })};
`;
const Right = styled.div`
  padding: 20px;
  flex: 1;
  ${mobile({ width: "100%" })};
`;

const Logo = styled.h1`
  margin: 10px 15px;
  font-size: 40px;
  ${mobile({ fontSize: "25px" })};
`;

const Desc = styled.p`
  font-size: 15px;
  font-weight: 400;
  margin: 10px 15px;
  letter-spacing: 2px;
  ${mobile({ fontSize: "10px" })};
`;

const SocialIcon = styled.div`
  margin-right: 15px;
  background-color: #${(props) => props.bg};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  cursor: pointer;
  ${mobile({ width: "25px", height: "25px" })};
`;

const SocialIconContainer = styled.div`
  display: flex;
  margin: 10px 15px 15px;
`;

const Title = styled.h3`
  margin: 20px 0px;
  font-size: 30px;
  margin-bottom: 30px;
  ${mobile({ fontSize: "15px" })};
`;

const List = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  list-style: none;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
  width: 50%;
  cursor: pointer;
`;

const ContactItems = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  ${mobile({ fontSize: "10px" })};
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Zuke.</Logo>
        <Desc>© ZUKE LLP - Mechanical Keyboards and E-Sports Accessories</Desc>
        <SocialIconContainer>
          <SocialIcon bg={"1778F2"}>
            <Facebook />
          </SocialIcon>
          <SocialIcon bg={"1DA1F2"}>
            <Twitter />
          </SocialIcon>
          <SocialIcon bg={"E1306C"}>
            <Instagram />
          </SocialIcon>
        </SocialIconContainer>
      </Left>
      <Center>
        <Title>Links</Title>
        <List>
          <ListItem>HOME</ListItem>
          <ListItem>CART</ListItem>
          <ListItem>KEYBOARDS</ListItem>
          <ListItem>MOUSE</ListItem>
          <ListItem>MONITORS</ListItem>
          <ListItem>MOUSEPADS</ListItem>
          <ListItem>CONSOLES</ListItem>
          <ListItem>CONSOLE ACCESSORIES</ListItem>
          <ListItem>WISHLIST</ListItem>
          <ListItem>TERMS&CONDITIONS</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItems>
          <LocationOn
            style={{
              marginRight: "10px",
            }}
          />
          Foothill Rd Carpinteria, California(CA), 93013
        </ContactItems>
        <ContactItems>
          <LocalPhone
            style={{
              marginRight: "10px",
            }}
          />
          +(660) 727-1078
        </ContactItems>
        <ContactItems>
          <EmailOutlined
            style={{
              marginRight: "10px",
            }}
          />
          shopzuke@zukeinc.com
        </ContactItems>
      </Right>
    </Container>
  );
};

export default Footer;
