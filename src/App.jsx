import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import HomePage from './pages/HomePage'
import WriteCipher from './pages/WriteCipher'
import SolveCipher from './pages/SolveCipher'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/writecipher" element={<WriteCipher />} />
        <Route path="/solvecipher" element={<SolveCipher />} />
      </Routes>
    </Router>
  )
}

export default App
