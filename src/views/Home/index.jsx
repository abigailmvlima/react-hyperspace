import { memo } from "react";

import MainMenu from "../../components/MainMenu";
import Footer from "../../components/Footer";

import * as ST from "./styles";

const HomeView = () => {
  return (
    <ST.Container>
      <MainMenu activePage={"welcome"} />
      <ST.Content>
        <ST.ContentSelf>
          <ST.Page id="intro">
            <ST.Row>
              <ST.Title>Hyperspace</ST.Title>
              <ST.Description>
                Just another fine responsive site template designed by
                <span>HTML5 UP</span>and released for free under the
                <span>Creative Commons.</span>
              </ST.Description>
              <ST.ButtonContainer>
                <ST.Button>LEARN MORE</ST.Button>
              </ST.ButtonContainer>
            </ST.Row>
          </ST.Page>
        </ST.ContentSelf>
        <Footer />
      </ST.Content>
    </ST.Container>
  );
};

export default memo(HomeView);
