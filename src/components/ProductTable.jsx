import React, { Component } from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

class ProductTable extends Component {
  render() {
    const rows = [];
    const filterText = this.props.filterText;
    const isStockOnly = this.props.isStockOnly;
    const products = this.props.products;
    let lastCategory = null;

    products.forEach((product) => {
      if (isStockOnly && product.stocked) {
        return;
      }
      if (product.name.indexOf(filterText) === -1) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category}
          />
        );
      }
      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
    });
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">Name</div>
          <div className="col-6">Price</div>
        </div>
        {rows}
      </div>
    );
  }
}
export default ProductTable;
