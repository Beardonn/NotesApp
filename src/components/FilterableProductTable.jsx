import React, { Component } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = { filterText: "", isStockOnly: false };
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText,
    });
  }

  handleInStockChange(inStockOnly) {
    this.setState({
      inStockOnly: inStockOnly,
    });
  }

  render() {
    return (
      <div className="container text-center">
        <SearchBar
          filterText={this.state.filterText}
          isStockOnly={this.state.isStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStockChange}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          isStockOnly={this.state.isStockOnly}
        />
      </div>
    );
  }
}
export default FilterableProductTable;
