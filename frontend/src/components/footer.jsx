import '../styles/footer.css'
import { Link } from "react-router-dom";
import logo from "../assets/logos/logo1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faSquareFacebook } from "@fortawesome/free-brands-svg-icons"
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
                        <Link to="/login">Inicia sesion</Link>
                        <Link to="#voluntariado">Voluntariado</Link>
                    </div>
                </div>
            </div>
            <div className='div-media-icons'>
                <Link to="https://www.instagram.com/playapuravidamdq" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} className='media-icon' />
                </Link>
                <Link to="https://www.facebook.com/PlayaPuraVida" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faSquareFacebook} className='media-icon' />
                </Link>
            </div>
            <div>
                <hr />
                <address>©Copyright 2026 Pura Vida. Todos los derechos reservados.</address>
            </div>
        </footer>
    )
}