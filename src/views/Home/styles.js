import styled from "styled-components";

export const Container = styled.div`
    display: flex;
	flex-direction: row;
    height: 100vh;
`

export const Main = styled.div`
    display: flex;
    width: 30%;
    background-color: #312450; 
    flex-direction: column;
    justify-content: center;
`

export const MainContent = styled.a`
    display: flex;
    justify-content: flex-end;
    color: rgba(255, 255, 255, 0.35);
    border-bottom: 1px solid #3c2c62;
    padding: 15px 15px;
    margin: 5px 30px;
    text-decoration: none;
`

export const Content = styled.div`
    display: flex;
    width: 70%;
    background-color: #21e376; 
    flex-direction: column;
    overflow: auto;
`

export const Page = styled.section`
    display: flex;
    min-height: 550px;
`

export const Footer = styled.div`
    display: flex;
`