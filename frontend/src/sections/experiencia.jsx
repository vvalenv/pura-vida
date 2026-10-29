import { Card4 } from '../components/articles'
import surf from '../assets/services/surf.jpg'
import yoga from '../assets/services/yoga.jpg'
import cabalgata from '../assets/services/cabalgata.jpg'
import parapente from '../assets/services/parapente.jpg'
import bici from '../assets/services/bici.jpg'
import '../styles/main-experiencia.css'
export const Experiencia = () => {
    return (
        <main className="main-experiences">
            <section className="experience-section1">
                <h1 className="hero-title">Tu cuerpo en movimiento, <span>Tu mente en calma</span></h1>
            </section>
            <section className='experience-section2'>
                <div className="content-experience-section2">
                    <Card4 title="Clases de surf" img={surf} 
                    tags={["Duracion: 2 horas", "Nivel principiante a avanzado", "Incluye equipamiento"]}
                    label="Sumar a mi reserva" />
                    <Card4 title="Yoga" img={yoga} 
                    tags={["Duracion: 2 horas", "Nivel principiante a avanzado", "Incluye equipamiento"]}
                    label="Sumar a mi reserva" />
                    <Card4 title="Cabalgata" img={cabalgata} 
                    tags={["Duracion: 2 horas", "Nivel principiante a avanzado", "Incluye equipamiento"]}
                    label="Sumar a mi reserva" />
                    <Card4 title="Bicicletas" img={bici} 
                    tags={["Duracion: 2 horas", "Nivel principiante a avanzado", "Incluye equipamiento"]}
                    label="Sumar a mi reserva" />
                    <Card4 title="Parapente" img={parapente} 
                    tags={["Duracion: 2 horas", "Nivel principiante a avanzado", "Incluye equipamiento"]}
                    label="Sumar a mi reserva" />
                </div>
            </section>
            <section className='experience-section3'>
                <p>Despues de la aventura, te esperamos <span>en casa para compartir la anecdota</span></p>
            </section>
        </main>
    )
} 