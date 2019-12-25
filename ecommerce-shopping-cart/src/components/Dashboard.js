import React, { Component } from "react";
import { connect } from "react-redux";
import { setProducts, TOGGLE_LOADING } from "../actions/productActions";
import Product from "./Product";
import "../App.css";
import "../styles/loader.css";
class Dashboard extends Component {
  componentDidMount() {
    this.props.setInitialProducts();
  }
  getProducts = () => {
    this.props.toggleLoading();
    let products = this.props.products.products;
    let { sizes } = this.props;
    if (sizes.length) {
      products = products.filter(product =>
        product.availableSizes.some(v => {
          return sizes.indexOf(v) >= 0;
        })
      );
    }
    this.props.toggleLoading();
    return products.map(product => (
      <Product
        key={product.sku}
        sku={product.sku}
        style={product.style}
        title={product.title}
        price={product.price}
      />
    ));
  };

  render() {
    return (
      <div>
        <h1 className="header">Shirts Shop</h1>
        <div className="container">
          {this.props.loading ? (
            <div className="lds-dual-ring"></div>
          ) : (
            this.getProducts()
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...state.productsReducer,
    ...state.filterReducer,
    ...ownProps
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setInitialProducts: () => dispatch(setProducts()),
    toggleLoading: () => {
      dispatch(TOGGLE_LOADING);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
