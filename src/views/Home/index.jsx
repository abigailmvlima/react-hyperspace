import { memo } from "react";

import * as ST from "./styles";

const HomeView = () => {
  const listMain = [
    {
      label: 'Welcome',
      href: "#intro"
    },
    {
      label: 'Who We Are',
      href: "#one"
    },
    {
      label: 'What We Do',
      href: '#two'
    },
    {
      label: 'Get In Touch',
      href: '#three'
    }
  ]
  return (
    <ST.Container>
      <ST.Main>
        {listMain.map((row, key) => {
          return (
            <ST.MainContent href={row.href} key={key}>{row.label}</ST.MainContent>
          )
        })}
      </ST.Main>
      <ST.Content>
        <ST.Page id="intro" >Welcome</ST.Page>
        <ST.Page id="one" >Who We Are</ST.Page>
        <ST.Page id="two" >What We Do</ST.Page>
        <ST.Page id="three" >Get In Touch</ST.Page>
        <ST.Footer>rodapé</ST.Footer>
      </ST.Content>
    </ST.Container>
  );
};

export default memo(HomeView);
