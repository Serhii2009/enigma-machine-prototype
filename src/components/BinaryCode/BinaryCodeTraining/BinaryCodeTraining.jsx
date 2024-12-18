import { useState, useEffect } from 'react'
import './BinaryCodeTraining.css'

const BinaryCodeTraining = () => {
  const [binaryWord, setBinaryWord] = useState('')
  const [decodedWord, setDecodedWord] = useState('')
  const [score, setScore] = useState(0)
  const [timer, setTimer] = useState(60)
  const [wordCount, setWordCount] = useState(0)
  const [resultVisible, setResultVisible] = useState(false)

  // Generate a random binary-encoded word
  const generateBinaryWord = () => {
    const words = ['hello', 'world', 'react', 'binary', 'code']
    const word = words[Math.floor(Math.random() * words.length)]
    return word
      .split('')
      .map((char) => char.charCodeAt(0).toString(2).padStart(8, '0'))
      .join(' ')
  }

  // Start a new round
  const startNewRound = () => {
    if (wordCount < 5) {
      setBinaryWord(generateBinaryWord())
      setDecodedWord('')
    } else {
      setResultVisible(true)
    }
  }

  // Check if the decoded word is correct
  const handleSubmit = () => {
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

  // Timer countdown logic
  useEffect(() => {
    if (timer > 0 && wordCount < 5) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000)
      return () => clearInterval(interval)
    } else {
      setResultVisible(true)
    }
  }, [timer, wordCount])

  // Start the first round on component mount
  useEffect(() => {
    startNewRound()
  }, [])

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
              <label>Binary Code:</label>
              <div className="binary-display">{binaryWord}</div>
            </div>
            <div className="decoded-word">
              <label>Decoded Word:</label>
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
        </>
      ) : (
        <div className="result">
          <h2>Your Result</h2>
          <p>Score: {score} / 50</p>
          <p>Total Time Taken: {60 - timer}s</p>
          <button
            className="restart-button"
            onClick={() => window.location.reload()}
          >
            Restart
          </button>
        </div>
      )}
    </div>
  )
}

export default BinaryCodeTraining
