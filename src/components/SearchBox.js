// @flow

import React from "react";
import { Input } from "antd";
const Search = Input.Search;

type PropType = {
  searchCoins: string => void
};

function SearchBox(props: PropType) {
  return (
    <Search
      placeholder="input search text"
      onSearch={value => console.log(value)}
      onChange={(event: SyntheticEvent<HTMLInputElement>) => {
        props.searchCoins(event.currentTarget.value);
      }}
      size="large"
      style={{ width: 200 }}
    />
  );
}

export default SearchBox;
