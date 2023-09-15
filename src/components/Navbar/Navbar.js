import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <header>
            {/* LOGO */}
            <div>
                <Link to='/'><img className="logo" src="./img/logo.png" alt="Logo Albas" /></Link>
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
        </header>
    )
}

export default Navbar;