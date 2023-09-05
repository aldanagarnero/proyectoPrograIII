import React from 'react';
import './Navbar.css';
import {Route, Link} from 'react-router-dom';

function Navbar() {
    return (
        <header> 
            <section className="encabezado">
                <div className="nav-subcontainer">
                    <img className = "logo" src="./Imagenes/MAGOBA (1).png"/>  
                    <article className = "menu">
                        <Link to= "/" exact= 'true'>Inicio </Link> |
                        <Link to= "/favorites" >Favoritos </Link> |
                        <Link to= "/viewAll" exact= 'true'>Ver todas </Link> |
                    </article> 
                </div>
            </section>
        </header>
    )
}

export default Navbar;