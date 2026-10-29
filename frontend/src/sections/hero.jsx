import '../styles/main-hero.css'
import { Acordion, Card1, Card2, Card3 } from '../components/articles.jsx'
import { useRef } from 'react';
import surfIcon from '../assets/icons/surfing.png'
import yogaIcon from '../assets/icons/yoga.png'
import wavesIcon from '../assets/icons/olas.png'
import gastronomia from '../assets/services/gastronomia.jpg'
import surf from '../assets/services/surf.jpg'
import yoga from '../assets/services/yoga.jpg'
import otras from '../assets/services/otras.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

export const Hero = () => {
    const section3Ref = useRef(null);
    const scrollToSection = () => {
        section3Ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    return (
        <main className="main-hero">
            <section className="hero-section1">
                <div className="hero-content">
                    <h1 className="hero-title">Tu refugio de mar y vida simple en Acantilados</h1>
                    <button className="btn btn-blue btn-animated" type="button" onClick={scrollToSection}>
                        <span className="btn-text">Elegí tu espacio</span>
                    </button>
                </div>
            </section>
            <section className="hero-section2">
                <div className="hero-content">
                    <p className="hero-p-extra">El ritmo de acá</p>
                    <h2 className="hero-subtitle">Un lugar para bajar el volumen, seguir el sol y volver a conectar con lo esencial.</h2>
                    <p className="hero-p-subtext">Acá cada día se hace con otro ritmo: mar cerca, comida hecha en casa y gente que llega para sentirse parte.</p>
                </div>
            </section>
            <section className="hero-section3" ref={section3Ref}>
                <div className="hero-content2">
                    <p className="hero-p-extra">Para quedarse</p>
                    <h2 className="hero-subtitle2">Elegí como querés vivir la costa</h2>
                    <div className='div-cards1'>
                        <Card1 title="Casas privadas"
                        img="card-img-casas"
                        desc="Tu propio espacio frente al mar"
                        btnText="Conoce las casas" />
                        <Card1 title="Hostel"
                        img="card-img-hostel"
                        desc="Habitaciones privadas, compartidas. Nuevos amigos y espíritu libre"
                        btnText="Conoce el hostel"
                        just="left" />
                    </div>
                </div>
                <Card2 title="Gastronomía"
                    img={gastronomia}
                    desc="Mesa larga, producto local y recetas caseras para compartir sin mirar la hora. De mañana a noche, el bar acompaña el plan."
                    btnText="Ver la propuesta" />
            </section>
            <section className='hero-section4'>
                <div className="hero-content">
                    <p className='hero-p-extra'>En movimiento</p>
                    <h2 className='hero-title-sec4'>Mar, aire y tiempo para jugar</h2>
                    <div className="div-cards3-sec4">
                        <div className='card3-container'>
                            <img src={surfIcon} alt="Surf" className='card3-icon'/>
                            <Card3 title="Surf"
                            img={surf} />
                        </div>
                        <div className='card3-container'>
                            <img src={yogaIcon} alt="Yoga" className='card3-icon'/>
                            <Card3 title="Yoga"
                            img={yoga} />
                        </div>
                        <div className='card3-container card3-center'>
                            <img src={wavesIcon} alt="Olas" className='card3-icon'/>
                            <Card3 title="Otras actividades"
                            img={otras} />
                        </div>
                    </div>
                </div>
            </section>
            <section className='hero-section5' id="ubicacion">
                <div className="hero-content">
                    <h2 className='card2-title'>Dónde estamos</h2>
                    <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3139.232108556001!2d-57.586271499472566!3d-38.11153416969439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584e0e254c4df6d%3A0x225515a4a8b9c00e!2sPlaya%20Pura%20Vida%20MDQ!5e0!3m2!1ses-419!2sar!4v1791926641797!5m2!1ses-419!2sar" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="strict-origin-when-cross-origin"></iframe>
                </div>
            </section>
            <section className='hero-section6'>
                <div className='hero-content'>
                    <h2 className='card2-title'>Preguntas frecuentes</h2>
                    <article className="art-FAQ">
                        <Acordion title={<><FontAwesomeIcon icon={faClock} className='accordion-icon'/> ¿Cuales son los horarios de check-in check-out?</>}
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                        <Acordion title={<><FontAwesomeIcon icon={faClock} className='accordion-icon'/> ¿Cuales son los horarios de check-in check-out?</>}
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                        <Acordion title={<><FontAwesomeIcon icon={faClock} className='accordion-icon'/> ¿Cuales son los horarios de check-in check-out?</>}
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                        <Acordion title={<><FontAwesomeIcon icon={faClock} className='accordion-icon'/> ¿Cuales son los horarios de check-in check-out?</>}
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
                    </article>
                </div>
            </section>
        </main>
    )
}