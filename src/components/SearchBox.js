// @flow

import React, { Component } from "react";

class SearchBox extends Component {
  handleChange(e) {
    this.props.searchCoins(e.target.value);
  }
  render() {
    return (
      <label>
        <textarea
          rows="1"
          placeholder="Search"
          onChange={this.handleChange.bind(this)}
        />
      </label>
    );
  }
}

export default SearchBox;
