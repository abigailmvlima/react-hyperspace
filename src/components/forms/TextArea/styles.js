import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 5px;
  width: 100%;
`;

export const Label = styled.div`
  display: flex;
  font-size: 14px;
  font-weight: bold;
  margin: 5px 3px;
  color: #fff;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 10px;
`;

export const TextArea = styled.textarea`
  border-radius: 5px;
  border: 1px solid #9175eb;
  background: #7c65c9;
`;
