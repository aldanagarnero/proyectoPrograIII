import React from 'react'
function Footer() {
    return (
        <footer>
            <article>
                <p>Redes sociales
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-square-facebook"></i>
                    <i class="fa-brands fa-tiktok"></i>
                    <i class="fa-brands fa-youtube"></i>
                    <i class="fa-brands fa-facebook-messenger"></i>
                </p>
            </article>
            <article>
                <p> Sobre nosotros</p>
                    <p class="info_nosotros">Email: <a href="mailto:mensajeria@magoba.com" > mensajeria@magoba.com </a> </p>
                    <p class="info_nosotros">Tel: <a href="tel: 1234567890"> 123-456-7890</a></p>
            </article>
            <article>
                <p>Integrantes:</p>
                <p class="info_nosotros"> Aldana Garnero</p>
                <p class="info_nosotros">Sofia Guntin</p>
                <p class="info_nosotros">Bautista Giorgi</p>
            </article>
        </footer>
    )
}
export default Footer