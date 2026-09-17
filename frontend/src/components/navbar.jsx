import { Link } from "react-router-dom";
import logo from "../assets/logos/logo1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "../styles/header.css";
export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <header className="site-header">
        <div className="header-inner">
            <Link to="/" className="logo">
                <img src={ logo } alt="Pura Vida" />
            </Link> 
            <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`} aria-label="Navegación principal">
                <Link to="/hospedajes">Hospedaje</Link>
                <Link to="#experiencias">Experiencias</Link>
                <Link to="#tienda">Negocios</Link>
                <Link to="#ubicacion">Ubicación</Link>
                <Link to="#voluntariado">Voluntariado</Link>
            </nav>
            <FontAwesomeIcon icon={faBars} className="menu-toggle" onClick={toggleMenu} aria-label="Abrir menú de navegación" />
        </div>
    </header>
    )
}