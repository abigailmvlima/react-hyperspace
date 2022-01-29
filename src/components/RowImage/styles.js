import styled, { css } from "styled-components";

const theme1 = css`
  background: rgb(238, 122, 94);
  background: radial-gradient(
    circle,
    rgba(238, 122, 94, 0.9325151600853445) 0%,
    rgba(166, 146, 122, 1) 70%
  );
`;

const theme2 = css`
  background: rgb(47, 64, 18);
  background: radial-gradient(
    circle,
    rgba(47, 64, 18, 0.9457164802173577) 0%,
    rgba(112, 142, 60, 0.949016810250361) 66%
  );
`;

const theme3 = css`
  background: rgb(18, 55, 64);
  background: radial-gradient(
    circle,
    rgba(18, 55, 64, 0.9457164802173577) 0%,
    rgba(60, 132, 142, 0.949016810250361) 66%
  );
`;

export const container = styled.div`
  display: flex;
  flex-direction: row;
  background: rgb(115, 101, 255);
  background: linear-gradient(
    180deg,
    rgba(115, 101, 255, 1) 0%,
    rgba(72, 73, 200, 1) 45%
  );
`;

export const contentImage = styled.div`
  display: flex;
  flex-direction: row;
  width: 32%;
`;

export const image = styled.div`
  display: flex;
  width: 100%;
  ${(props) =>
    props.theme == 1
      ? theme1
      : props.theme == 2
      ? theme2
      : props.theme == 3
      ? theme3
      : theme1};
`;

export const title = styled.div`
  display: flex;
  margin: 0 50px;
  margin-bottom: 15px;
  font-size: 30px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #fff;
`;

export const description = styled.div`
  display: flex;
  margin: 0 50px;
  margin-bottom: 30px;
  font-size: 17px;
  line-height: 30px;
  color: rgba(255, 255, 255, 0.55);
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin: 0 50px;
`;

export const button = styled.button`
  display: flex;
  letter-spacing: 1px;
  font-size: 12px;
  letter-spacing: 2px;
  padding: 15px 30px;
  text-transform: uppercase;
  background-color: transparent;
  border-radius: 25px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 68%;
`;

export const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  margin: 80px 0;
`;
