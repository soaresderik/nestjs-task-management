import React, { useEffect, useContext, Fragment } from 'react'
import { Link } from 'react-router-dom';
import AuthContext from "../../context/auth/context";



export const Navbar = () => {
    const authContext = useContext(AuthContext);

    const { loadUser, logout, isAuthenticated } = authContext;

    const onLogout = () => {
        logout();
    }

    const authLinks = (
        <Fragment>
            <li>
                <a onClick={onLogout} href="#!">
                    <span>Logout</span>
                </a>
            </li>
        </Fragment>
    )

    const guestLinks = (
        <Fragment>
          <li>
            <Link to='/cadastrar'>Cadastrar</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
        </Fragment>
      );

    useEffect(() => { loadUser() }, []);

    return (
        <div>
            <ul>
                { isAuthenticated ? authLinks : guestLinks }
            </ul>
        </div>
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
