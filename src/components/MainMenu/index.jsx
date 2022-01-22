import { memo } from "react";
import actions from "../../stores/actions";

import * as ST from "./styles";

const MainMenu = () => {
  const listMain = [
    {
      label: "Welcome",
      name: "welcome",
      onClick: () => {
        actions.navigate.show("/");
      },
    },
    {
      label: "Who We Are",
      name: "whoweare",
      onClick: () => {
        actions.navigate.show("/whoweare");
      },
    },
    {
      label: "What We Do",
      name: "whatwedo",
      onClick: () => {
        actions.navigate.show("/whatwedo");
      },
    },
    {
      label: "Get In Touch",
      name: "getintouch",
      onClick: () => {
        actions.navigate.show("/getintouch");
      },
    },
  ];

  return (
    <ST.Container>
      {listMain &&
        listMain.map((row, key) => {
          return (
            <ST.MainContent onClick={() => row.onClick()} key={key}>
              {row.label}
            </ST.MainContent>
          );
        })}
    </ST.Container>
  );
};

export default memo(MainMenu);
