import React, { useState, useEffect } from "react";
import Menu from "../../components/Menu/index";
import { List, ListItem, Divider, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import {Link} from 'react-router-dom';
import Search from "../../components/Search";
import Card from "../../components/Card";

import { Container } from "./styles";

function MerchandisesList({listMerchandises}) {
  const [merchandises, setMerchandises] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await listMerchandises();
      setMerchandises(response);
    }
    fetchData();
  }, []);

  return (
    <>
      <Menu name="Mercadorias" />
      <Container>
        <Search />
        <List component="nav" aria-label="main mailbox folders">
          {merchandises.map((merchandise) => {
            return (
              <>
                <ListItem key={merchandise.id}>
                  <Card identifier={merchandise.id} editLink='/editar-mercadoria' name={merchandise.descricao} description={`Fabricante: ${merchandise.fabricante}`} />
                </ListItem>
                <Divider style={{ background: "#000" }} />
              </>
            );
          })}
        </List>
        <Fab component={Link} to='/adicionar-mercadoria'
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

export default MerchandisesList;
