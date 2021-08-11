import React, { useState } from "react";
import { useHistory } from 'react-router-dom';

import Menu from "../../components/Menu/index";
import { Link } from 'react-router-dom';

import {
  Container,
  Buttons,
  AddForm,
  Address,
  InputText,
  City,
} from "./styles";
import { Button } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import CancelIcon from "@material-ui/icons/Cancel";

function AddClient({ addClient }) {
  const history = useHistory();

  async function saveClient() {
    await addClient(values);
    history.push('/clientes')
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const [values, setValues] = useState({ razao_social:""});

  return (
    <Container>
      <Menu name="Cadastrar novo cliente" />
      <AddForm>
        <InputText
          name="razao_social"
          variant="outlined"
          label="Razão Social"
          style={{ display: "flex", flex: 1 }}
          onChange={handleInputChange}
          value={values.razao_social}
        />
        <Address style={{ dysplay: "flex", margin: "15px 0 15px 0" }}>
          <City>
            <InputText name="uf" label="UF" />
            <InputText name="cidade" label="Cidade" />
          </City>
          <InputText name="logradouro" label="Logradouro" />
          <InputText name="complemento" label="Complemento" />
          <InputText name="cep  " label="Cep" />
        </Address>
        <InputText name="cnpj" label="CNPJ" />
        <InputText name="celular" label="Celular/Telefone" />
        <InputText name="email" label="Email" />
        <Buttons>
          <Button component={Link} to='/clientes'
            variant="contained"
            endIcon={<CancelIcon />}
            style={{ background: "#dd5555d3", color: "fff" }}
          >
            Cancelar
          </Button>
          <Button
            variant="contained"
            endIcon={<SaveIcon />}
            style={{ background: "#5c9ead", color: "#000" }}
            onClick={saveClient}
          >
            Salvar
          </Button>
        </Buttons>
      </AddForm>
    </Container>
  );
}

export default AddClient;
