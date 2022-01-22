import { memo } from "react";

import MainMenu from "../../components/MainMenu";

import * as ST from "./styles";

const WhoWeAre = () => {
  return (
    <ST.Container>
      <MainMenu activePage={"whoweare"} />
      {/* <div>foto1</div>
      <div>
        Conteudo Foto1
        <div>Title1</div>
        <div>Descripition1</div>
        <div>
          <button>Learn More1</button>
        </div>
      </div>
      <div>foto 2</div>
      <div>
        Conteudo Foto2
        <div>Title2</div>
        <div>Descripition2</div>
        <div>
          <button>Learn More2</button>
        </div>
      </div> */}
    </ST.Container>
  );
};

export default memo(WhoWeAre);
