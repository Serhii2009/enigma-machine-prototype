import { useState } from 'react'
import { Link } from 'react-router-dom'
import './BinaryCodeSolve.css'

const BinaryCodeSolve = () => {
  const [binaryMessage, setBinaryMessage] = useState('')
  const [decodedText, setDecodedText] = useState('')

  const handleBinaryChange = (e) => {
    const inputBinary = e.target.value
    setBinaryMessage(inputBinary)

    // Decode binary message into text
    try {
      const decoded = inputBinary
        .split(' ')
        .map((bin) => String.fromCharCode(parseInt(bin, 2)))
        .join('')
      setDecodedText(decoded)
    } catch {
      setDecodedText('Invalid binary input')
    }
  }

  return (
    <div className="binary-solve-container">
      {/* Input for binary code */}
      <textarea
        placeholder="Paste your binary code here..."
        value={binaryMessage}
        onChange={handleBinaryChange}
      />

      {/* Display decoded text */}
      <div className="decoded-result">
        <p>{decodedText}</p>
      </div>

      {/* Back button */}
      <Link to="/binary-choose">
        <button className="binary-solve-back-button">Back</button>
      </Link>
    </div>
  )
}

export default BinaryCodeSolve
