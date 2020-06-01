import React, { Component } from "react";

class ProductCategoryRow extends Component {
  render() {
    const category = this.props.category;
    return (
      <div className="container">
        <div className="row">
          <div className="col">{category}</div>
        </div>
      </div>
    );
  }
}
export default ProductCategoryRow;
