import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import HomePage from './pages/HomePage'
import WriteCipher from './pages/WriteCipher'
import SolveCipher from './pages/SolveCipher'

import BinaryCodePageChoose from './pages/BinaryCodePage/BinaryCodePageChoose'
import BinaryCodePageWrite from './pages/BinaryCodePage/BinaryCodePageWrite'
import BinaryCodePageSolve from './pages/BinaryCodePage/BinaryCodePageSolve'
import BinaryCodeTrainingPage from './pages/BinaryCodePage/BinaryCodeTrainingPage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/writecipher" element={<WriteCipher />} />
        <Route path="/solvecipher" element={<SolveCipher />} />
        <Route path="/binary-choose" element={<BinaryCodePageChoose />} />
        <Route path="/binary-write" element={<BinaryCodePageWrite />} />
        <Route path="/binary-solve" element={<BinaryCodePageSolve />} />
        <Route path="/binary-training" element={<BinaryCodeTrainingPage />} />
      </Routes>
    </Router>
  )
}

export default App
