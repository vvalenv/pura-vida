import '../styles/main-hospedaje.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card2 } from '../components/articles'
import casasPrivadas from '../assets/services/casasp.jpg';
import hotelPlaya from '../assets/services/hotelp.jpg';
import caravana from '../assets/services/caravana.jpg';
import { faBriefcase, faWifi, faFire, faMugSaucer, faShirt, faMountain, faTv, faBellConcierge, faVideo, faUserLock, faMartiniGlassCitrus, faSquareParking, faSoap, faLock, faFireFlameCurved, faPersonSwimming, faPuzzlePiece } from '@fortawesome/free-solid-svg-icons';
export const Hospedaje = () => {
    return (
        <main className="main-hospedaje">
            <section className="hero-section1 port-img-hosp">
                <div className="hero-content">
                    <h1 className="hero-title">Elegí tu forma de vivir pura vida</h1>
                    <p>Acá cada día se hace a otro ritmo: mar cerca, comida hecha en casa y gente que llega parra sentirse parte.</p>
                </div>
            </section>
            <section className='hosp-section2'>
                <Card2 title="Casas privadas"
                img={casasPrivadas}
                desc="Mesa larga, producto local y recetas caseras para compartir sin mirar la hora. De mañana a noche, el bar acompaña el plan."
                btnText="Ver casas y disponibilidad"
                just="left"
                style2="olive"
                />
                <Card2 title="Hostel"
                img={hotelPlaya}
                desc="Mesa larga, producto local y recetas caseras para compartir sin mirar la hora. De mañana a noche, el bar acompaña el plan."
                btnText="Ver habitaciones disponibles"
                style2="olive"
                />
                <Card2 title="Caravana"
                img={caravana}
                desc="Mesa larga, producto local y recetas caseras para compartir sin mirar la hora. De mañana a noche, el bar acompaña el plan."
                btnText="Ver disponibilidad"
                just="left"
                style2="olive"
                />
            </section>
            <section className='hosp-section3'>
                <h2>Todo lo que necesitas</h2>
                <article className='hosp-section3-article'>
                    <div>
                        <FontAwesomeIcon icon={faBriefcase} className='icon-hosp'/>
                        <p>Coworking</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faWifi} className='icon-hosp' />
                        <p>Wifi de alta velocidad</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faFire} className='icon-hosp' />
                        <p>Cocina equipada</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faMugSaucer} className='icon-hosp' />
                        <p>Desayuno</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faShirt} className='icon-hosp' />
                        <p>Blancos</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faMountain} className='icon-hosp' />
                        <p>Excursiones</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faTv} className='icon-hosp' />
                        <p>Smart TV</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faBellConcierge} className='icon-hosp' />
                        <p>Recepcion 24hs</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faVideo} className='icon-hosp' />
                        <p>CCTV</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faUserLock} className='icon-hosp' />
                        <p>Cerraduras inteligentes</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faMartiniGlassCitrus} className='icon-hosp' />
                        <p>Bar</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faSquareParking} className='icon-hosp' />
                        <p>Parking con cargo</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faSoap} className='icon-hosp' />
                        <p>Lavanderia con cargo</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faLock} className='icon-hosp' />
                        <p>Locker con candado</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faFireFlameCurved} className='icon-hosp' />
                        <p>Asador</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faPersonSwimming} className='icon-hosp' />
                        <p>Minipiscina</p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faPuzzlePiece} className='icon-hosp' />
                        <p>Área de juegos</p>
                    </div>
                </article>
            </section>
        </main>
    )
}