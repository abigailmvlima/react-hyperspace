import { memo } from "react";

import MainMenu from "../../components/MainMenu";

import * as ST from "./styles";

const WhatWeDo = () => {
  return (
    <ST.Container>
      <MainMenu activePage={"whatwedo"} />
    </ST.Container>
  );
};

export default memo(WhatWeDo);
