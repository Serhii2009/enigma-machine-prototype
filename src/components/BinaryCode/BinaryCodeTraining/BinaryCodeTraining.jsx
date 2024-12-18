import { useState, useEffect } from 'react'
import './BinaryCodeTraining.css'
import { Link } from 'react-router-dom'
import wordsData from '../../../words.json'

const BinaryCodeTraining = () => {
  const [binaryWord, setBinaryWord] = useState('')
  const [decodedWord, setDecodedWord] = useState('')
  const [score, setScore] = useState(0)
  const [timer, setTimer] = useState(120)
  const [wordCount, setWordCount] = useState(0)
  const [resultVisible, setResultVisible] = useState(false)
  const [showHelp, setShowHelp] = useState(false) // Додано стан для відображення таблиці

  // Генерація випадкового слова з JSON
  const generateRandomWord = () => {
    const categories = Object.keys(wordsData)
    const randomCategory =
      categories[Math.floor(Math.random() * categories.length)]
    const wordList = wordsData[randomCategory]
    return wordList[Math.floor(Math.random() * wordList.length)]
  }

  // Генерація бінарного слова
  const generateBinaryWord = () => {
    const word = generateRandomWord()
    return word
      .split('')
      .map((char) => char.charCodeAt(0).toString(2).padStart(8, '0'))
      .join(' ')
  }

  // Початок нового раунду
  const startNewRound = () => {
    if (wordCount < 5) {
      setBinaryWord(generateBinaryWord())
      setDecodedWord('')
    } else {
      setResultVisible(true)
    }
  }

  // Перевірка введеного слова
  const handleSubmit = () => {
    if (decodedWord.trim() === '') {
      alert('Please enter a word!')
      return
    }

    const decodedBinary = binaryWord
      .split(' ')
      .map((bin) => String.fromCharCode(parseInt(bin, 2)))
      .join('')

    if (decodedWord === decodedBinary) {
      setScore((prev) => prev + 10)
      setTimer((prev) => prev + 10)
    }

    setWordCount((prev) => prev + 1)
    startNewRound()
  }

  // Логіка таймера
  useEffect(() => {
    if (timer > 0 && wordCount < 5) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000)
      return () => clearInterval(interval)
    } else {
      setResultVisible(true)
    }
  }, [timer, wordCount])

  // Початок гри при завантаженні
  useEffect(() => {
    startNewRound()
  }, [])

  // Алфавіт з бінарним шифруванням
  const binaryAlphabet = Array.from({ length: 26 }, (_, i) => {
    const char = String.fromCharCode(97 + i) // a-z
    return { char, binary: char.charCodeAt(0).toString(2).padStart(8, '0') }
  })

  return (
    <div className="binary-code-training">
      {!resultVisible ? (
        <>
          <div className="header">
            <div className="timer">Time left: {timer}s</div>
            <div className="score">Score: {score} / 50</div>
          </div>
          <div className="content">
            <div className="binary-word">
              <div className="binary-display">{binaryWord}</div>
            </div>
            <div className="decoded-word">
              <input
                type="text"
                value={decodedWord}
                onChange={(e) => setDecodedWord(e.target.value)}
              />
            </div>
            <button className="submit-button" onClick={handleSubmit}>
              Submit
            </button>
          </div>
          {/* Додано кнопку для відображення таблиці */}
          <div className="help-section">
            <button
              className="help-button"
              onClick={() => setShowHelp((prev) => !prev)}
            >
              ?
            </button>
            {showHelp && (
              <div className="help-table">
                <table>
                  <tbody>
                    {binaryAlphabet.map(({ char, binary }) => (
                      <tr key={char}>
                        <td>{binary}</td>
                        <td>{char}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </>
      ) : (
        <div className="result">
          <h2>Your Result</h2>
          <p>Score: {score} / 50</p>
          <p>Total Time Taken: {120 - timer}s</p>
          <button
            className="restart-button"
            onClick={() => window.location.reload()}
          >
            Restart
          </button>
          <Link to="/binary-choose">
            <button className="binary-training-back-button">Back</button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default BinaryCodeTraining
