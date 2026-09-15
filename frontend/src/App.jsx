import { Route, Routes } from 'react-router-dom'
import { Init } from './pages/init.jsx'

function App() {
  return (
   <Routes>
      <Route path="/" element={<Init />} />
   </Routes>
  )
}

export default App
