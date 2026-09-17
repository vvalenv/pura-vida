import { Route, Routes } from 'react-router-dom'
import { Init } from './pages/init.jsx'
import { Accomodation } from './pages/accomodations.jsx'

function App() {
  return (
   <Routes>
      <Route path="/" element={<Init />} />
      <Route path="/hospedajes" element={<Accomodation />} />
   </Routes>
  )
}

export default App
