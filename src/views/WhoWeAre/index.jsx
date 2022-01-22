import { memo } from "react";

import MainMenu from "../../components/MainMenu";
import RowImage from "../../components/RowImage";

import * as ST from "./styles";

const WhoWeAre = () => {
  return (
    <ST.Container>
      <MainMenu activePage={"whoweare"} />
      <ST.content>
        <RowImage />
      </ST.content>
    </ST.Container>
  );
};

export default memo(WhoWeAre);
