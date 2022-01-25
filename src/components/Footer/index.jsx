import { memo } from "react";

import * as ST from "./styles";

const Footer = () => {
  return (
    <ST.Container>
      <ST.Content>
        <ST.Copyright>© Untitled. All rights reserved.</ST.Copyright>
        <ST.Design>Design: HTML5 UP</ST.Design>
      </ST.Content>
    </ST.Container>
  );
};

export default memo(Footer);
