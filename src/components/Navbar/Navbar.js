import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import Buscador from '../Buscador/Buscador';

function Navbar() {
    return (
        <header className='contenedor_header'>
            {/* LOGO */}
            <section className="encabezado">
                <div className="nav-subcontainer">
                   <Link to='/'><img className="logo" src="./img/nuevologo.png" alt="Logo Albas"/></Link>  
                </div>

            {/* BARRA DE NAVEGACIÓN */}
                <div className = "menu">
                    <nav>
                        <Link to= "/" exact='true'>Inicio</Link> | 
                        <Link to= "/favorites">Favoritos</Link> | 
                        <Link to= "/popular">Populares</Link> | 
                        <Link to= "/upcoming">En cartelera</Link>
                    </nav>
                </div>
                <div className='search'>
                    <Buscador/>
                </div>
            </section>
        </header>
    )
}

export default Navbar;