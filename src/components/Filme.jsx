import { Box, Button, Container, TextField, Typography, Alert, } from '@mui/material'
import { useState, useEffect } from 'react';
import React, { } from 'react'

function Filme() {

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
        fetch("http://10.139.75.32:8080/filmes", {
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
          
        if(json.titulo){
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
    <Container component="section" maxWidth="xs">
        <Box sx={{ 
        mt: 10,
        backgroundColor: "rgb(171, 0, 60)",
        padding: "50px",
        borderRadius: "10px",
        display:"flex",
        flexDirection: "column",
        alignItems: "center"
        }}>
            <Typography component="h1" variant="h5">Cadastrar Filme</Typography>
            {erro && (<Alert severity="warning" sx={{mt: 2, mb:2}}>Desculpe tente novamente</Alert>)}
        { cadastro&& (<Alert severity="success" sx={{mt: 2, mb:2}}>Obrigado por cadastrar</Alert>)}


        <Box component="form" onSubmit={CadastrarFilme}>
            <TextField
            type="text"
            label="Titulo"
            variant="filled" 
            margin="normal" 
            value={titulo}
            onChange={(e) => setTitulo( e.target.value)}
            fullWidth
            />
              <TextField
            type="text"
            label="Descricao"
            variant="filled" 
            margin="normal" 
            value={descricao}
            onChange={(e) => setDescricao( e.target.value)}
            fullWidth
            />
              <TextField
            type="number"
            label="Ano"
            variant="filled" 
            margin="normal" 
            value={ano}
            onChange={(e) => setAno( e.target.value)}
            fullWidth
            />
              <TextField
            type="text"
            label="Duracao"
            variant="filled" 
            margin="normal" 
            value={duracao}
            onChange={(e) => setDuracao( e.target.value)}
            fullWidth
            />
              <TextField
            type="text"
            label="Categoria"
            variant="filled" 
            margin="normal" 
            value={categoria}
            onChange={(e) => setCategoria( e.target.value)}
            fullWidth
            />
              <TextField
            type="text"
            label="Link da imagem"
            variant="filled" 
            margin="normal" 
            value={imagem}
            onChange={(e) => setImagem( e.target.value)}
            fullWidth
            />
            <Button  type="submit" variant="contained" fullWidth sx={{mt: 2, mb: 2}}>Cadastrar Filme</Button>
        </Box>
        </Box>

    </Container>
  )
}

export default Filme