import { Alert, Box, Button, Checkbox, Container, FormControl, FormControlLabel, Grid, TextField, Typography, backdropClasses } from '@mui/material'
import React from 'react'

import { useState, useEffect } from 'react';
import { useNavigate, json } from 'react-router-dom';


/* é como o css*/


function Login() {

const [email, setEmail] = useState("");
const [senha, setSenha] = useState("");
const [lembrar, setLembrar] = useState(false);
const [login, setLogin] = useState(false);
const [erro, setErro] = useState(false);

const navigate= useNavigate();

/* o use effect, esta, setando os campos*/
useEffect( () => {

    if(login){
        localStorage.setItem("usuario", JSON.stringify({email: email}));
        setEmail( "" );
        setSenha ( "" );
        navigate("/");
    }


}, [login]);

/*No autenticar,  */
function Autenticar(evento){
    evento.preventDefault();
    fetch( process.env.REACT_APP_BACKEND + "login", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                email: email,
                senha: senha
            }
        )
    })
    .then((resposta) => resposta.json() )
    .then(( json ) => {
        if(json.user){
            setLogin(true);
        }
        else{
            setErro (true);
    }
     })
    .catch( (erro) => {setErro(true) })
   
}

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
                <Typography component="h1" variant="h5">Entrar</Typography>
                { erro && (<Alert severity="warning">Revise seus dados e tente novamente</Alert>) } 
            <Box component="form" onSubmit={Autenticar}>
                <TextField 
                type="email"
                label="Email"
                variant="filled" 
                margin="normal" 
                value={email}
                onChange={(e) => setEmail( e.target.value)}
                fullWidth
                {...erro && ("error")}
                />
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
    
  )
}

export default Login




/*rfce*/