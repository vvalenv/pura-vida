import { Carousel } from '../components/articles'
import '../styles/main-gastronomia.css'
export const Gastronomia = () => {
    return (
        <main className="main-gast">
            <section className="section1-gast">
                <div className='text-section1-gast'>
                    <p className='p-top-section1-gast'>gastronomía</p>
                    <p className='p2-top-section1-gast'>Cocina de mar - temporada 2026</p>
                    <h1>Gastronomía</h1>
                    <h3 className='subtext-section-gast'>"Sabores simples, fuego y vida compartida"</h3>
                </div>
                <aside className='aside-section1-gast'>
                    <h3>Horario de atencion</h3>
                    <p className='p-hour-aside-section1-gast'>12:00 - 15:00</p>
                    <p className='p-hour-aside-section1-gast'>19:00 - 23:00</p>
                    <p className='p-day-aside-section1-gast'>Lunes a lunes</p>
                </aside>
            </section>
            <section className="section2-gast">
                <p className='p-top-section2-gast'>Nuestra propuesta</p>
                <h2 className='h2-section2-gast'>Comida honesta, ingredientes reales</h2>
                <article className='article-section2-gast'>
                    <p>No somos un restaurante, somos un lugar donde la comida pasa. Trabajamos con productores de la región, el menú cambia con la estación y cocinamos todo al momento.</p>
                    <p>No hay congelados, no hay microondas, no hay apuro.</p>
                    <p>La parrilla prende a las 19:00. El mar está a diez metros. Eso es todo lo que necesitás saber.</p>
                </article>
                <button className='button-section2-gast'>Ver menú</button>
                <div className="footer-section2-gast">
                    <div>
                        <h3>Atención por orden de llegada</h3>
                        <p>No tomamos reservas. Primero en llegar, primero en comer</p>
                    </div>
                    <div>
                        <h3>Grupos de mas de 10 personas</h3>
                        <p>Consultar disponibilidad previamente por WhatsApp</p>
                    </div>
                </div>
            </section>
            <section className="section3-gast">
                <p className='p-top-section2-gast'>En imagenes</p>
                <h2 className='h2-section2-gast'>La mesa <span>siempre lista</span></h2>
                <Carousel />
            </section>
            <section className="section4-gast">
                <h2 className='h2-section2-gast'>Eventos privados</h2>
                <article className='article-section2-gast'>
                    <p>No somos un restaurante, somos un lugar donde la comida pasa. Trabajamos con productores de la región, el menú cambia con la estación y cocinamos todo al momento.</p>
                    <p>No hay congelados, no hay microondas, no hay apuro.</p>
                    <p>La parrilla prende a las 19:00. El mar está a diez metros. Eso es todo lo que necesitás saber.</p>
                </article>
                <div className="container-gast-items">
                    <div className="gast-item">Menú personalizado</div>
                    <div className="gast-item">Parrilla exclusiva</div>
                    <div className="gast-item">Música en vivo opcional</div>
                    <div className="gast-item">Hasta 40 personas</div>
                </div>
                <button className='button-section2-gast'>Hablemos por WhatsApp</button>
            </section>
        </main>
    )
}