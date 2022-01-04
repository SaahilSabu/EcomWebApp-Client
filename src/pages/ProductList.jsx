import styled from "styled-components";
import Navbar from "../components/Navbar.jsx";
import Announcement from "../components/Announcement.jsx";
import Products from "../components/Products";
import Footer from "../components/Footer";
import { mobile } from "./../responsive";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Container = styled.div``;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 10px 20px;
`;
const Title = styled.h1`
  margin: 10px 20px;
  ${mobile({
    margin: "10px 25px",
    fontSize: "20px",
  })};
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({
    fontSize: "15px",
  })};
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  background-color: transparent;
  ${mobile({
    padding: "5px",
    marginTop: "10px",
  })};
`;

const Option = styled.option`
  background-color: #e5e5e5;
`;

const ProductList = () => {
  const loc = useLocation();
  const cat = loc.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("Newest");
  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>{`${cat}`.toUpperCase()}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products :</FilterText>
          <Select name="type" onChange={handleFilters}>
            <Option disabled="disabled">Type</Option>
            <Option>Cherry MX</Option>
            <Option>Gateron</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled="disabled">Size</Option>
            <Option>Full Size</Option>
            <Option>75%</Option>
            <Option>65%</Option>
            <Option>60%</Option>
            <Option>Numberpad</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products :</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (Asc)</Option>
            <Option value="desc">Price (Desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat = {cat} filters = {filters} sort = {sort} />
      <Footer />
    </Container>
  );
};

export default ProductList;
