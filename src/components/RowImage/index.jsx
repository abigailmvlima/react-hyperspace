import { memo } from "react";

import * as ST from "./styles";

const rowImage = () => {
  return (
    <ST.container>
      <ST.contentImage>
        <ST.image>img</ST.image>
      </ST.contentImage>
      <ST.contentText>
        <ST.title>title</ST.title>
        <ST.descripition>descripition</ST.descripition>
        <ST.button>button</ST.button>
      </ST.contentText>
    </ST.container>
  );
};

export default memo(rowImage);
