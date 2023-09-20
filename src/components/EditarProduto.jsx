import { Box, Button, Container, TextField, Typography, Alert } from '@mui/material'
import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BotaoVoltar from './BotaoVoltar';

function EditarProduto() {

    const { id } = useParams();

    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [ano, setAno] = useState("");
    const [duracao, setDuracao] = useState("");
    const [categoria, setCategoria] = useState("");
    const [imagem, setImagem] = useState("");
    const [cadastro, setCadastro] = useState(false);
    const [erro, setErro] = useState(false);
    const usuario = localStorage.getItem("usuario");

    useEffect( () => {
        fetch( process.env.REACT_APP_BACKEND + "produtos/" + usuario + "/"+ id, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
            
        })
        .then((resposta) => resposta.json() )
        .then(( json ) => {
            if( !json.status) {
            setTitulo( json.titulo );
            setDescricao( json.descricao );
            setAno ( json.ano );
            setDuracao ( json.duracao );
            setCategoria( json.categoria );
            setImagem( json.imagem );
        } else{
            setErro( "Filme nao encontrado" );
        }
        
         })
        .catch( (erro) => {setErro(true) })
    }, [] );

    function Editar( evento ) {
        evento.preventDefault();
        fetch( process.env.REACT_APP_BACKEND + "produtos/",{
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    id: id,
                    titulo: titulo,
                    descricao: descricao,
                    ano: ano,
                    duracao: duracao,
                    categoria: categoria, 
                    imagem: imagem,
                    
      
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

  return (
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
            <Typography component="h1" variant="h5">Editar Produto ☢</Typography>
            {erro && (<Alert severity="warning" sx={{mt: 2, mb:2}}>{erro}</Alert>)}
            {cadastro&& (<Alert severity="success" sx={{mt: 2, mb:2}}>Filme editado com sucesso</Alert>)}

            <Box component="form" onSubmit={Editar}>
                <TextField type="text"
            label="Nome ☢"
            variant="filled" 
            margin="normal" 
            value={titulo}
            onChange={(e) => setTitulo( e.target.value)}
            fullWidth
            />
            <TextField
            type="text"
            label="Descriçao ☢"
            variant="filled" 
            margin="normal" 
            value={descricao}
            onChange={(e) => setDescricao( e.target.value)}
            fullWidth
            />
             
              <TextField
            type="text"
            label="Duraçao do produto ☢"
            variant="filled" 
            margin="normal" 
            value={duracao}
            onChange={(e) => setDuracao( e.target.value)}
            fullWidth
            />
              <TextField
            type="text"
            label="Categoria ☢"
            variant="filled" 
            margin="normal" 
            value={categoria}
            onChange={(e) => setCategoria( e.target.value)}
            fullWidth
            />
              <TextField
            type="text"
            label="Link da imagem ☢"
            variant="filled" 
            margin="normal" 
            value={imagem}
            onChange={(e) => setImagem( e.target.value)}
            fullWidth
            />
            <Button type="submit" variant="contained" fullWidth sx={{mt: 2, mb: 2}}>Editar</Button>
            </Box>
            <BotaoVoltar></BotaoVoltar>
        </Box>
    </Container>
  )
}

export default EditarProduto