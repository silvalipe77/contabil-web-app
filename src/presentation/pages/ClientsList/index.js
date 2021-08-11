import React, { useState, useEffect } from "react";
import Menu from "../../components/Menu/index";
import { List, ListItem, Divider, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import {Link} from 'react-router-dom';
import Search from "../../components/Search";
import Card from "../../components/Card";

import { Container } from "./styles";

function ClientsList({ listClients }) {
  const [clients, setclients] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await listClients();
      setclients(response);
    }
    fetchData();
  }, []);
  return (
    <>
      <Menu name="Clientes" />
      <Container>
        <Search />
        <List component="nav" aria-label="main mailbox folders">
        {clients.map((client) => {
            return (
              <>
                <ListItem key={client.id} >
                  <Card
                    name= {client.razao_social}
                    description="CNPJ: 00.000.000/0001-00"
                  />
                </ListItem>
                <Divider style={{ background: "#000" }} />
              </>
            );
          })}

        </List>
        <Fab component={Link} to='/adicionar-cliente'
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

export default ClientsList;
