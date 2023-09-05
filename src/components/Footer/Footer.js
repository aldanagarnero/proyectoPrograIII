import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer>
            <article>
                <p>Redes sociales
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-square-facebook"></i>
                    <i className="fa-brands fa-tiktok"></i>
                    <i className="fa-brands fa-youtube"></i>
                    <i className="fa-brands fa-facebook-messenger"></i>
                </p>
            </article>
            <article>
                <p> Sobre nosotros</p>
                    <p className="info_nosotros">Email: <a href="mailto:mensajeria@magoba.com" > mensajeria@magoba.com </a> </p>
                    <p className="info_nosotros">Tel: <a href="tel: 1234567890"> 123-456-7890</a></p>
            </article>
            <article>
                <p>Integrantes:</p>
                <p className="info_nosotros"> Aldana Garnero</p>
                <p className="info_nosotros">Sofia Guntin</p>
                <p className="info_nosotros">Bautista Giorgi</p>
            </article>
        </footer>
    )
}

export default Footer;