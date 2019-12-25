import axios from "axios";
export const setProducts = () => {
  return async dispatch => {
    const { data } = await axios.get("/db");
    dispatch({ type: "SET_PRODUCTS", payload: data });
  };
};

export const TOGGLE_LOADING = () => {
  return { type: "TOGGLE_LOADING" };
};
