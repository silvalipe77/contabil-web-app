import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";

import Menu from "../../components/Menu/index";

import {
  Buttons,
  AddForm,
  InputText,
} from "./styles";

import { Button } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import CancelIcon from "@material-ui/icons/Cancel";

function MerchandiseForm({ actionButton, identifier, initialValues }) {
  const history = useHistory();

  const [values, setValues] = useState(initialValues);
  const [loading, setLoading] = useState(false);

  async function saveMerchandise() {
    setLoading(true);
    await actionButton(identifier, values);
    history.push("/mercadorias");
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return(
    <AddForm>
      <InputText
        name="descricao"
        variant="outlined"
        label="Descrição do produto"
        style={{ display: "flex", flex: 1 }}
        onChange={handleInputChange}
        values={values.descricao}
        defaultValue={initialValues.descricao}
      />

      <InputText
        name="fabricante"
        label="Fabricante"
        onChange={handleInputChange}
        values={values.fabricante}
        defaultValue={initialValues.fabricante}
      />

      <Buttons>
        <Button component={Link} to='/mercadorias'
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
          onClick={saveMerchandise}
          disabled={loading}
        >
          Salvar
        </Button>
      </Buttons>
    </AddForm>
  )
}

export default MerchandiseForm;
