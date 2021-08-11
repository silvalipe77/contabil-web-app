import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Toolbar, Drawer, IconButton, List, ListItem, ListItemText, Divider } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import MenuOpen from '@material-ui/icons/MenuOpen';

import { Bar, Title } from './styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Menu(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <>
      <Bar position='static'>
        <Toolbar>
          <IconButton onClick={() => setOpen(true)} edge='start' color='inherit' aria-label='menu'>
            <MenuIcon fontSize='large' style={{ color: '#2B303A' }} />
          </IconButton>
          <Title>{props.name}</Title>
        </Toolbar>
      </Bar>
      <Drawer open={open} onClick={() => setOpen(false)} anchor='left' variant='temporary' >
        <div style={{ backgroundColor: '#393D3F', color: '#fff' }}>
          <IconButton onClick={() => setOpen(false)} edge='start' color='inherit' aria-label='menu'>
            <MenuOpen fontSize='large' style={{ color: '#DADADA' }} />
          </IconButton>
        </div>
        <div style={{ backgroundColor: '#C4C4C4', flex: 1 }}>
          <List component='nav' >
            <ListItem button component={Link} to='/dashboard'>
              <ListItemText primary='Minha Empresa' />
            </ListItem>
            <Divider />
            <ListItem button component={Link} to='/clientes'>
              <ListItemText primary='Clientes' />
            </ListItem>
            <Divider />
            <ListItem button component={Link} to='/fornecedores'>
              <ListItemText primary='Fornecedores' />
            </ListItem>
            <Divider />
            <ListItem button component={Link} to='/mercadorias'>
              <ListItemText primary='Mercadorias' />
            </ListItem>
            <Divider />
          </List>
        </div>
      </Drawer>
    </>
  );
}
