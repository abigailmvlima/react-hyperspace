import { memo } from "react";

import * as ST from "./styles";

const Input = ({ type, label }) => {
  return (
    <ST.Container>
      <ST.Label>{label}</ST.Label>
      <ST.Content>
        <ST.Input type={type} />
      </ST.Content>
    </ST.Container>
  );
};

export default memo(Input);
