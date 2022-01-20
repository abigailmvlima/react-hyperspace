import { memo } from "react";

import * as ST from "./styles";

const MainMenu = ({ listMain }) => {
  return (
    <ST.Container>
      {listMain &&
        listMain.map((row, key) => {
          return (
            <ST.MainContent href={row.href} key={key}>
              {row.label}
            </ST.MainContent>
          );
        })}
    </ST.Container>
  );
};

export default memo(MainMenu);
