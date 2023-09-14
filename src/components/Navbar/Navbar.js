import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';

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
                        <Link to= "/" exact='true'>INICIO </Link> | 
                        <Link to= "/favorites"> FAVORITOS </Link> | 
                        <Link to= "/popular"> POPULARES </Link> | 
                        <Link to= "/upcoming"> PRÓXIMAS</Link>
                    </nav>
                </div>
                <div className='search'>
                    <SearchBar />
                </div>
            </section>
        </header>
    )
}

export default Navbar;