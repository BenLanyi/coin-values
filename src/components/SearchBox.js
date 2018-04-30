// @flow

import React, { Component } from "react";

class SearchBox extends Component {
  // onSubmit(e) {
  //   e.preventDefault();
  //   this.props.searchCoins(this.refs.text.value);
  // }
  handleChange(e) {
    console.log(e.target.value);
  }
  render() {
    return (
      // <form onSubmit={this.onSubmit.bind(this)}>
      //   <div>
      //     <input placeholder="Enter Text" type="text" ref="text" />
      //   </div>
      // </form>
      <label>
        Search:
        <textarea onChange={this.handleChange.bind(this)} />
      </label>
    );
  }
}

export default SearchBox;
