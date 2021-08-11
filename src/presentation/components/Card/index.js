import React from "react";

import { useHistory, Link } from "react-router-dom";

import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";

import { Container, Info, Name, CNPJ } from "./styles";

function Card({ name, description, editLink, identifier }) {
  return (
    <Container>
      <Info>
        <Name>{name}</Name>
        <CNPJ>{description}</CNPJ>
      </Info>
      <Button
        variant="contained"
        component={Link}
        to={`${editLink}/${identifier}`}
        endIcon={<EditIcon />}
        style={{ background: "#2B303A", color: "#fff" }}
      >
        Editar
      </Button>
    </Container>
  );
}

export default Card;
