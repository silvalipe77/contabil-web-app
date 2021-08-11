import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Container, Half, LoginBlock, Title, Slogan, Description, ContactButton, LoginButton, UserField, DefaultField } from './styles';
import { Checkbox, FormControlLabel, Link } from '@material-ui/core';
import logo from '../../../logo.png';

function Login({signin}) {
  const history = useHistory();

  const [user, setUser] = useState({usuario: "", senha: ""});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  async function login(e){
    e.preventDefault();
    if(signin(user))
    history.push('/dashboard');
  }

  return (
    <Container>
      <Half>
        <img src={logo} alt='Logomarca' />
        <Title>Nome da Empresa</Title>
        <Slogan>Slogan da empresa, que pode ser maior</Slogan>
        <Description>Aqui pode vir um texto explicando um pouco da empresa, dos objetivos, das vantagens, etc...</Description>
        <ContactButton variant='contained' >Entre em contato conosco</ContactButton>
      </Half>
      <Half>
        <LoginBlock onSubmit={login}>
          <h2>Login</h2>
          <UserField name='usuario' variant='filled' label='Usuário' onChange={handleInputChange} value={user.usuario}/>
          <DefaultField name='senha' type='password' variant='filled' label='Senha' onChange={handleInputChange} value={user.senha}/>
          <FormControlLabel
            control={<Checkbox color='default' />}
            label='Manter-me conectado'
          />
          <LoginButton type='submit' variant='contained' color='primary' onClick={login}>Entrar</LoginButton>
          <Link underline='always'>Lembrar minha senha</Link>
        </LoginBlock>
      </Half>
    </Container>
  );
}

export default Login;
