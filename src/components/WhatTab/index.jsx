import { memo } from "react";

import * as ST from "./styles";

const WhatTab = ({ theme, title, description }) => {
  return (
    <ST.colunnTable>
      <ST.colunnTable2>
        <ST.divIcon>
          <ST.colunnIcon>{theme}</ST.colunnIcon>
        </ST.divIcon>
        <ST.colunnContent>
          <ST.colunnTitle>{title}</ST.colunnTitle>
          <ST.colunnDescripition>{description}</ST.colunnDescripition>
        </ST.colunnContent>
      </ST.colunnTable2>
    </ST.colunnTable>
  );
};

export default memo(WhatTab);
