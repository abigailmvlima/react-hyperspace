import { memo } from "react";

import MainMenu from "../../components/MainMenu";

import * as ST from "./styles";

const GetInTouch = () => {
  return (
    <ST.Container>
      <MainMenu activePage={"getintouch"} />
    </ST.Container>
  );
};

export default memo(GetInTouch);
