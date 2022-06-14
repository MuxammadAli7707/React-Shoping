import styled from "styled-components";
import React from 'react';
import useShop from "./Context";
import Cards from "./Cards";

const Carting = () => {
  const { products, total } = useShop();
  return (
    <>
      <Title>Your cart total is {total}.00$</Title>
      <ProductsWrapper>
        {products.map((product, index) => (
          <Cards {...product} key={index} />
        ))}
      </ProductsWrapper>
    </>
  );
};

export default Carting;

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