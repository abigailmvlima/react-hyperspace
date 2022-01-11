import { memo } from "react";

import * as ST from "./styles";

const HomeView = () => {
  return (
    <ST.Container>
      <ST.Main>
        <ST.MainContent>Welcome</ST.MainContent>
        <ST.MainContent>Who We Are</ST.MainContent>
      </ST.Main>
      <ST.Content>titulo</ST.Content>
    </ST.Container>
  );
};

export default memo(HomeView);
