import React, { useState, useEffect } from "react";
import Menu from "../../components/Menu/index";
import { List, ListItem, Divider, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";
import Search from "../../components/Search";
import Card from "../../components/Card";

import { Container } from "./styles";

function ProvidersList({ listProviders }) {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await listProviders();
      setProviders(response);
    }
    fetchData();
  }, []);

  return (
    <>
      <Menu name="Fornecedores" />
      <Container>
        <Search />
        <List component="nav" aria-label="main">
          {providers.map((provider) => {
            return (
              <>
                <ListItem key={provider.id}>
                  <Card name={provider.nome} description={provider.cnpj} />
                </ListItem>
                <Divider style={{ background: "#000" }} />
              </>
            );
          })}
        </List>
        <Fab
          component={Link}
          to="/adicionar-fornecedor"
          style={{
            background: "#2B303A",
            position: "absolute",
            bottom: "10%",
            right: "20%",
          }}
          aria-label="add"
        >
          <AddIcon style={{ color: "#fff" }} />
        </Fab>
      </Container>
    </>
  );
}

export default ProvidersList;
