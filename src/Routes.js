// @flow

import { Route } from "react-router-dom";
import React from "react";
import Main from "./components/Main";
import RouterTest from "./components/RouterTest";

type PropType = {
  setSearchValue: string => void,
  searchValue: string,
  coinRecords: Array<{ [string]: string }>
};

const Routes = (props: PropType) => {
  return (
    <div>
      <Route path="/hello" component={RouterTest} />
      <Route path="/" render={() => <Main {...props} />} />
    </div>
  );
};

export default Routes;
