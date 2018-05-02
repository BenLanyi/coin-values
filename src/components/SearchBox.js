// @flow

import React from "react";

type PropType = {
  searchCoins: string => void
};

function SearchBox(props: PropType) {
  return (
    <label>
      <input
        type="text"
        rows="1"
        placeholder="Search"
        onChange={(event: SyntheticEvent<HTMLInputElement>) => {
          props.searchCoins(event.currentTarget.value);
        }}
      />
    </label>
  );
}

export default SearchBox;
