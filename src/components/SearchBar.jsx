import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleFilterTextChange.bind(this);
  }

  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }
  handleInStockChange(e) {
    this.props.onInStohandleInStockChange(e.target.checked);
  }
  render() {
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;

    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <input
              type="text"
              placeholder="Search..."
              value={this.props.filterText}
              onChange={this.handleFilterTextChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label>
              <input
                type="checkbox"
                checked={this.props.inStockOnly}
                onChange={this.handleInStockChange}
              />
              Only show products in stock
            </label>
          </div>
        </div>
      </div>
    );
  }
}
export default SearchBar;
