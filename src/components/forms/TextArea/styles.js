import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 5px;
  width: 100%;
`;

export const Label = styled.div`
  display: flex;
  font-size: 18px;
  font-weight: bold;
  margin: 0 3px;
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 16px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 28px;
`;

export const TextArea = styled.textarea`
  border-radius: 5px;
  border: 1px solid #9175eb;
  background: #7c65c9;
  font-family: Arial, Helvetica, sans-serif;
  padding-bottom: 100px;
`;
