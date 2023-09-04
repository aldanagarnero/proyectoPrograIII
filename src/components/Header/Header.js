import React from 'react'
import {Route, Link} from 'react-router-dom'
function Header() {
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
               <article className="buscador">
                    <form action="resultados.html" method="GET"> 
                        <input className="inputBusqueda" type="text" name="buscador" value="" placeholder="Escriba aqui..."/>
                        <button className = "boton_busqueda" type="submit">Buscar</button>
                    </form>
                    <p className="errorForm"></p>
                </article>  
            </div>
        </section>
    </header>
    )
}
export default Header