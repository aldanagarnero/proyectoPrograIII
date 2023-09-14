import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';

function Navbar() {
    return (
        <header>
            {/* LOGO */}
            <div>
                <Link to='/'><img className="logo" src="./img/nuevologo.png" alt="Logo Albas" /></Link>
            </div>

            {/* BARRA DE NAVEGACIÓN */}
            <div>
                <nav>
                    <ul className='contenedorItems'>
                        <li className='item'><Link to="/" exact='true'>INICIO </Link></li> |
                        <li className='item'><Link to="/favorites"> FAVORITOS </Link></li> |
                        <li className='item'><Link to="/popular"> POPULARES </Link></li> |
                        <li className='item'><Link to="/upcoming"> PRÓXIMAS</Link></li>            
                    </ul>
                </nav>
            </div>

            {/* BUSCADOR */}
            <div className='search'>
                <SearchBar />
            </div>
        </header>
    )
}

export default Navbar;