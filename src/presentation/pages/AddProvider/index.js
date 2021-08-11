import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import Menu from "../../components/Menu/index";

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

function AddProvider({ addProvider }) {
  const history = useHistory();

  async function saveProvider() {
    await addProvider(values);
    history.push("/fornecedores");
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const [values, setValues] = useState({ nome: "", cnpj: "", email:"",telefone:"" });

  return (
    <Container>
      <Menu name="Cadastrar novo fornecedor" />
      <AddForm>
        <InputText
          name="nome"
          variant="outlined"
          label="Razão Social"
          style={{ display: "flex", flex: 1 }}
          onChange={handleInputChange}
          value={values.nome}
        />
        <Address style={{ dysplay: "flex", margin: "15px 0 15px 0" }}>
          <City>
            <InputText name="uf" label="UF" />
            <InputText name="cidade" label="Cidade" />
          </City>
          <InputText name="logradouro" label="Logradouro" />
          <InputText name="complemento" label="Complemento" />
        </Address>
        <InputText
          name="cnpj"
          label="CNPJ"
          onChange={handleInputChange}
          value={values.cnpj}
        />
         <InputText
          name="telefone"
          label="Celular/Telefone"
          onChange={handleInputChange}
          value={values.telefone}
        />
         <InputText
          name="email"
          label="Email"
          onChange={handleInputChange}
          value={values.email}
        />
         <InputText
          name="cnpj"
          label="CNPJ"
          onChange={handleInputChange}
          value={values.cnpj}
        />

        <InputText name="complemento" label="Complemento" />
        <InputText name="complemento" label="Complemento" />
        <Buttons>
          <Button component={Link} to='/fornecedores'
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
            onClick={saveProvider}
          >
            Salvar
          </Button>
        </Buttons>
      </AddForm>
    </Container>
  );
}

export default AddProvider;
