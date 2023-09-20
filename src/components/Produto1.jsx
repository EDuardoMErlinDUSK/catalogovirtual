import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography, Button, Link } from '@mui/material'
import React from 'react'

function Produto1(props) {
  return (
    <Card sx={{maxWidth: 300, maxHeight:600}}>
        <CardActionArea>
            <CardMedia
                component="img"
                height="140"
                image={props.imagem}
                alt={props.titulo}
            />
            <CardContent><Typography fontSize={25} variant="body2" color="text.secondary" >
                    <strong>{props.titulo}</strong>

                </Typography>
                <Typography variant="body2" color="text.secondary" >
                    <h3>{props.descricao}</h3>

                </Typography>
                <Grid container>
                    <Grid item xs={2}>
                        <span>{props.categoria}</span>
                    </Grid>
                    <Grid item xs={2}>
                        <span>{props.ano}</span>
                    </Grid>
                    <Grid item xs={8}>
                        <strong><span>{props.duracao}</span></strong>
                    </Grid>
                </Grid>
            </CardContent>
        </CardActionArea>
        <Grid container>
            <Grid item xs={6}>
            <Button variant="contained" onClick={props.excluir}>X</Button>
            </Grid>
            <Grid item xs={6}>
                <Link href={ "edicao/" + props.id} sx={{color:"green"}}>Editar</Link>
            </Grid>
        </Grid>
        
    </Card>
  )
}

export default Produto1