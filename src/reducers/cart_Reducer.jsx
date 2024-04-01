function cart_Reducer(state, action) {
  if (action.type === "ADD_TO_CART") {
    return {
      ...state,
      cart: [...state.cart, action.payload],
    };
  }
}

export default cart_Reducer;
