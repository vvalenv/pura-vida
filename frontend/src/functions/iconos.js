import {
  faUtensils, faWifi, faWater, faEye, faSnowflake, faShower,
  faFire, faDrumstickBite, faSun, faCar, faCouch, faCheck,
} from '@fortawesome/free-solid-svg-icons';

// La clave es amenities.icon en la base. Para usar tus íconos propios (SVG),
// reemplazá cada valor por un componente y ajustá CasaCard.jsx.
const ICONOS = {
  kitchen: faUtensils,
  wifi: faWifi,
  sea: faWater,
  'sea-view': faEye,
  fridge: faSnowflake,
  'hot-water': faShower,
  heating: faFire,
  fireplace: faFire,
  grill: faDrumstickBite,
  terrace: faSun,
  parking: faCar,
  'sofa-bed': faCouch,
};

export const iconoPara = (clave) => ICONOS[clave] ?? faCheck;