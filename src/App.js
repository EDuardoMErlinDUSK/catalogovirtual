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
   <h1>Filmes</h1>
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
  );
}

export default App;
