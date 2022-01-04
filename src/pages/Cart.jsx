import Navbar from "./../components/Navbar";
import Announcement from "./../components/Announcement";
import Footer from "./../components/Footer";
import styled from "styled-components";
import { Add } from "@material-ui/icons";
import { Remove } from "@material-ui/icons";
import { mobile } from "./../responsive";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { useState, useEffect } from "react";
import { userRequest } from "../requestMethods.js";
import { useHistory } from "react-router";

const KEY = process.env.REACT_APP_STRIPE;

const Container = styled.div``;

const Wrapper = styled.div``;
const Title = styled.h1`
  text-align: center;
  ${mobile({
    fontSize: "25px",
  })};
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  ${mobile({
    justifyContent: "spaceAround",
  })};
`;
const TopButton = styled.button`
  padding: 10px;
  width: 150px;
  border: 2px solid ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
  transition: all 0.5s ease;
  &:hover {
    background-color: ${(props) =>
      props.type === "filled" ? "white" : "black"};
    color: ${(props) => (props.type === "filled" ? "black" : "white")};
  }
  ${mobile({
    width: "25%",
    padding: "5px",
  })};
`;
const TopTexts = styled.div`
  margin: 20px;
  font-size: 20px;
  font-weight: 600;
  ${mobile({
    fontSize: "12px",
    margin: "10px",
  })};
`;
const TopText = styled.span`
  margin: 20px;
  text-decoration: underline;
  cursor: pointer;
  ${mobile({
    margin: "5px",
  })};
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  ${mobile({
    flexDirection: "column",
  })};
`;
const Info = styled.div`
  flex: 3;
`;
const Product = styled.div`
  display: flex;
  padding: 20px;
  ${mobile({
    padding: "0px",
  })};
`;
const ProductDetail = styled.div`
  display: flex;
  ${mobile({
    flexDirection: "column",
  })};
`;
const Image = styled.img`
  height: 200px;
  width: 300px;
  object-fit: cover;
  ${mobile({
    width: "40vw",
    height: "50%",
  })};
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 50%;
  padding: 20px;
  ${mobile({
    margin: "0px 10px",
  })};
`;
const ProductName = styled.span`
  width: 200px;
  padding: 20px 10px 10px 0px;
  font-size: 20px;
  ${mobile({
    fontSize: "15px",
    padding: " 0px",
  })};
`;
const ProductId = styled.span`
  padding: 20px 10px 10px 0px;
  font-size: 15px;
  width: 200px;
  ${mobile({
    fontSize: "15px",
    padding: " 0px",
  })};
`;

const ProductSize = styled.span`
  padding: 20px 10px 10px 0px;
  font-size: 15px;
  width: 200px;
  ${mobile({
    fontSize: "15px",
    padding: " 0px",
  })};
`;

const PriceDetail = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  font-size: 50px;
  font-weight: 300;
  padding: 20px;
  ${mobile({
    fontSize: "20px",
    padding: "0px",
    fontWeight: "600",
  })};
`;
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;
const Amount = styled.div`
  border-radius: 20%;
  padding: 10px;
  font-size: 15px;
  border: 1px solid black;
  margin: 10px 20px;
  font-weight: 600;
  ${mobile({
    fontSize: "15px",
    border: "0.5px solid black",
    padding: "15px",
    margin: "3px",
  })};
`;

const ProductPrice = styled.div`
  margin: 20px;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  padding: 20px;
  border-radius: 10px;
  height: 50vh;
`;
const SummaryTitle = styled.h1`
  font-weight: 400;
`;
const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: ${(props) => props.type === "title" && "25px"};
  font-weight: ${(props) => props.type === "title" && "500"};
  margin: 20px 10px;
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
  width: 100%;
  font-size: 15px;
  padding: 10px;
  margin-top: 20px;
  font-weight: 500;
  background-color: black;
  color: white;
  transition: all 0.5s ease;
  &:hover {
    background-color: white;
    color: black;
  }
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  const history = useHistory();
  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: 500,
        });
        history.push("/success", {
          stripeData: res.data,
          products: cart,
        });
      } catch {}
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart.total, history]);

  return (
    <Container>
      <Announcement></Announcement>
      <Navbar></Navbar>
      <Wrapper>
        <Title>Your Bag</Title>
        <Top>
          <TopButton>Continue Shopping</TopButton>
          <TopTexts>
            <TopText>Bag (2)</TopText>
            <TopText>Wishlist (4)</TopText>
          </TopTexts>
          <TopButton type="filled">Checkout</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product) => (
              <Product>
                <ProductDetail>
                  <Image src={product.img} />
                  <Details>
                    <ProductName>
                      <b>Product :</b>
                      {product.title}
                    </ProductName>
                    <ProductId>
                      <b>ID :</b>
                      {product._id}
                    </ProductId>
                    <ProductSize>
                      <b>Size :</b>
                      {product.size}
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add />
                    <Amount>{product.qty}</Amount>
                    <Remove />
                  </ProductAmountContainer>
                  <ProductPrice>$ {product.price * product.qty}</ProductPrice>
                </PriceDetail>
              </Product>
            ))}
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>Order Summary</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal :</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Total :</SummaryItemText>
              <SummaryItemPrice>$ 8</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount :</SummaryItemText>
              <SummaryItemPrice>$ -8</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="title">
              <SummaryItemText>Total :</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout
              name="Zuke"
              image="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cb6d15ee-9f60-434a-9a5d-d91026e33e0a/d7til5w-2f3260a3-7092-47b4-aad3-d921b361cc4b.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2NiNmQxNWVlLTlmNjAtNDM0YS05YTVkLWQ5MTAyNmUzM2UwYVwvZDd0aWw1dy0yZjMyNjBhMy03MDkyLTQ3YjQtYWFkMy1kOTIxYjM2MWNjNGIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.pD52YTUbCEL4DLf6lnWcLUJFI9gpFglFsfO5xLAMErQ"
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <Button>CHECKOUT NOW</Button>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>

      <Footer></Footer>
    </Container>
  );
};

export default Cart;
