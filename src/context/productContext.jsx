import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/ProductReducer";
import { useParams } from "react-router";
const AppContext = createContext();

const Api = "http://localhost:3000/productData";
const initialState = {
  isLoading: false,
  isError: false,
  Products: [],
  featureProducts: [],
  topSelling: [],
  trending: [],
  recentlyAdded: [],
  topRated: [],
  dailyBestDeals: [],
  isSingleError: false,
  isSingleLoading: false,
  singleProduct: [],
  dalsAndPulses:[]
};
// console.log(dalsAndPulses)
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { id } = useParams;
  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });

    try {
      const res = await axios.get(url);
      const products = await res.data;
      // console.log(products);
      dispatch({ type: "SET_FEATURE_API_DATA", payload: products });
      dispatch({ type: "SET_TOPSELLING_API_DATA", payload: products });
      dispatch({ type: "SET_TRENDING_API_DATA", payload: products });
      dispatch({ type: "SET_RECENTLYADDED_API_DATA", payload: products });
      dispatch({ type: "SET_TOPRATED_API_DATA", payload: products });
      dispatch({ type: "SET_DAILYBESTDEALS_API_DATA", payload: products });
      dispatch({type:"DALS_AND_PULSES", payload: products})
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };
  // console.log(getProducts);
  // my 2nd api call for single product

  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(url);
      const singleProduct = await res.data;
      // console.log(singleProduct);
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

  // const getSingleProduct = async (url) => {
  //   dispatch({ type: "SET_SINGLE_LOADING" });
  //   try {
  //     const res = await axios.get(url);
  //     const singleProduct = await res.data;
  //     // console.log(singleProduct);
  //     dispatch({ type: "SET_SINGLE_PRODUCT_DATA", payload: singleProduct });
  //   } catch (error) {
  //     dispatch({ type: "SINGLE_API_ERROR" });
  //   }
  // console.log(getSingleProduct);
  // };

  useEffect(() => {
    getSingleProduct(Api);
    getProducts(Api);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </AppContext.Provider>
  );
};

// custom hook
const useProductContext = () => {
  return useContext(AppContext);
};
export { AppProvider, AppContext, useProductContext };
