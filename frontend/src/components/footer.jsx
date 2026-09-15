import '../styles/footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faSquareFacebook, faSquareXTwitter } from "@fortawesome/free-brands-svg-icons"
export const Footer = () => {
    return (
        <footer>
            <div className='div-media-icons'>
                <FontAwesomeIcon icon={faInstagram} className='media-icon' />
                <FontAwesomeIcon icon={faSquareFacebook} className='media-icon' />
                <FontAwesomeIcon icon={faSquareXTwitter} className='media-icon' />
            </div>
            <hr />
            <address>©Copyright 2026 Pura Vida. Todos los derechos reservados.</address>
        </footer>
    )
}