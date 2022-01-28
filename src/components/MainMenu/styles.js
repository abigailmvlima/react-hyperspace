import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 24%;
  background-color: #312450;
  flex-direction: column;
  justify-content: center;
`;

const cssRisca = css`
  background: rgb(90, 67, 144);
  background: linear-gradient(
    90deg,
    rgba(90, 67, 144, 0.9812932761318712) 0%,
    rgba(94, 70, 151, 1) 26%,
    rgba(204, 73, 184, 0.9662330351680158) 100%
  );
`;

export const Risca = styled.div`
  display: flex;
  height: 3px;
  background-color: #3c2c62;

  ${({ activePage }) => activePage == true && cssRisca};
`;

const cssActive = css`
  color: #fff;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: rgba(255, 255, 255, 0.35);
  padding: 15px 15px;
  margin: 5px 30px;
  text-decoration: none;
  cursor: pointer;

  ${({ activePage }) => activePage == true && cssActive};
`;

export const MainContentLabel = styled.div`
  display: flex;
  margin: 0 0 10px 0;
  letter-spacing: 1.8px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 11.5px;
  justify-content: flex-end;
`;

export const Content = styled.div`
  display: flex;
  width: 80%;
  background-color: #9a70fa;
  flex-direction: column;
  overflow: auto;
`;

export const Page = styled.section`
  display: flex;
  min-height: 250px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
`;
