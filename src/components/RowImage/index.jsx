import { memo } from "react";

import * as ST from "./styles";

const rowImage = ({ theme, title, description, onClick }) => {
  return (
    <ST.container>
      <ST.contentImage>
        <ST.image theme={theme} />
      </ST.contentImage>
      <ST.ContainerText>
        <ST.ContentText>
          <ST.title>{title}</ST.title>
          <ST.description>{description}</ST.description>
          <ST.ButtonContainer>
            <ST.button>Learn More</ST.button>
          </ST.ButtonContainer>
        </ST.ContentText>
      </ST.ContainerText>
    </ST.container>
  );
};

export default memo(rowImage);
