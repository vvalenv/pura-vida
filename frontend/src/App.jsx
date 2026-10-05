import { Route, Routes } from 'react-router-dom'
import { Init } from './pages/init.jsx'
import { Accomodation } from './pages/accomodations.jsx'
import { Experience } from './pages/experiences.jsx'
import { Gastronomy } from './pages/gastronomy.jsx'

function App() {
  return (
   <Routes>
      <Route path="/" element={<Init />} />
      <Route path="/hospedajes" element={<Accomodation />} />
      <Route path="/gastronomia" element={<Gastronomy />} />
      <Route path="/experiencias" element={<Experience />} />
   </Routes>
  )
}

export default App
