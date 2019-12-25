import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import cartReducer from "./cartReducer";
import filterReducer from "./filterReducer";

export default combineReducers({ productsReducer, cartReducer, filterReducer });
