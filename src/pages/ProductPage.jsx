import styled from "styled-components";
import Navbar from "../components/Navbar.jsx";
import Announcement from "../components/Announcement.jsx";
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";
import { mobile } from "./../responsive";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { publicRequest } from "./../requestMethods";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/cartRedux.js";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({
    display: "flex",
    flexDirection: "column",
    padding: "40px",
  })};
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 70vh;
  object-fit: cover;
  ${mobile({
    width: "80vw",
    height: "100%",
    objectFit: "cover",
  })};
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({
    display: "flex",
    flexDirection: "column",
    padding: "0px 5px",
  })};
`;
const Title = styled.h1`
  font-size: 40px;
  ${mobile({
    fontSize: "20px",
    marginTop: "10px",
  })};
`;
const Desc = styled.p`
  padding: 20px 0px;
  letter-spacing: 2px;
  word-spacing: 4px;
  font-size: 20px;
  ${mobile({
    fontSize: "15px",
    marginTop: "10px",
  })};
`;
const Price = styled.span`
  font-size: 40px;
  font-weight: 300;
  ${mobile({
    fontSize: "30px",
    margin: "10px 0px",
  })};
`;

const FilterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  ${mobile({
    fontSize: "20px",
    margin: "20px 0px",
    flexDirection: "column",
  })};
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
  ${mobile({
    margin: "20px 0px",
  })};
`;
const FilterTitle = styled.span`
  font-size: 30px;
  font-weight: 400;
  margin-right: 20px;
  ${mobile({
    fontSize: "15px",
    marginRight: "10px",
  })};
`;
const FilterColor = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 20px;
  ${mobile({
    marginRight: "10px",
  })};
`;
const FilterSize = styled.select`
  padding: 5px;
  ${mobile({
    padding: "2px",
  })};
`;
const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-between;
  margin: 30px 0px 0px;
  ${mobile({
    fontSize: "20px",
    flexDirection: "column",
    margin: "0px",
    width: "100%",
  })};
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  font-weight: 700;
  ${mobile({
    fontSize: "20px",
    marginBottom: "20px",
  })};
`;
const Amount = styled.span`
  width: 40px;
  height: 40px;
  border-radius: 15px;
  border: 1px solid grey;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  margin: 0px 5px;
  ${mobile({
    fontSize: "20px",
    margin: "0px",
  })};
`;
const Button = styled.button`
  padding: 15px;
  font-size: 15px;
  font-weight: 500;
  border: 2px solid grey;
  background-color: white;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    background-color: black;
    color: white;
  }
  ${mobile({
    fontSize: "10px",
    padding: "10px",
    width: "100%",
  })};
`;

const ProductPage = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [size, setSize] = useState("");
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch()

  useEffect(() => {                                       //to fetch product page from product list
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);

  const handleQtyClick = (type) => {             //update qty number using plus and minus buttons
    if (type === "add") {
      setQty(qty + 1);
    } else {
      if (qty > 1) setQty(qty - 1);
      else setQty(1);
    }
  };

  const handleClick = () =>{
    //update cart
    dispatch(
    addProduct({...product, qty, size })
    )
  }

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>$ {product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Switch :</FilterTitle>
              <FilterColor src="https://media.kingston.com/hyperx/content/Cherry%20MX%20Red%20Switch%20-%20Animated%20GIF_MXBlue_v001%20(1).gif" />
              <FilterColor src="https://media.kingston.com/hyperx/content/Cherry%20MX%20Blue%20Switch%20-%20Animated%20GIF_MXBlue%20(1).gif" />
              <FilterColor src="https://media.kingston.com/hyperx/content/Cherry%20MX%20Brown%20Switch%20-%20Animated%20GIF_MXBlue_v001%20(1).gif" />
            </Filter>
            <Filter>
              <FilterTitle>Size :</FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((s) => (
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>

          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQtyClick("remove")} />
              <Amount>{qty}</Amount>
              <Add onClick={() => handleQtyClick("add")} />
            </AmountContainer>
            <Button onClick = {handleClick} >Add To Cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default ProductPage;
