import { memo } from "react";

import MainMenu from "../../components/MainMenu";
import WhatTab from "../../components/WhatTab";
import Footer from "../../components/Footer";

import * as ST from "./styles";

const WhatWeDo = () => {
  const list = [
    {
      title: "Lorem ipsum amet",
      description:
        "Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.",
      theme: 1,
    },
    {
      title: "Aliquam sed nullam",
      description:
        "Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.",
      theme: 2,
    },
    {
      title: "Sed erat ullam corper",
      description:
        "Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.",
      theme: 3,
    },
    {
      title: "Veroeros quis lorem",
      description:
        "Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.",
      theme: 4,
    },
    {
      title: "Urna quis bibendum",
      description:
        "Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.",
      theme: 5,
    },
    {
      title: "Aliquam urna dapibus",
      description:
        "Phasellus convallis elit id ullam corper amet et pulvinar. Duis aliquam turpis mauris, sed ultricies erat dapibus.",
      theme: 6,
    },
  ];
  return (
    <ST.container>
      <MainMenu activePage={"whatwedo"} />
      <ST.content>
        <ST.ContentSelf>
          <ST.ContentTitle>
            <ST.Title>What we do</ST.Title>
            <ST.Description>
              Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam
              turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus,
              lacus eget hendrerit bibendum, urna est aliquam sem, sit amet
              imperdiet est velit quis lorem.
            </ST.Description>
          </ST.ContentTitle>
          <ST.ContentTable>
            {list.map((row, key) => {
              return (
                <WhatTab
                  key={key}
                  title={row.title}
                  description={row.description}
                  theme={row.theme}
                />
              );
            })}
            <ST.Button>Learn More</ST.Button>
          </ST.ContentTable>
        </ST.ContentSelf>
        <Footer />
      </ST.content>
    </ST.container>
  );
};

export default memo(WhatWeDo);
