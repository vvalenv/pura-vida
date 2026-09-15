import '../styles/main-hero.css'
import '../styles/components.css'
import { Card1, Card2, Card3 } from '../components/articles.jsx'
import surfIcon from '../assets/icons/surfing.png'
import yogaIcon from '../assets/icons/yoga.png'
import wavesIcon from '../assets/icons/olas.png'

export const Hero = () => {
    return (
        <main className="main-hero">
            <section className="hero-section1">
                <div className="hero-content">
                    <h1 className="hero-title">Tu refugio de mar y vida simple en Acantilados</h1>
                    <button className="btn btn-blue btn-animated" type="button">
                        <span className="btn-text">Elegí tu espacio</span>
                    </button>
                </div>
            </section>
            <section className="hero-section2">
                <div className="hero-content">
                    <p className="hero-p-extra">El ritmo de acá</p>
                    <h2 className="hero-subtitle">Un lugar para bajar el volumen, seguir el sol y volver a conectar con lo escencial.</h2>
                    <p className="hero-p-subtext">Acá cada día se hace con otro ritmo: mar cerca, comida hecha en casa y gente que llega para sentirse parte.</p>
                </div>
            </section>
            <section className="hero-section3">
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
                    img="gastronomia.jpg"
                    desc="Mesa larga, producto local y recetas caseras para compartir sin mirar la hora. De mañana a noche, el bar acompaña el plan"
                    btnText="Ver la propuesta" />
            </section>
            <section className='hero-section4'>
                <div className="hero-content">
                    <p className='hero-p-extra'>En movimiento</p>
                    <h2 className='hero-title-sec4'>Mar, aire y tiempo para jugar</h2>
                    <div className="div-cards3-sec4">
                        <div className='card3-container'>
                            <img src={surfIcon} alt="Surf" />
                            <Card3 title="Surf"
                            img="surf.jpg" />
                        </div>
                        <div className='card3-container'>
                            <img src={yogaIcon} alt="Yoga" />
                            <Card3 title="Yoga"
                            img="yoga.jpg" />
                        </div>
                        <div className='card3-container card3-center'>
                            <img src={wavesIcon} alt="Olas" />
                            <Card3 title="Otras actividades"
                            img="otras.jpeg" />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}