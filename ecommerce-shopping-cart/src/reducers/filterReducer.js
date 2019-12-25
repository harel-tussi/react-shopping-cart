const initialState = {
  sizes: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_SIZE":
      let sizes = [...state.sizes];
      const index = sizes.indexOf(action.payload);
      if (index > -1) {
        sizes = sizes.filter(size => size !== action.payload);
        return {
          ...state,
          sizes
        };
      } else {
        return {
          ...state,
          sizes: [...state.sizes, action.payload]
        };
      }
    default:
      return state;
  }
};
