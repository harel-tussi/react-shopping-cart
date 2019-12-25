const initialState = {
  cart: [],
  totalPrice: 0,
  totalQuantity: 0
};

export default (state = initialState, action) => {
  let cart = [...state.cart];
  switch (action.type) {
    case "ADD_ITEM":
      for (let index = 0; index < cart.length; index++) {
        if (cart[index].sku === action.payload.sku) {
          cart[index].quantity = cart[index].quantity + 1;
          return {
            cart,
            totalPrice: state.totalPrice + cart[index].price,
            totalQuantity: state.totalQuantity + 1
          };
        }
      }
      return {
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
        totalPrice: state.totalPrice + action.payload.price,
        totalQuantity: state.totalQuantity + 1
      };
    case "SUBTRACT_ITEM":
      for (let index = 0; index < cart.length; index++) {
        if (cart[index].sku === action.payload) {
          cart[index].quantity = cart[index].quantity - 1;
          return {
            cart: cart,
            totalPrice: state.totalPrice - cart[index].price,
            totalQuantity: state.totalQuantity - 1
          };
        }
      }
      break;
    case "DELETE_ITEM":
      return {
        totalPrice:
          state.totalPrice - action.payload.price * action.payload.quantity,
        cart: cart.filter(product => product.sku !== action.payload.sku),
        totalQuantity: state.totalQuantity - action.payload.quantity
      };
    default:
      return state;
  }
};
