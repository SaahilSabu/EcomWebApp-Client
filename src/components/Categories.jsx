import styled from "styled-components";
import CategoryItem from "./CategoryItem";
import CategoryTabItem from "./CategoryTabItem";
import { categories, categoriesTab } from "../data.js";
import { mobile } from "./../responsive";
const Container = styled.div`
  padding: 20px;
  align-items: center;
  background-color: #dcdde1;
  ${mobile({ padding: "0px" })};
  
`;

const Wrapper = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })};
`;

const Categories = () => {
  return (
    <Container>
      <Wrapper>
        {categoriesTab.map((item) => (
          <CategoryTabItem item={item} key={item.id} />
        ))}
      </Wrapper>
      <Wrapper>
        {categories.map((item) => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Categories;
