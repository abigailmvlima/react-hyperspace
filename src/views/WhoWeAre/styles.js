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
  overflow-y: auto;
`;

export const ContentSelf = styled.div`
  display: flex;
  flex-direction: column;
`;
