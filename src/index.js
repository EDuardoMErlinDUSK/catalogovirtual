import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from './Login';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Cadastro from './components/Cadastro';
import Filme from './components/Filme';
import EditarFilme from'./components/EditaFilme';

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
      paper: '#fff9c4',
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
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <ThemeProvider theme={theme}>
 <RouterProvider router={router}></RouterProvider>
 </ThemeProvider>
);


