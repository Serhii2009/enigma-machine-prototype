import { useState, useEffect } from 'react'
import './MorseCodeTraining.css'
import { Link } from 'react-router-dom'
import wordsData from '../../../words.json'

const MorseCodeTraining = () => {
  const [morseWord, setMorseWord] = useState('')
  const [decodedWord, setDecodedWord] = useState('')
  const [score, setScore] = useState(0)
  const [timer, setTimer] = useState(120)
  const [wordCount, setWordCount] = useState(0)
  const [resultVisible, setResultVisible] = useState(false)
  const [showHelp, setShowHelp] = useState(false)
  const [totalTimeTimer, setTotalTimeTimer] = useState(0) // Таймер для обліку часу
  const [isTimerRunning, setIsTimerRunning] = useState(true) // Стан для керування секундомером

  const morseAlphabet = {
    a: '.-',
    b: '-...',
    c: '-.-.',
    d: '-..',
    e: '.',
    f: '..-.',
    g: '--.',
    h: '....',
    i: '..',
    j: '.---',
    k: '-.-',
    l: '.-..',
    m: '--',
    n: '-.',
    o: '---',
    p: '.--.',
    q: '--.-',
    r: '.-.',
    s: '...',
    t: '-',
    u: '..-',
    v: '...-',
    w: '.--',
    x: '-..-',
    y: '-.--',
    z: '--..',
    0: '-----',
    1: '.----',
    2: '..---',
    3: '...--',
    4: '....-',
    5: '.....',
    6: '-....',
    7: '--...',
    8: '---..',
    9: '----.',
  }

  const generateRandomWord = () => {
    const categories = Object.keys(wordsData)
    const randomCategory =
      categories[Math.floor(Math.random() * categories.length)]
    const wordList = wordsData[randomCategory]
    return wordList[Math.floor(Math.random() * wordList.length)]
  }

  const generateMorseWord = () => {
    const word = generateRandomWord()
    return word
      .split('')
      .map((char) => morseAlphabet[char] || '')
      .join(' ')
  }

  const startNewRound = () => {
    if (wordCount < 5) {
      setMorseWord(generateMorseWord())
      setDecodedWord('')
    } else {
      setResultVisible(true)
    }
  }

  const handleSubmit = () => {
    if (decodedWord.trim() === '') {
      alert('Please enter a word!')
      return
    }

    const decodedMorse = morseWord
      .split(' ')
      .map((morse) =>
        Object.keys(morseAlphabet).find((key) => morseAlphabet[key] === morse)
      )
      .join('')

    if (decodedWord === decodedMorse) {
      setScore((prev) => prev + 10)
      setTimer((prev) => prev + 50)
    }

    setWordCount((prev) => prev + 1)
    startNewRound()
  }

  useEffect(() => {
    if (timer > 0 && wordCount < 5) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000)
      return () => clearInterval(interval)
    } else {
      setResultVisible(true)
      setIsTimerRunning(false) // Зупиняємо секундомір після завершення тесту
    }
  }, [timer, wordCount])

  // useEffect для роботи секундомера
  useEffect(() => {
    if (isTimerRunning) {
      const interval = setInterval(
        () => setTotalTimeTimer((prev) => prev + 1),
        1000
      )
      return () => clearInterval(interval)
    }
  }, [isTimerRunning]) // Секундомір працює тільки коли isTimerRunning === true

  useEffect(() => {
    startNewRound()
  }, [])

  return (
    <div className="morse-code-training">
      {!resultVisible ? (
        <>
          <div className="header">
            <div className="timer">Time left: {timer}s</div>
            <div className="score">Score: {score} / 50</div>
          </div>
          <div className="content">
            <div className="morse-word">
              <div className="morse-display">{morseWord}</div>
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
                    {Object.entries(morseAlphabet).map(([char, morse]) => (
                      <tr key={char}>
                        <td>{morse}</td>
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
          <p>Total Time Taken: {totalTimeTimer}s</p>{' '}
          {/* Показує час, який пройшов */}
          <button
            className="restart-button"
            onClick={() => window.location.reload()}
          >
            Restart
          </button>
          <Link to="/morse-choose">
            <button className="morse-training-back-button">Back</button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default MorseCodeTraining
