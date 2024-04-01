import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import reducer from "../reducers/cart_Reducer";
import axios from "axios";

const CartContaxt = createContext();
const initialState = {
  cart: [],
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };
  return (
    <CartContaxt.Provider value={{ ...state, addToCart }}>
      {children}
    </CartContaxt.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContaxt);
};
export { CartProvider, CartContaxt, useCartContext };
