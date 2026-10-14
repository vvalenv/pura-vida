import '../styles/footer.css'
import { Link } from "react-router-dom";
import logo from "../assets/logos/logo1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faSquareFacebook, faSquareXTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
export const Footer = () => {
    return (
        <footer>
            <div className='content-footer'>
                <div className='content-footer-cont1'>
                    <img src={ logo } alt="logo" className='logo-footer'/>
                    <div>
                        <p>Acantilados Mar del Plata - Argentina</p>
                        <p><strong>Un refugio para vivir despacio.</strong></p>
                    </div>
                </div>
                <div className='content-footer-cont2'>
                    <div className='content-footer-links'>
                        <Link to="#contacto">Contacto</Link>
                        <Link to="/nosotros">Nosotros</Link>
                        <Link to="/#ubicacion">Ubicación</Link>
                        <Link to="#voluntariado">Voluntariado</Link>
                    </div>
                    <button className='btn-wpp'>
                        <FontAwesomeIcon icon={faWhatsapp} className='media-icon' />
                        <p>Hablemos por Whatsapp</p> 
                    </button>
                </div>
            </div>
            <div className='div-media-icons'>
                <FontAwesomeIcon icon={faInstagram} className='media-icon' />
                <FontAwesomeIcon icon={faSquareFacebook} className='media-icon' />
                <FontAwesomeIcon icon={faSquareXTwitter} className='media-icon' />
            </div>
            <div>
                <hr />
                <address>©Copyright 2026 Pura Vida. Todos los derechos reservados.</address>
            </div>
        </footer>
    )
}