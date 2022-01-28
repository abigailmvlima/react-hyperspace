import { memo } from "react";
import actions from "../../stores/actions";

import * as ST from "./styles";

const MainMenu = ({ activePage }) => {
  const listMain = [
    {
      label: "WELCOME",
      name: "welcome",
      onClick: () => {
        actions.navigate.show("/");
      },
    },
    {
      label: "WHO WE ARE",
      name: "whoweare",
      onClick: () => {
        actions.navigate.show("/whoweare");
      },
    },
    {
      label: "WHAT WE DO",
      name: "whatwedo",
      onClick: () => {
        actions.navigate.show("/whatwedo");
      },
    },
    {
      label: "GET IN TOUCH",
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
          console.log(row.name, activePage);
          return (
            <ST.MainContent
              activePage={row.name == activePage}
              onClick={() => row.onClick()}
              key={key}
            >
              <ST.MainContentLabel>{row.label}</ST.MainContentLabel>
              <ST.Risca activePage={row.name == activePage} />
            </ST.MainContent>
          );
        })}
    </ST.Container>
  );
};

export default memo(MainMenu);
