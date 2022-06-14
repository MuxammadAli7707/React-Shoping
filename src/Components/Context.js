import React, { createContext, useReducer, useContext } from 'react';
import Reducer, { initialState } from './Reducer';

const Context = createContext(initialState);

export const ShopProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const addToCart = (product) => {
    const updateCart = state.products.concat(product);
    updatePrice(updateCart);
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        products: updateCart
      }
    });
  };

  const removeFromCart = (product) => {
    const updateCart = state.products.filter(
      (currentProduct) => currentProduct.name !== product.name
    );
    updatePrice(updateCart);

    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        products: updateCart
      }
    });
  }

  const updatePrice = (products) => {
    let total = 0;
    products.forEach((product) => (total += product.price));
  
    dispatch({
      type: "UPDATE_PRICE",
      payload: {
        total
      }
    });
  };

  const value = {
    total: state.total,
    products: state.products,
    addToCart,
    removeFromCart
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

const useShop = () => {
  const contexting = useContext(Context);

  return contexting;
};

export default useShop;