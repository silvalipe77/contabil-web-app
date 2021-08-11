import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./pages/Login/index";
import Dashboard from "./pages/Dashboard/index";
import ProvidersList from "./pages/ProvidersList";
import Clientslist from "./pages/ClientsList";
import MerchandisesList from "./pages/MerchandisesList";
import AddProvider from "./pages/AddProvider";
import AddMerchandise from "./pages/AddMerchandise";
import AddClient from "./pages/AddClient";
import EditMerchandise from "./pages/EditMerchandise";

import providerRepo from "../repository/providers";
import clientRepo from "../repository/clients";
import merchandiseRepo from "../repository/merchandises";

import signin from "../domain/use-cases/signin";

export default function Routes() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login signin={signin}/>
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/fornecedores">
            <ProvidersList listProviders={providerRepo.list} />
          </Route>
          <Route exact path="/clientes">
            <Clientslist  listClients={clientRepo.list} />
          </Route>
          <Route exact path="/mercadorias">
            <MerchandisesList listMerchandises={merchandiseRepo.list}/>
          </Route>
          <Route exact path="/adicionar-fornecedor">
            <AddProvider addProvider={providerRepo.add} />
          </Route>
          <Route exact path="/adicionar-cliente">
            <AddClient addClient={clientRepo.add}/>
          </Route>
          <Route exact path="/adicionar-mercadoria">
            <AddMerchandise addMerchandise={merchandiseRepo.add}/>
          </Route>
          <Route exact path="/editar-mercadoria/:id" render={(props) => <EditMerchandise {...props} getMerchandise={merchandiseRepo.get}  editMerchandise={merchandiseRepo.edit}/>}/>
        </Switch>
      </Router>
    </>
  );
}
