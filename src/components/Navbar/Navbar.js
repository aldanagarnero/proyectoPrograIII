import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <header className='contenedor_header'>
            {/* LOGO */}
            <section className="encabezado">
                <div className="nav-subcontainer">
                   <Link to='/'><img className="logo" src="./img/logoalbas.png" alt="Logo Albas"/></Link>  
                </div>

            {/* BARRA DE NAVEGACIÓN */}
                <div className = "menu">
                    <nav>
                        <Link to= "/" exact='true'>Inicio</Link> |
                        <Link to= "/favorites">Favoritos</Link> |
                        <Link to= "/viewAll">Ver todas</Link> |
                    </nav>
                </div>
            </section>
        </header>
    )
}

export default Navbar;