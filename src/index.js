import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from './Login';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Cadastro from './components/Cadastro';
import Filme from './components/Filme';


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
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <ThemeProvider theme={theme}>
 <RouterProvider router={router}></RouterProvider>
 </ThemeProvider>
);


