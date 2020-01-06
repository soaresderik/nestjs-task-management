import * as React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <p>Muito bem vindo ao React!</p>
            <Link to="/login">Entrar</Link>
        </div>
    );
};

export default Home;
