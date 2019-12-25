import React from "react";
import { connect } from "react-redux";
import { SUBTRACT_ITEM, ADD_ITEM, DELETE_ITEM } from "../actions/cartActions";
function CartProduct({
  title,
  price,
  sku,
  style,
  quantity,
  substractItem,
  addItem,
  deleteItem
}) {
  const substractProduct = () => {
    substractItem(sku);
  };

  const handleAddItem = () => {
    addItem(sku);
  };

  const handleDeleteItem = () => {
    deleteItem({ sku, price, quantity });
  };

  return (
    <li key={sku}>
      <div className="cart-product">
        <div className="image-details">
          <img
            alt={sku}
            className="cart-product-image"
            src={`/images/products/${sku}_2.jpg`}
          ></img>
          <div className="details">
            <p>{title}</p>
            <p>{style}</p>
            <p className="yellow-text">{price}$</p>
            <p>Quantity: {quantity}</p>
          </div>
        </div>
        <div className="actions-section">
          <div className="delete" onClick={handleDeleteItem}>
            X
          </div>
          <div className="add-remove">
            <button
              onClick={substractProduct}
              className={quantity === 1 ? "disabled" : ""}
              disabled={quantity > 1 ? false : true}
            >
              -
            </button>
            <button onClick={handleAddItem}>+</button>
          </div>
        </div>
      </div>
    </li>
  );
}

const mapStateToProps = (state, ownProps) => {
  return { ...ownProps };
};

const mapDispatchToProps = dispatch => {
  return {
    substractItem: sku => dispatch(SUBTRACT_ITEM(sku)),
    addItem: sku => dispatch(ADD_ITEM({ sku })),
    deleteItem: item => dispatch(DELETE_ITEM(item))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartProduct);
