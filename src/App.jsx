import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import HomePage from './pages/HomePage'
import WriteCipher from './pages/WriteCipher'
import SolveCipher from './pages/SolveCipher'

import BinaryCodePageChoose from './pages/BinaryCodePage/BinaryCodePageChoose'
import BinaryCodePageWrite from './pages/BinaryCodePage/BinaryCodePageWrite'
import BinaryCodePageSolve from './pages/BinaryCodePage/BinaryCodePageSolve'
import BinaryCodeTrainingPage from './pages/BinaryCodePage/BinaryCodeTrainingPage'

import MorseCodePageChoose from './pages/MorseCodePage/MorseCodePageChoose'
import MorseCodePageWrite from './pages/MorseCodePage/MorseCodePageWrite'
import MorseCodePageSolve from './pages/MorseCodePage/MorseCodePageSolve'
import MorseCodeTrainingPage from './pages/MorseCodePage/MorseCodeTrainingPage'

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

        <Route path="/morse-choose" element={<MorseCodePageChoose />} />
        <Route path="/morse-write" element={<MorseCodePageWrite />} />
        <Route path="/morse-solve" element={<MorseCodePageSolve />} />
        <Route path="/morse-training" element={<MorseCodeTrainingPage />} />
      </Routes>
    </Router>
  )
}

export default App
