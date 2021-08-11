import React from "react";
import { Search } from "@material-ui/icons";

import { Container, SearchButton } from "./styles";

function SearchComponent() {
  return (
    <>
      <Container>
        <input placeholder="Escreva aqui qualquer coisa"></input>
        <SearchButton>
          <Search />
        </SearchButton>
      </Container>
    </>
  );
}

export default SearchComponent;
