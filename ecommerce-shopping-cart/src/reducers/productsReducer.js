const initialState = {
  loading: true,
  products: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        loading: !state.loading,
        products: action.payload
      };
    case "TOGGLE_LOADING":
      return {
        ...state,
        loading: !state.loading
      };
    default:
      return state;
  }
};
