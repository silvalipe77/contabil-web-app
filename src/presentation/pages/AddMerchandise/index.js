import React, { useState } from "react";
import Menu from "../../components/Menu/index";
import { useHistory, Link } from "react-router-dom";

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

function AddMerchandise({ addMerchandise }) {
  const history = useHistory();

  async function saveMerchandise() {
    setLoading(true);
    await addMerchandise(values);
    history.push("/mercadorias");
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const [values, setValues] = useState({ descricao: "", fabricante: "" });
  const [loading, setLoading] = useState(false);

  return (
    <Container>
      <Menu name="Cadastrar novo mercadoria" />
      <AddForm>
        <InputText
          name="descricao"
          variant="outlined"
          label="Descrição do produto"
          style={{ display: "flex", flex: 1 }}
          onChange={handleInputChange}
          values={values.descricao}
        />

            <InputText
              name="fabricante"
              label="Fabricante"
              onChange={handleInputChange}
              values={values.fabricante}

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
    </Container>
  );
}

export default AddMerchandise;
