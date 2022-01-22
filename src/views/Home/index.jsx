import { memo } from "react";

import MainMenu from "../../components/MainMenu";

import * as ST from "./styles";

const HomeView = () => {
  return (
    <ST.Container>
      <MainMenu />
      <ST.Content>
        <ST.Page id="intro">
          <ST.Row>
            <ST.Title>Hyperspace</ST.Title>
            <ST.Descripition>
              Just another fine responsive site template designed by HTML5 UP
              and released for free under the Creative Commons.
            </ST.Descripition>
            <ST.ButtonContainer>
              <ST.Button>Learn More</ST.Button>
            </ST.ButtonContainer>
          </ST.Row>
        </ST.Page>
        <ST.Page id="one">Who We Are</ST.Page>
        <ST.Page id="two">What We Do</ST.Page>
        <ST.Page id="three">Get In Touch</ST.Page>
        <ST.Footer>rodapé</ST.Footer>
      </ST.Content>
    </ST.Container>
  );
};

export default memo(HomeView);
