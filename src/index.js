import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from './Login';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Cadastro from './components/Cadastro';
import Filme from './components/Filme';
import EditarFilme from'./components/EditaFilme';
import CadastarProduto from'./components/CadastrarProduto';
import EditarProduto from './components/EditarProduto';
import Produto1 from './components/Produto1';
import Produto from './components/CadastrarProduto';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#d5ff3b',
      light: '#9e9e9e',
    },
    secondary: {
      main: '#ff5722',
    },
    background: {
      default: '#5a5a5a',
      paper: '#d5ff3b',
    },
  },
});


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/cadastro",
    element: <Cadastro></Cadastro>
  },
  {
    path: "/filme",
    element: <Filme></Filme>
  },
    {
      path: "/edicao/:id",
      element: <EditarFilme/> 
    },
  {
      path: "/CadastrarProduto",
      element: <CadastarProduto />
    },
    {
      path: "/EditarProduto",
      element: <EditarProduto></EditarProduto>
    },
    {
      path: "/Produto1",
      element: <Produto1></Produto1>
    },
    {
      path: "/Produto",
      element: <Produto></Produto>
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <ThemeProvider theme={theme}>
 <RouterProvider router={router}></RouterProvider>
 </ThemeProvider>
);


