import { memo } from "react";

import MainMenu from "../../components/MainMenu";

import * as ST from "./styles";

const GetInTouch = () => {
  const theme = [
    {
      theme: 1,
    },
    {
      theme: 2,
    },
    {
      theme: 3,
    },
    {
      theme: 4,
    },
    {
      theme: 5,
    },
  ];

  return (
    <ST.Container>
      <MainMenu activePage={"getintouch"} />
      <ST.content>
        <ST.contentInfo>
          <ST.contTitle>Get in touch</ST.contTitle>
          <ST.contDescription>
            Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam
            turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus,
            lacus eget hendrerit bibendum, urna est aliquam sem, sit amet
            imperdiet est velit quis lorem.
          </ST.contDescription>
        </ST.contentInfo>
        <ST.contFormDados>
          <ST.contentForm>
            <ST.nameMail>
              <ST.formName>name</ST.formName>
              <ST.formMail>mail</ST.formMail>
            </ST.nameMail>
            <ST.formMessage>message</ST.formMessage>
            <ST.formBt>Button</ST.formBt>
          </ST.contentForm>
          <ST.ContDados>
            <ST.dadosAddress>Address</ST.dadosAddress>
            <ST.infoAddress>
              12345 Somewhere Road #654 Nashville, TN 00000-0000 USA
            </ST.infoAddress>
            <ST.dadosMail>Mail</ST.dadosMail>
            <ST.infoMail>user@untitled.tld</ST.infoMail>
            <ST.dadosPhone>Phone</ST.dadosPhone>
            <ST.infoPhone>(000) 000-0000</ST.infoPhone>
            <ST.dadosSocial>Social</ST.dadosSocial>
            <ST.dadosSocialMap>
              {theme.map((row, key) => {
                return <ST.infoSocial key={key} theme={row.theme} />;
              })}
            </ST.dadosSocialMap>
          </ST.ContDados>
        </ST.contFormDados>
      </ST.content>
    </ST.Container>
  );
};

export default memo(GetInTouch);
