import { memo } from "react";

import MainMenu from "../../components/MainMenu";

import * as ST from "./styles";

const Rows = () => {
  return (
    <ST.colunnTable>
      <ST.colunnTable2>
        <ST.colunnIcon>icone</ST.colunnIcon>
        <ST.colunnContent>
          <ST.colunnTitle>titlecol</ST.colunnTitle>
          <ST.colunnDescripition>Descripitioncol</ST.colunnDescripition>
        </ST.colunnContent>
      </ST.colunnTable2>
    </ST.colunnTable>
  );
};

const WhatWeDo = () => {
  return (
    <ST.container>
      <MainMenu activePage={"whatwedo"} />
      <ST.content>
        <ST.contentTitle>
          <ST.title>title</ST.title>
          <ST.description>text</ST.description>
        </ST.contentTitle>
        <ST.contentTable>
          <Rows />
          <Rows />
          <Rows />
          <Rows />
        </ST.contentTable>
      </ST.content>
    </ST.container>
  );
};

export default memo(WhatWeDo);
