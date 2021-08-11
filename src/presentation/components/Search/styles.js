import styled from "styled-components";
import { Button } from "@material-ui/core";

export const Container = styled.div`
  display: flex;
  border-radius: 50px;
  padding: 0;
  height: 50px;
  min-width: 30%;
  margin-bottom: 14px;
  margin-top: 30px;
  align-items: center;
  border: #5b5b5b solid 1px;
  input {
    border-radius: 50px;
    border: none;
    padding: 4px 6px;
    height: 100%;
    width: 100%;
    font-size: 14px;
    &:focus {
      outline: none;
    }
  }
`;

export const SearchButton = styled(Button)`
  display: flex;
  background: #5c9ead;
  flex-direction: row;
  margin: 0 !important;
  padding: 0 !important;
  height: 50px !important;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  width: 50px !important;
  min-width: 50px !important;
  &:hover {
    background: #5c9eadcc !important;
  }
`;
