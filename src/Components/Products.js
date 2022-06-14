import styled from "styled-components";
import { shopData } from './Object/Object';
import Cards from "./Cards";

const Products = () => {
  return (
    <>
      <Title>Our Products</Title>

      <ProductsWrapper>
        {shopData.map((data, index) => (
          <Cards key={index} {...data} />
        ))}
      </ProductsWrapper>
    </>
  );
};

export default Products;

const Title = styled.p`
  font-weight: bold;
  font-size: 20px;
  margin-top: 20px;
`;

const ProductsWrapper = styled.div`
  width: fit-content;
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 20px;
`;