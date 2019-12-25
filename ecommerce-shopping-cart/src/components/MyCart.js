import React from "react";
import { connect } from "react-redux";
import "../styles/cart.css";
import CartProduct from "./CartProduct";
function MyCart(props) {
  const handleOnClick = () => {
    document.getElementById("cart").classList.toggle("active");
  };

  return (
    <div>
      <div id="cart" className="cart">
        <div className="checkout-button" onClick={handleOnClick}>
          <img alt="cart" src="./images/cart.png" className="cart-icon" />
          <span className="num-products">{props.totalQuantity}</span>
        </div>
        <div className="cart-header">Your Cart</div>
        <ul className="cart-all-products">
          {props.cart.length ? (
            props.cart.map(product => (
              <CartProduct
                key={product.sku}
                title={product.title}
                sku={product.sku}
                price={product.price}
                quantity={product.quantity}
                style={product.style}
              />
            ))
          ) : (
            <div className="cart-header">Add Items To Your Cart</div>
          )}
        </ul>
        <div className="cart-header yellow-text">
          Total Price: {props.totalPrice.toFixed(1)} $
        </div>
        <div className="order-button">Checkout</div>
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...state.cartReducer,
    ...ownProps
  };
};

export default connect(mapStateToProps)(MyCart);
