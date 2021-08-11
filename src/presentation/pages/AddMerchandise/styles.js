import styled from "styled-components";
import { TextField } from "@material-ui/core";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  justify-content: center;
`;

export const AddForm = styled.div`
  margin-top: 35px;
`;

export const Address = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 0 15px 0;
`;

export const City = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 30px 5px 0 5px;
`;

export const InputText = styled(TextField).attrs((props) => {
  return {
    variant: "outlined",
  };
})`
  display: flex !important;
  flex: 1;
  margin: 5px !important;
`;
