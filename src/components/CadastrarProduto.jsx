import { Box, Button, Container, TextField, Typography, Alert, } from '@mui/material'
import { useState, useEffect } from 'react';
import React, { } from 'react'
import MenuResponsivo from './MenuResponsivo';

function Produto() {

    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [ano, setAno] = useState("");
    const [duracao, setDuracao] = useState("");
    const [categoria, setCategoria] = useState("");
    const [imagem, setImagem] = useState("");
    const [cadastro, setCadastro] = useState(false);
    const [erro, setErro] = useState(false);

    function CadastrarFilme(evento){
        evento.preventDefault();
        fetch( process.env.REACT_APP_BACKEND + "produto", {
          method: "POST",
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(
              {
                  titulo: titulo,
                  descricao: descricao,
                  ano: ano,
                  duracao: duracao,
                  categoria: categoria, 
                  imagem: imagem
    
              }
          )
      })
      .then((resposta) => resposta.json() )
      .then(( json ) => {
          
        if(json._id){
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
        setTitulo("");
        setDescricao("");
        setAno("");
        setDuracao("");
        setCategoria("");
        setImagem("");
       /*/ setCadastro(false);*/
      },[cadastro]
      )
    

  return (
    <>
    <MenuResponsivo></MenuResponsivo>
    <Container component="section" maxWidth="xs">
        
        <Box sx={{ 
        mt: 10,
        backgroundColor: "#ADDC72",
        padding: "50px",
        borderRadius: "10px",
        display:"flex",
        flexDirection: "column",
        alignItems: "center"
        }}>
            <Typography component="h1" variant="h5">Cadastrar Produto ☣</Typography>
            {erro && (<Alert severity="warning" sx={{mt: 2, mb:2}}>Desculpe tente novamente</Alert>)}
            {cadastro&& (<Alert severity="success" sx={{mt: 2, mb:2}}>Obrigado por cadastrar</Alert>)}


        <Box component="form" onSubmit={CadastrarFilme}>
            <TextField
            type="text"
            label="Nome ☣"
            variant="filled" 
            margin="normal" 
            value={titulo}
            onChange={(e) => setTitulo( e.target.value)}
            fullWidth
            />
              <TextField
            type="text"
            label="Descriçao ☣"
            variant="filled" 
            margin="normal" 
            value={descricao}
            onChange={(e) => setDescricao( e.target.value)}
            fullWidth
            />
             
              <TextField
            type="text"
            label="Duraçao do produto ☣"
            variant="filled" 
            margin="normal" 
            value={duracao}
            onChange={(e) => setDuracao( e.target.value)}
            fullWidth
            />
              <TextField
            type="text"
            label="Categoria ☣"
            variant="filled" 
            margin="normal" 
            value={categoria}
            onChange={(e) => setCategoria( e.target.value)}
            fullWidth
            />
              <TextField
            type="text"
            label="Link da imagem ☣"
            variant="filled" 
            margin="normal" 
            value={imagem}
            onChange={(e) => setImagem( e.target.value)}
            fullWidth
            />
            <Button  type="submit" variant="contained" fullWidth sx={{mt: 2, mb: 2}}>Cadastrar Produto</Button>
        </Box>
        </Box>

    </Container>
    </>
  )
}

export default Produto