import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { iconoPara } from '../functions/iconos.js';
import '../styles/card-casas.css';

const formatoPrecio = new Intl.NumberFormat('es-AR', {
  style: 'currency',
  currency: 'ARS',
  maximumFractionDigits: 0,
});

const capitalizar = (t) => t.charAt(0).toUpperCase() + t.slice(1);
const hoy = new Date().toLocaleDateString('sv-SE'); // YYYY-MM-DD en hora local

export default function CasaCard({ casa }) {
  // Estado del buscador (parte interactiva)
  const [llegada, setLlegada] = useState('');
  const [salida, setSalida] = useState('');
  const [huespedes, setHuespedes] = useState(
    Math.max(casa.min_guests, Math.min(2, casa.capacity))
  );

  // Datos derivados de la base
  const destacadas = casa.amenities.filter((a) => a.is_highlight);
  const parrafos = casa.description.split('\n\n');
  const personas =
    casa.min_guests === casa.capacity
      ? `${casa.capacity} Personas`
      : `${casa.min_guests} a ${casa.capacity} Personas`;
  const opcionesHuespedes = Array.from(
    { length: casa.capacity - casa.min_guests + 1 },
    (_, i) => casa.min_guests + i
  );
  const fotos = casa.images.slice(0, 2);

  const buscar = () => {
    // TODO: GET /api/casas/${casa.slug}/disponibilidad?llegada=&salida=&huespedes=
    console.log({ casa: casa.slug, llegada, salida, huespedes });
  };

  return (
    <article className="casa">
      <div className="casa-barra">
        <div><strong>Capacidad</strong>{personas}</div>
        {casa.rooms && <div><strong>Ambientes</strong>{casa.rooms} ambientes</div>}
        {casa.bathroom_type && <div><strong>Baño</strong>{capitalizar(casa.bathroom_type)}</div>}
      </div>

      <div className="casa-grid">
        {/* Título y descripción */}
        <div className="casa-texto">
          <h2 className="casa-titulo">
            {casa.name}
          </h2>
          <p>{casa.summary}</p>
          {parrafos.map((p, i) => <p key={i}>{p}</p>)}
        </div>

        {/* Incluye */}
        {destacadas.length > 0 && (
          <div className="casa-incluye">
            <h3>Incluye:</h3>
            <ul>
              {destacadas.map((a) => (
                <li key={a.name}>
                  <FontAwesomeIcon icon={iconoPara(a.icon)} /> {a.name}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Fotos */}
        <div className="casa-fotos">
          {fotos.map((f) => <img key={f.url} src={f.url} alt={f.alt ?? casa.name} />)}
          {/* TODO: abrir galería completa (modal) con casa.images */}
          {fotos.length > 0 && <button type="button" className="btn-galeria">VER GALERÍA</button>}
        </div>

        {/* Buscador */}
        <aside className="casa-reserva">
          <span className="desde">DESDE</span>
          <div className="precio">
            {casa.price_from > 0 ? formatoPrecio.format(casa.price_from) : 'Consultar'}
            {casa.price_from > 0 && <small>/noche</small>}
          </div>
          <p className="minimo">Mínimo {casa.min_nights} noches</p>

          <div className="campos">
            <label>
              LLEGADA
              <input type="date" min={hoy} value={llegada} onChange={(e) => setLlegada(e.target.value)} />
            </label>
            <label>
              SALIDA
              <input type="date" min={llegada || hoy} value={salida} onChange={(e) => setSalida(e.target.value)} />
            </label>
            <label className="campo-ancho">
              HUÉSPEDES
              <select value={huespedes} onChange={(e) => setHuespedes(Number(e.target.value))}>
                {opcionesHuespedes.map((n) => (
                  <option key={n} value={n}>{n} {n === 1 ? 'Persona' : 'Personas'}</option>
                ))}
              </select>
            </label>
          </div>

          <button type="button" className="btn-buscar" onClick={buscar}>BUSCAR DISPONIBILIDAD</button>
            <a className="btn-whatsapp" href="https://wa.me/5492235231465" target="_blank" rel="noreferrer">
              CONSULTAR POR WHATSAPP
            </a>
        </aside>
      </div>
    </article>
  );
}