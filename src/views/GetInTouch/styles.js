import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

export const content = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  min-height: 100%;
  overflow-y: auto;
  justify-content: space-between;
`;

export const ContentSelf = styled.div`
  display: flex;
  flex-direction: column;
`;
export const contentInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 40px;
`;

export const contTitle = styled.div`
  display: flex;
  margin: 20px 20px;
  letter-spacing: 1px;
  font-size: 30px;
  font-weight: bold;
  color: #fff;
`;

export const contDescription = styled.div`
  display: flex;
  margin: 0 20px;
  letter-spacing: 0.5px;
  font-size: 17px;
  line-height: 22px;
  font-family: Arial, Helvetica, sans-serif;
  color: rgba(255, 255, 255, 0.45);
  line-height: 28px;
`;

export const contFormDados = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 40px;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 10px;
  margin-right: 20px;
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 20px;
`;

export const formBt = styled.div`
  display: flex;
  justify-content: center;
  width: 30%;
  background-color: transparent;
  margin: 20px 0;
  border-radius: 30px;
  padding: 16.5px 20px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #fff;
  font-size: 11.5px;
  letter-spacing: 1px;
`;

export const ContDados = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 2px solid rgba(255, 255, 255, 0.15);
  padding: 0 35px;
`;

export const dadosAddress = styled.div`
  display: flex;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  margin: 13px 0;
  font-family: Arial, Helvetica, sans-serif;
`;

export const infoAddress = styled.div`
  display: flex;
  font-size: 17.5px;
  margin-bottom: 20px;
  color: rgba(255, 255, 255, 0.55);
  margin-right: 35%;
  line-height: 25px;
  font-family: Arial, Helvetica, sans-serif;
`;

export const dadosMail = styled.div`
  display: flex;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
`;

export const infoMail = styled.div`
  display: flex;
  font-size: 17px;
  margin: 10px 0;
  margin-bottom: 20px;
  font-family: Arial, Helvetica, sans-serif;
  color: rgba(255, 255, 255, 0.55);
  & span {
    text-decoration: underline 1px;
    margin: 0 5px;
  }
`;

export const dadosPhone = styled.div`
  display: flex;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 10px;
  font-family: Arial, Helvetica, sans-serif;
`;

export const infoPhone = styled.div`
  display: flex;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.55);
  margin-bottom: 20px;
  font-family: Arial, Helvetica, sans-serif;
`;

export const dadosSocialMap = styled.div`
  display: flex;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 10px;
  font-family: Arial, Helvetica, sans-serif;
`;

export const dadosSocial = styled.div`
  display: flex;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
`;

export const infoSocial = styled.div`
  display: flex;
  width: 20px;
  height: 20px;
  background-color: rgba(255, 255, 255, 0.55);
  margin: 10px 0;
`;
