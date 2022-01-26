import { memo } from "react";

import * as ST from "./styles";

const TextArea = ({ label }) => {
  return (
    <ST.Container>
      <ST.Label>{label}</ST.Label>
      <ST.Content>
        <ST.TextArea rows={4} />
      </ST.Content>
    </ST.Container>
  );
};

export default memo(TextArea);
