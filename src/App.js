import { Avatar, Button, Container, Box } from "@mui/material";
import { useEffect, useState } from "react";
import Filme1 from "./components/filme1";
import MenuResponsivo from "./components/MenuResponsivo";
import "./Global.css";

function App() {

const [filmes, setFilmes ] = useState();
const [ erro, setErro ] = useState();

  useEffect(() => {
    fetch( process.env.REACT_APP_BACKEND + "filmes", {
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
  fetch( process.env.REACT_APP_BACKEND + "filmes", {
    method: "DELETE",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(
        {
            id: id
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
        backgroundColor: "#ADDC72",
        padding: "25px",
        borderRadius: "5px",
        display:"flex",
        flexDirection: "column",
        alignItems: "center"

        }}>

      <div>
        
   <>
   

   <h1>Produtos ☣</h1>
   <span>Esse é um site clandestino de cadastro de itens radioativos, em prol de experimentos cientificos não administrados pelo governo.</span>
    <Container sx={{
      display: "flex",
      flexFlow:"row",
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
   </>
   </div>
   </Box>
   </Container>
   </>
  );
}

export default App;
