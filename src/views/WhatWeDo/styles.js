import styled from "styled-components";

export const container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

export const content = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  background-color: #b74e91;
  position: relative;
`;

export const contentTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 40px;
`;

export const title = styled.div`
  display: flex;
  margin: 20px 20px;
  letter-spacing: 1px;
  font-size: 30px;
  font-weight: bold;
  color: #fff;
`;

export const description = styled.div`
  display: flex;
  margin: 10px 120px 20px 20px;
  font-size: 16px;
  color: #d0c9f0;
`;

export const contentTable = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 30px 40px;
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
