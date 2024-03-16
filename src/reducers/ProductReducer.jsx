const productReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "SET_FEATURE_API_DATA": {
      const featureProductsData = action.payload
        .map((curElem) => {
          // console.log(curElem.items);
          return curElem.items.flatMap((val) => {
            return val.products.filter((val) => {
              return val.feature === true;
            });
          });
        })
        .filter((productsArray) => productsArray.length > 0);
      // console.log(featureProductsData);
      return {
        ...state,
        isLoading: false,
        Products: action.payload,
        featureProducts: featureProductsData,
      };
    }
    case "SET_TOPSELLING_API_DATA": {
      const topSelling = action.payload.map((val) => {
        return val.items.flatMap((val) => {
          return val.products.filter((val) => {
            return val.topSelling === true;
            // console.log(val.feature === true);
          });
        });
      });
      // console.log(topSelling);
      return {
        ...state,
        isLoading: false,
        Products: action.payload,
        topSelling: topSelling,
      };
    }
    case "SET_TRENDING_API_DATA": {
      const trendingProducts = action.payload.map((val) => {
        // console.log(val.items);
        return val.items.flatMap((val) => {
          return val.products.filter((val) => {
            return val.trending === true;
          });
        });
      });
      // console.log(trendingProducts);
      return {
        ...state,
        isLoading: false,
        Products: action.payload,
        trending: trendingProducts,
      };
    }
    case "API_ERROR": {
      return {
        ...state,
        isError: true,
      };
    }
  }
  return state;
};
export default productReducer;
