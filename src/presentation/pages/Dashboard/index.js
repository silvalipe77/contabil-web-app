import React from 'react';
import Menu from '../../components/Menu/index';
import { Fab } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

import logo from '../../../logo.png';

import { Container, Subject, Quantities } from './styles';

function Dashboard() {
  return (
    <>
      <Menu name='Dashboard' />
      <Container>
        <img src={logo} />
        <h3>Nome da Empresa do Cliente</h3>
        <Subject>
          <h3 style={{ alignSelf: 'flex-start' }}>cnpj:</h3> <p>00.00.00.00.000</p>
        </Subject>
        <Quantities>
          <Subject>
            <h3 style={{ alignSelf: 'flex-start' }}>Quantidade de fornecedores:</h3> <p>0</p>
          </Subject>
          <Subject>
            <h3>Quantidade de mercadoria:</h3> <p>0</p>
          </Subject>
          <Subject>
            <h3>Quantidade de clientes:</h3> <p>0</p>
          </Subject>
        </Quantities>
        <Fab style={{ background: '#2B303A', position: 'absolute', bottom: '10%', right: '20%' }} aria-label="edit">
          <EditIcon style={{ color: '#fff' }} />
        </Fab>
      </Container>
    </>
  )
}

export default Dashboard;
