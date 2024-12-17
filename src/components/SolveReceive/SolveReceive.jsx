import './SolveReceive.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import {
  modifiedCipher1,
  modifiedCipher2,
  modifiedCipher3,
  modifiedCipher4,
  swapEvenOddSet2_3,
  reversePairsSet4_2,
  stepSwapSet5_3,
} from '../../../Encryption/encryptionSet'

const reverseAlgorithms = {
  1: modifiedCipher1,
  2: modifiedCipher2,
  3: modifiedCipher3,
  4: modifiedCipher4,
  5: swapEvenOddSet2_3,
  6: reversePairsSet4_2,
  7: stepSwapSet5_3,
}

const SolveReceive = () => {
  const [techniqueIds, setTechniqueIds] = useState('')
  const [cipherText, setCipherText] = useState('')
  const [originalMessage, setOriginalMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleDecryption = () => {
    setErrorMessage('')
    setOriginalMessage('')

    if (!/^\d{3}$/.test(techniqueIds)) {
      setErrorMessage('Please enter a valid 5-digit Technique ID.')
      return
    }

    let decryptedMessage = cipherText

    try {
      const algorithmIds = techniqueIds.split('')
      for (const id of algorithmIds) {
        const func = reverseAlgorithms[parseInt(id)]
        if (!func) {
          throw new Error(`Invalid algorithm ID: ${id}`)
        }

        decryptedMessage = func(decryptedMessage, 'key')
      }

      setOriginalMessage(decryptedMessage)
    } catch (error) {
      console.error(error)
      setErrorMessage('Decryption failed. Please check the inputs.')
    }
  }

  useEffect(() => {
    if (cipherText && techniqueIds) {
      handleDecryption()
    }
  }, [techniqueIds, cipherText])

  return (
    <div className="solve-receive-container">
      <div className="solve-receive-form">
        <input
          type="text"
          placeholder="Enter 5-digit Technique IDs"
          maxLength="3"
          value={techniqueIds}
          onChange={(e) => setTechniqueIds(e.target.value)}
        />
        <textarea
          placeholder="Enter the encrypted message"
          value={cipherText}
          onChange={(e) => setCipherText(e.target.value)}
        />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <div className="decrypted-result">
          <div className="original-text-box">
            <p>{originalMessage}</p>
          </div>
        </div>
        <Link to="/">
          <button className="back-button">Back to Home</button>
        </Link>
      </div>
    </div>
  )
}

export default SolveReceive
