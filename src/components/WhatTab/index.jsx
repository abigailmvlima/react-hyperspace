import { memo } from "react";

import * as ST from "./styles";

const WhatTab = ({ theme, title, description, onClick }) => {
  return (
    <ST.colunnTable>
      <ST.colunnTable2>
        <ST.divIcon>
          <ST.colunnIcon theme={theme} />
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
