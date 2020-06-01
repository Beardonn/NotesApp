import React, { Component } from "react";

class ProductRow extends Component {
  render() {
    const product = this.props.product;
    const name = product.stocked ? (
      product.name
    ) : (
      <span style={{ color: "red" }}>{product.name}</span>
    );
    return (
      <div className="container">
        <div className="row">
          <div className="col-6 ">
            <p className="justify-content-end">{name}</p>
          </div>
          <div className="col-6 ">{product.price}</div>
        </div>
      </div>
    );
  }
}
export default ProductRow;
