import { Route, Router, Routes, Link } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import React from 'react';
import Products from './Components/Products';
import Carting from './Components/Carting';
import { ShopProvider } from './Components/Context';

const App = () => {
  return (
    <ShopProvider>
      <Wrapper>
        <TitleWrapper>
          <h1>Welcome to DC Clothing Shop</h1>
        </TitleWrapper>
        <LinksWrapper>
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
        </LinksWrapper>
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/cart' element={<Carting />} />
        </Routes>
      </Wrapper>
    </ShopProvider>
  );
};

export default App;


const Wrapper = styled.div`
  font-family: "Roboto";
  margin: 40px;

  display: grid;
  row-gap: 20px;
  justify-content: center;
`;

const TitleWrapper = styled.div`
  * {
    margin: 0;
  }

  display: grid;
  row-gap: 10px;

  a {
    text-decoration: none;
    font-weight: bold;
    color: black;
  }
`;

const LinksWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;

  a {
    text-decoration: none;
    color: #bb7250;

    :hover {
      color: #bb7250;
      font-weight: bold;
      text-decoration: underline;
    }
  }
`;
