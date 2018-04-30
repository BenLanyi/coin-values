// @flow

import React, { Component } from "react";
type PropType = {
  searchCoins: string => void
};
type StateType = {};

class SearchBox extends Component<PropType, StateType> {
  handleChange = (e: SyntheticEvent<HTMLInputElement>) => {
    this.props.searchCoins(e.currentTarget.value);
  };
  render() {
    return (
      <label>
        <input
          type="text"
          rows="1"
          placeholder="Search"
          onChange={this.handleChange.bind(this)}
        />
      </label>
    );
  }
}

export default SearchBox;
