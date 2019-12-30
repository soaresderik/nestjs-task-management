import React, { useEffect, useContext, Fragment } from 'react'
import { AppBar, Button, Toolbar, IconButton, Typography, MenuIcon } from "@material-ui/core";
import { Link } from 'react-router-dom';
import AuthContext from "../../context/auth/context";
import styled from "styled-components";


const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

export const Navbar = () => {
    const authContext = useContext(AuthContext);

    const { loadUser, logout, isAuthenticated } = authContext;

    const onLogout = () => {
        logout();
    }

    const authLinks = (
        <Fragment>
            <Button color="inherit" onClick={onLogout}>
                <span>Logout</span>
            </Button>
        </Fragment>
    )

    const guestLinks = (
        <Fragment>
          <Button color="inherit">
            <StyledLink to='/cadastrar'>Cadastrar</StyledLink>
          </Button>
          <Button color="inherit">
            <StyledLink to='/login'>Login</StyledLink>
          </Button>
        </Fragment>
      );

    useEffect(() => { loadUser() }, []);

    return (
        <AppBar
            position="static"
        >
            <Toolbar>
                { isAuthenticated ? authLinks : guestLinks }
            </Toolbar>
        </AppBar>
    )
}

const Home = () => {
    return (
        <div>
            <h1>Bem Vindo ao Gerenciador de Tarefas!</h1>
        </div>
    )
}

export default Home
