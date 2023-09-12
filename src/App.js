import { Avatar, Button, Container } from "@mui/material";
import { useEffect, useState } from "react";
import Filme1 from "./components/filme1";

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

  return (
   <>
   <h1>Filmes</h1>
    <Container sx={{
      display: "flex",
      flexFlow:"row",
      flexWrap:"wrap",
      
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
      />
    ))
   )}
   </Container>
    <Button variant="outlined">Outlined</Button>
    <Button variant="text">Text</Button>
    <Button variant="contained">Contained</Button>
    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
   </>
  );
}

export default App;
