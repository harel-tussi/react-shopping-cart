import React, { memo } from "react";
import { ADD_ITEM } from "../actions/cartActions";
import { connect } from "react-redux";

function Product({ sku, title, style, price, addItem }) {
  const handleOnClick = () => {
    addItem(ADD_ITEM({ title, style, price, sku }));
  };

  return (
    <div className="dashboard-product">
      <div>
        <div>
          <img
            alt={sku}
            className="product-image"
            src={`/images/products/${sku}_1.jpg`}
          ></img>
        </div>
        <h4 className="product-title">{title}</h4>
        <p>{style}</p>
        <p>{price} $</p>
        <button className="btn-add" onClick={handleOnClick}>
          Add To Shopping Cart
        </button>
      </div>
    </div>
  );
}
const mapStateToprops = () => ({});
const mapDispatchToProps = dispatch => {
  return { addItem: action => dispatch(action) };
};

export default memo(connect(mapStateToprops, mapDispatchToProps)(Product));
