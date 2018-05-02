// @flow

import React from "react";
import fuzzysearch from "fuzzysearch";
import CoinRecord from "./CoinRecord";

type PropType = {
  searchValue: string,
  coinRecords: Array<{ [string]: string }>
};

function CoinList(props: PropType): Array<any> {
  const ticker = props.coinRecords.map(coin => {
    if (props.searchValue === "") {
      return <CoinRecord key={coin.id} coin={coin} />;
    } else {
      if (
        fuzzysearch(props.searchValue.toUpperCase(), coin.name.toUpperCase())
      ) {
        return <CoinRecord key={coin.id} coin={coin} />;
      }
    }
    return null;
  });
  return ticker;
}

export default CoinList;
