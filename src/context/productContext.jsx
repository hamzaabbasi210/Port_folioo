import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/ProductReducer";
const AppContext = createContext();

const Api = "http://localhost:3000/productData";
const initialState = {
  isLoading: false,
  isError: false,
  Products: [],
  featureProducts: [],
  topSelling: [],
  trending: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });

    try {
      const res = await axios.get(url);
      const products = await res.data;
      // console.log(products);
      dispatch({ type: "SET_FEATURE_API_DATA", payload: products });
      dispatch({ type: "SET_TOPSELLING_API_DATA", payload: products });
      dispatch({ type: "SET_TRENDING_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  useEffect(() => {
    getProducts(Api);
  }, []);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

// custom hook
const useProductContext = () => {
  return useContext(AppContext);
};
export { AppProvider, AppContext, useProductContext };
