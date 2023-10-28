// eslint-disable-next-line no-unused-vars
import React from "react";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom"
import Error from "../gif/404.gif"

const NotFound = () => {
    return (
        <div className="imagen">
            <img className="gif" src={Error} alt="imagen de error 404" />
            <h3 className="no-pagina">Página no encontrada.</h3>
            <Link to="/"><Button variant="success">Volver al inicio</Button></Link>
        </div>
    )
};

export default NotFound;
