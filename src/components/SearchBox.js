// @flow

import React from "react";
import { Input } from "antd";
const Search = Input.Search;

type PropType = {
  setSearchValue: string => void
};

function SearchBox(props: PropType) {
  return (
    <Search
      placeholder="input search text"
      onSearch={value => console.log(value)}
      onChange={(event: SyntheticEvent<HTMLInputElement>) => {
        props.setSearchValue(event.currentTarget.value);
      }}
      size="large"
      style={{ width: 200 }}
    />
  );
}

export default SearchBox;
