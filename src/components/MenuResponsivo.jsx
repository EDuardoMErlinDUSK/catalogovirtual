import { AppBar, Box, Container, IconButton, Menu, Toolbar, Typography, MenuItem, Tooltip, Avatar,Button, Link } from '@mui/material'
import React from 'react'
import { useState } from 'react'


function MenuResponsivo() {
    const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <AppBar position="static">
        <Container maxWidth="xl">
            <Toolbar disableGutters>
                <Typography variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            ☣
                </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit">
                    ///
            
                </IconButton>
                <Menu id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
             Cadastrar-se 
             <br></br>
             Cadastrar Produto
                <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"></Typography>
                </MenuItem>
             
                </Menu>
            </Box>
            <Typography variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            ☣
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
         
          <Link href="/cadastro"> <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'green', display: 'block' }}
              >
               Cadastre-se
              </Button>
          </Link>
          <Link href="/CadastrarProduto">   <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'green', display: 'block' }}
              >
               Cadastrar Produto
              </Button>
          </Link>   
          
          </Box>
          <Box sx={{ flexGrow: 0 }}></Box>
          <Tooltip>
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="" src="/static/images/avatar/2.jpg" />
              </IconButton>
          </Tooltip>
          <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              
             <Link sx={{color:"green"}} href="/login"> <MenuItem color='black'  onClick={handleCloseUserMenu}>
                   <Typography textAlign="center">Login</Typography>
                </MenuItem></Link>
                
                <MenuItem  onClick={handleCloseUserMenu}>
                   <Link sx={{color: "green"}} href="/login"><Typography textAlign="center">Sair</Typography></Link>
                </MenuItem>
              
            </Menu>
            </Toolbar>
        </Container>
    </AppBar>
  )
}

export default MenuResponsivo

