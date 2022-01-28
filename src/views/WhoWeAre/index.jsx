import { memo } from "react";

import MainMenu from "../../components/MainMenu";
import RowImage from "../../components/RowImage";
import Footer from "../../components/Footer";

import * as ST from "./styles";

const WhoWeAre = () => {
  const list = [
    {
      title: "Sed ipsum dolor",
      description:
        "Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.",
      theme: 1,
    },
    {
      title: "Feugiat consequat",
      description:
        "Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.",
      theme: 2,
    },
    {
      title: "Ultricies aliquam",
      description:
        "Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.",
      theme: 3,
    },
  ];
  return (
    <ST.container>
      <MainMenu activePage={"whoweare"} />
      <ST.content>
        <ST.ContentSelf>
          {list.map((row, key) => {
            return (
              <RowImage
                key={key}
                title={row.title}
                description={row.description}
                theme={row.theme}
              />
            );
          })}
        </ST.ContentSelf>
        <Footer />
      </ST.content>
    </ST.container>
  );
};

export default memo(WhoWeAre);
