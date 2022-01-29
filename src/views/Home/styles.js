import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

export const Main = styled.div`
  display: flex;
  width: 30%;
  background-color: #312450;
  flex-direction: column;
  justify-content: center;
`;

export const MainContent = styled.a`
  display: flex;
  justify-content: flex-end;
  color: rgba(255, 255, 255, 0.35);
  border-bottom: 1px solid #3c2c62;
  text-decoration: none;
`;

export const Content = styled.div`
  display: flex;
  width: 80%;
  min-height: 100%;
  justify-content: space-between;
  background-color: #5e42a6;
  flex-direction: column;
  overflow: auto;
`;

export const ContentSelf = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Page = styled.section`
  display: flex;
  min-height: 250px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

export const Footer = styled.div`
  display: flex;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 20px;
`;

export const Title = styled.div`
  display: flex;
  margin: 240px 0 30px 50px;
  letter-spacing: 1px;
  font-size: 48px;
  font-weight: bold;
  color: #fff;
`;

export const Description = styled.div`
  margin: 0 50px;
  text-align: justify;
  margin-right: 26.5%;
  letter-spacing: 1px;
  font-size: 19.8px;
  line-height: 35px;
  font-family: Arial, Helvetica, sans-serif;
  color: rgba(255, 255, 255, 0.55);
  & span {
    text-decoration: underline 1px;
    margin: 0 5px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
`;

export const Button = styled.button`
  background-color: transparent;
  display: flex;
  margin: 50px 50px;
  border-radius: 30px;
  padding: 20px 40px;
  letter-spacing: 3px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 11px;
  font-weight: 600;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
`;
