import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";

import Menu from "../../components/Menu/index";
import MerchandiseForm from "../../components/MerchandiseForm";

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

function EditMerchandise({ editMerchandise, getMerchandise, match }) {
  const history = useHistory();

  const { id } = match.params;

  async function saveMerchandise() {
    setLoading(true);
    await editMerchandise(id, values);
    history.push("/mercadorias");
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const [values, setValues] = useState({ descricao: "", fabricante: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getMerchandise(id);
      setValues(response);
      setLoading(false);
    }
    fetchData();
  }, []);


  return (
    <Container>
      <Menu name="Editar mercadoria" />
      {loading? <></> : <MerchandiseForm initialValues={values} identifier={id} actionButton={editMerchandise}/>}
    </Container>
  );
}

export default EditMerchandise;
