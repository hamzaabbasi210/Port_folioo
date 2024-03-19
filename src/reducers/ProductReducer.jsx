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
    case "SET_RECENTLYADDED_API_DATA": {
      const recentlyAddedProducts = action.payload.map((val) => {
        return val.items.flatMap((val) => {
          return val.products.filter((val) => {
            return val.recently === true;
          });
        });
      });
      return {
        ...state,
        isLoading: false,
        Products: action.payload,
        recentlyAdded: recentlyAddedProducts,
      };
      // console.log(recentlyAdded);
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
    case "SET_TOPRATED_API_DATA": {
      const topRated = action.payload.map((val) => {
        return val.items.flatMap((val) => {
          return val.products.filter((val) => {
            return val.topRated === true;
          });
        });
      });
      // console.log(topRated);
      return {
        ...state,
        isLoading: false,
        Products: action.payload,
        topRated: topRated,
      };
    }
    case "SET_DAILYBESTDEALS_API_DATA": {
      const dailyBestDeals = action.payload.map((val) => {
        return val.items.flatMap((val) => {
          return val.products.filter((val) => {
            return val.dailyBestDeals === true;
          });
        });
      });
      // console.log(dailyBestDeals);
      return {
        ...state,
        isLoading: false,
        Products: action.payload,
        dailyBestDeals: dailyBestDeals,
      };
    }
    case "API_ERROR": {
      return {
        ...state,
        isError: true,
      };
    }

    case "SET_SINGLE_LOADING":
      return {
        ...state,
        isSingleLoading: true,
      };

    case "SET_SINGLE_PRODUCT":
      return {
        ...state,
        isSingleLoading: false,
        singleProduct: action.payload,
      };

    case "SET_SINGLE_ERROR":
      return {
        ...state,
        isSingleLoading: false,
        isError: true,
      };

    // case "SET_SINGLE_LOADING": {
    //   return {
    //     ...state,
    //     isSingleLoading: true,
    //   };
    // }
    // case "SET_SINGLE_PRODUCT_DATA": {
    //   return {
    //     ...state,
    //     isSingleLoading: false,
    //     singleProducts: action.payload,
    //   };
    // }
    // case "SINGLE_API_ERROR": {
    //   return {
    //     ...state,
    //     isSingleLoading: false,
    //     isSingleError: true,
    //   };
    // }
    default:
      return state;
  }
};
export default productReducer;
