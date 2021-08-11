import styled from "styled-components";
import { Button, TextField } from "@material-ui/core";

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  height: 100vh;
`;

export const Half = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  flex-wrap: wrap;
  align-content: center;
  align-self: center;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 64px;
  line-height: 75px;
  text-align: center;

  color: #000000;
`;
export const Slogan = styled.h2`
  max-width: 520px;

  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 42px;
  text-align: center;

  color: #393d3f;
`;
export const Description = styled.p`
  max-width: 516px;

  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  text-align: center;

  color: #393d3f;
`;

export const LoginBlock = styled.form`
  border-radius: 30px;
  background: #a2a7a5;
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 40px 60px;
  h2 {
    color: #fff;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 56px;
    text-align: center;
    margin-bottom: 20px;
  }
`;

export const DefaultField = styled(TextField)`
  background: #e8e8e8 !important;
`;

export const UserField = styled(DefaultField)`
  margin-bottom: 15px !important;
`;

export const LoginButton = styled(Button)`
  background: #393d3f !important;
  border-radius: 200px !important;
  margin-bottom: 5px !important;
`;
export const ContactButton = styled(Button)`
  margin: 20px !important;
  background: #5cc1fa !important;
  border-radius: 200px !important;
`;
