import { Avatar, Button, Container, Box } from "@mui/material";
import { useEffect, useState } from "react";
import Filme1 from "./components/filme1";
import MenuResponsivo from "./components/MenuResponsivo";
import "./Global.css";

function App() {

const [filmes, setFilmes ] = useState();
const [ erro, setErro ] = useState();
const usuario = localStorage.getItem("usuario");

  useEffect(() => {
    fetch( process.env.REACT_APP_BACKEND +  "produtos/" + usuario, {
      method: "GET",
      headers: {
          'Content-Type': 'application/json'
      },
  })
  .then((resposta) => resposta.json() )
  .then(( json ) => { setFilmes( json ) } )
  .catch( (erro) => {setErro( true ) } )
  }, [])

function Excluir( evento, id){
  evento.preventDefault();
  fetch( process.env.REACT_APP_BACKEND + "produtos " , {
    method: "DELETE",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(
        {
            id: id,
            usuario: usuario
        }
    )
})
.then((resposta) => resposta.json() )
.then(( json ) => {
    const novaLista = filmes.filter ( (filme) => filme._id !== id);
    setFilmes (novaLista);
})
 
.catch( (erro) => {setErro(true) })
}

  return (
    <>
    <MenuResponsivo></MenuResponsivo>
    <Container component="section" >
     
      <Box  sx={{ 
        mt: 2,
        mb: 2,
        backgroundColor: "#ADDC72",
        padding: "5px",
        paddingBottom: 2,
        borderRadius: "5px",
        display:"flex",
        flexDirection: "column",
        alignItems: "center"

        }}>

  
        
   
   
   <h1>Produtos ☣</h1>
   <span>Esse é um site clandestino de cadastro de elementos radioativos, em prol de experimentos cientificos não administrados pelo governo.</span>
   </Box>
    <Container sx={{
      display: "flex",
      flexFlow:"row",
      justifyContent: "center",
      flexWrap:"wrap",
      gap:"2rem"
    }}>
   {filmes && (
    filmes.map((filme, index) => (
      <Filme1
        imagem={filme.imagem}
        titulo={filme.titulo}
        descricao={filme.descricao}
        ano={filme.ano}
        duracao={filme.duracao}
        categoria={filme.categoria}
        excluir={ (e) => Excluir( e, filme._id) }
        id={ filme._id}
      />
    ))
   )}
   </Container>

   
   </Container>
   </>
  );
}

export default App;
