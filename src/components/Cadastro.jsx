import { Alert, Box, Button, Checkbox, Container, FormControlLabel, TextField, Typography } from '@mui/material'
import { useState, useEffect } from 'react';
import React from 'react'

function Cadastro() {
const [nome, setNome] = useState("");
const [email, setEmail] = useState("");
const [tel, setTel] = useState("");
const [senha, setSenha] = useState("");
const [cpf, setCPF] = useState("");
const [cadastro, setCadastro] = useState(false);
const [erro, setErro] = useState(false);

  function Cadastrar(evento){

    evento.preventDefault();
    fetch( process.env.REACT_APP_BACKEND + "users", {
      method: "POST",
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(
          {
              nome: nome,
              email: email,
              cpf: cpf,
              tel: tel,
              senha: senha

          }
      )
  })
  .then((resposta) => resposta.json() )
  .then(( json ) => {
      
    if(json.cpf){
          setCadastro( true);
          setErro (false);
      }
      else{
        setErro(true);
        setCadastro (false);
  }
   })
  .catch( (erro) => {setErro(true) })
  }

  useEffect(() =>{
    setNome("");
    setEmail("");
    setCPF("");
    setTel("");
    setSenha("");
   /*/ setCadastro(false);*/
  },[cadastro]

  )

  return (
    <Container component="section" maxWidth="xs">
      <Box
       sx={{ 
        mt: 10,
        backgroundColor: "rgb(171, 0, 60)",
        padding: "50px",
        borderRadius: "10px",
        display:"flex",
        flexDirection: "column",
        alignItems: "center"
        }}>
           <Typography component="h1" variant="h5">Cadastrar</Typography>

        {erro && (<Alert severity="warning" sx={{mt: 2, mb:2}}>Desculpe tente novamente</Alert>)}
        { cadastro&& (<Alert severity="success" sx={{mt: 2, mb:2}}>Obrigado por se cadastrar</Alert>)}

           <Box component="form" onSubmit={Cadastrar}>
          <TextField
            type="text"
            label="Nome"
            variant="filled" 
            margin="normal" 
            value={nome}
            onChange={(e) => setNome( e.target.value)}
            fullWidth
          />
           <TextField
            type="email"
            label="Email"
            variant="filled" 
            margin="normal" 
            value={email}
            onChange={(e) => setEmail( e.target.value)}
            fullWidth
          />
           <TextField
            type="tel"
            label="Telefone"
            variant="filled" 
            margin="normal" 
            value={tel}
            onChange={(e) => setTel( e.target.value)}
            fullWidth
          />
           <TextField
            type="password"
            label="Senha"
            variant="filled" 
            margin="normal" 
            value={senha}
            onChange={(e) => setSenha( e.target.value)}
            fullWidth
          />
           <TextField
            type="text"
            label="CPF"
            variant="filled" 
            margin="normal" 
            value={cpf}
            onChange={(e) => setCPF( e.target.value)}
            fullWidth
          />
              <Button type="submit" variant="contained" fullWidth sx={{mt: 2, mb: 2}}>Cadastrar-se</Button>
              </Box>
      </Box>
    </Container>
  )
}

export default Cadastro