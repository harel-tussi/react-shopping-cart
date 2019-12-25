import React from "react";
import "../styles/filter.css";
import { connect } from "react-redux";
import { ADD_SIZE } from "../actions/filterActions";
import Size from "./Size";
const allSizes = ["XS", "S", "M", "L", "XL", "XXL"];
function Filter({ sizes, addSize }) {
  const handleSizeChoose = size => {
    addSize(size);
  };

  return (
    <div className="filters-section">
      <div className="sizes">
        <div className="sizes-title">Sizes</div>
        <div className="sizes-content">
          {allSizes.map(size => (
            <Size
              key={size}
              size={size}
              chosen={sizes.indexOf(size) > -1}
              handleSizeChoose={handleSizeChoose}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    sizes: [...state.filterReducer.sizes],
    ...ownProps
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addSize: size => {
      dispatch(ADD_SIZE(size));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
