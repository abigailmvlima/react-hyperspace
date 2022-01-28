import styled from "styled-components";

export const container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

export const content = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  min-height: 100%;
  justify-content: space-between;
  background-color: #b74e91;
  overflow-y: auto;
`;

export const ContentSelf = styled.div`
  display: flex;
  flex-direction: column;
`;

export const contentTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px 20px;
`;

export const title = styled.div`
  display: flex;
  margin: 10px 20px;
  letter-spacing: 1px;
  font-size: 30px;
  font-weight: bold;
  color: #fff;
`;

export const description = styled.div`
  display: flex;
  margin: 5px 120px 3px 20px;
  font-size: 16px;
  color: #d0c9f0;
`;

export const contentTable = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 30px 40px;
`;

export const Button = styled.button`
  background-color: transparent;
  display: flex;
  margin: 40px 0;
  border-radius: 20px;
  padding: 10px 20px;
  border: 1px solid #fff;
  color: #fff;
`;
