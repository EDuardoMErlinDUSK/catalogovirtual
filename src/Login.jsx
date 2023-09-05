import { Box, Button, Checkbox, Container, FormControl, FormControlLabel, Grid, TextField, Typography, backdropClasses } from '@mui/material'
import React from 'react'
import {createTheme, ThemeProvider} from '@mui/material/styles';
import { useState, useEffect } from 'react';
import { useNavigate, json } from 'react-router-dom';



const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
          main: '#f50057',
          light: '#ff188b',
          contrastText: '#ffffff',
        },
        secondary: {
          main: '#ff005a',
        },
        background: {
          default: '#581123',
          paper: '#581123',
        },
      },
});

function Login() {

const [email, setEmail] = useState("");
const [senha, setSenha] = useState("");
const [lembrar, setLembrar] = useState(false);
const [login, setLogin] = useState(false);
const [erro, setErro] = useState(false);

const navigate= useNavigate();

useEffect( () => {

    if(login){
        localStorage.setItem("usuario", JSON.stringify({email: email}));
        setEmail( "" );
        setSenha ( "" );
        navigate("/");
    }


}, [login]);

function Autenticar(evento){
    evento.preventDefault();
    fetch("https://api.escuelajs.co/api/v1/auth/login", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                email: email,
                password: senha
            }
        )
    })
    .then((resposta) => resposta.json() )
    .then(( json ) => {
        if(json.statusCode===401){
            setErro(true);
            console.log(email)
        }
        else{
            setLogin (true);
    }
     })
    .catch( (erro) => {setErro(true) })
   
}

  return (
    <ThemeProvider theme={theme}>
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
                <Typography component="h1" variant="h5">Entrar</Typography>
            <Box component="form" onSubmit={Autenticar}>
                <TextField 
                type="email"
                label="Email"
                variant="filled" 
                margin="normal" 
                value={email}
                onChange={(e) => setEmail( e.target.value)}
                fullWidth/>
                <TextField 
                type="password" 
                label="Senha" 
                variant="filled" 
                margin="normal" 
                value={senha}
                onChange={(e) => setSenha( e.target.value)}
                fullWidth/>
                <FormControlLabel
                    control={<Checkbox value={lembrar} name='lembrar' onChange={(e) => setLembrar (!lembrar)}/>}
                    label="Lembrar-me"
                />

                <Button type="submit" variant="contained" fullWidth sx={{mt: 2, mb: 2}}>Login</Button>
                <Grid container>
                    <Grid item xs>
                        esqueci a senha
                    </Grid>
                    <Grid item>
                        cadastrar
                    </Grid>
                </Grid>
            </Box>
        </Box>
    </Container>
    </ThemeProvider>
  )
}

export default Login




/*rfce*/