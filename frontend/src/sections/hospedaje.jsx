import '../styles/main-hospedaje.css'
import { Card2 } from '../components/articles'
import casasPrivadas from '../assets/services/casasp.jpg';
import hotelPlaya from '../assets/services/hotelp.jpg';
import caravana from '../assets/services/caravana.jpg';
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
        </main>
    )
}