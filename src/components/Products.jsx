import React from "react";
import { popularProducts } from "../data.js";
import styled from "styled-components";
import Product from "./Product";
import axios from "axios";
import { useState, useEffect } from "react";
import { mobile } from "./../responsive";

const Container = styled.div`
  padding: 10px 50px 20px;
`;
const Wrapper = styled.div`
  flex-wrap: wrap;
  display: flex;
`;

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          `https://zuke-online-store.herokuapp.com/api/products?cat=${cat}`
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [cat, products, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Container>
      <Wrapper>
        {filteredProducts.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Products;
