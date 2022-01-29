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
  background-color: #a85d8f;
  overflow-y: auto;
`;

export const ContentSelf = styled.div`
  display: flex;
  flex-direction: column;
  margin: 80px 40px;
`;

export const ContentTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
  padding: 0 20px;
`;

export const Title = styled.div`
  display: flex;
  margin-bottom: 25px;
  letter-spacing: 1px;
  font-size: 30px;
  font-weight: bold;
  color: #fff;
`;

export const Description = styled.div`
  display: flex;
  line-height: 25px;
  margin-bottom: 25px;
  font-size: 17px;
  letter-spacing: 0.5px;
  color: rgba(255, 255, 255, 0.55);
`;

export const ContentTable = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 40px;
`;

export const Button = styled.button`
  background-color: transparent;
  display: flex;
  margin: 50px 0;
  border-radius: 30px;
  padding: 14px 36px;
  text-transform: uppercase;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  letter-spacing: 1.2px;
  font-size: 12px;
`;
