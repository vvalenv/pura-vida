import '../styles/main-casas.css'
import { useEffect, useState } from 'react';
import CasaCard from '../components/casasCard';
export const Casas = () => {
    const [casas, setCasas] = useState([]);
    const [estado, setEstado] = useState('cargando'); // cargando | listo | error
    useEffect(() => {
        fetch('/api/casas')
        .then((res) => {
            if (!res.ok) throw new Error('Respuesta no válida');
            return res.json();
        })
        .then((data) => {
            setCasas(data);
            setEstado('listo');
        })
        .catch(() => setEstado('error'));
    }, []);

    if (estado === 'cargando') return <p className="casas-msg">Cargando casas…</p>;
    if (estado === 'error') {
        return <p className="casas-msg">No pudimos cargar las casas. Probá de nuevo en un momento.</p>;
    }
    return (
        <main className="main-casas">
            <section className="casas-section1">
                <h1>Casas <span>privadas</span></h1>
            </section>
            <section className="casas-section2">
                <div className="hero-content">
                    {casas.map((casa) => <CasaCard key={casa.id} casa={casa} />)}
                </div>
            </section>
        </main>
    )
}