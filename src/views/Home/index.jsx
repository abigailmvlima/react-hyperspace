import { memo } from "react";

import MainMenu from "../../components/MainMenu";

import * as ST from "./styles";

const HomeView = () => {
  return (
    <ST.Container>
      <MainMenu activePage={"welcome"} />
      <ST.Content>
        <ST.Page id="intro">
          <ST.Row>
            <ST.Title>Hyperspace</ST.Title>
            <ST.Description>
              Just another fine responsive site template designed by HTML5 UP
              and released for free under the Creative Commons.
            </ST.Description>
            <ST.ButtonContainer>
              <ST.Button>Learn More</ST.Button>
            </ST.ButtonContainer>
          </ST.Row>
        </ST.Page>
      </ST.Content>
    </ST.Container>
  );
};

export default memo(HomeView);
