import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 20%;
  background-color: #312450;
  flex-direction: column;
  justify-content: center;
`;

const cssActive = css`
  color: #fff;
  border-bottom: 1px solid #b74e91;
`;

export const MainContent = styled.div`
  display: flex;
  justify-content: flex-end;
  color: rgba(255, 255, 255, 0.35);
  border-bottom: 1px solid #3c2c62;
  padding: 15px 15px;
  margin: 5px 30px;
  text-decoration: none;
  cursor: pointer;

  ${({ activePage }) => activePage == true && cssActive};
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

export const Title = styled.div`
  display: flex;
  margin: 20px 20px;
  letter-spacing: 1px;
  font-size: 30px;
  font-weight: bold;
  color: #fff;
`;

export const Descripition = styled.div`
  display: flex;
  margin: 10px 120px 20px 20px;
  font-size: 16px;
  color: #d0c9f0;
`;

export const ButtonContainer = styled.div`
  display: flex;
`;

export const Button = styled.button`
  background-color: transparent;
  display: flex;
  margin: 20px 20px;
  border-radius: 20px;
  padding: 10px 10px;
  border: 1px solid #fff;
  color: #fff;
`;

export const Footer = styled.div`
  display: flex;
`;
