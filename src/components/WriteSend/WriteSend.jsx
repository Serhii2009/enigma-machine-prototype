import './WriteSend.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import emailjs from 'emailjs-com'

// Імпорт усіх шифрувальних функцій
import {
  modifiedCipher1,
  modifiedCipher2,
  modifiedCipher3,
  modifiedCipher4,
  swapEvenOddSet2_3,
  reversePairsSet4_2,
  stepSwapSet5_3,
} from '../../../Encryption/encryptionSet'

const encryptionFunctions = {
  1: modifiedCipher1,
  2: modifiedCipher2,
  3: modifiedCipher3,
  4: modifiedCipher4,
  5: swapEvenOddSet2_3,
  6: reversePairsSet4_2,
  7: stepSwapSet5_3,
}

const WriteSend = () => {
  const [techniqueIds, setTechniqueIds] = useState('')
  const [message, setMessage] = useState('')
  const [email, setEmail] = useState('')
  const [cipherText, setCipherText] = useState('')

  const encryptMessage = () => {
    if (!techniqueIds || !message) {
      setCipherText('')
      return
    }

    if (!/^\d{3}$/.test(techniqueIds)) {
      setCipherText('Invalid 5-digit Technique ID')
      return
    }

    let encryptedMessage = message

    for (const id of techniqueIds) {
      const func = encryptionFunctions[parseInt(id)]
      if (!func) {
        setCipherText('Invalid algorithm ID in sequence')
        return
      }
      encryptedMessage = func(encryptedMessage, 'key')
    }

    setCipherText(encryptedMessage)
  }

  useEffect(() => {
    encryptMessage()
  }, [techniqueIds, message])

  const handleSendEmail = (e) => {
    e.preventDefault()
    if (!email || !cipherText || !techniqueIds || !message) {
      alert('Please ensure all fields are filled out')
      return
    }

    const emailParams = {
      to_email: email,
      from_name: 'Anonym',
      to_name: email,
      technique_ids: techniqueIds,
      encrypted_message: cipherText,
    }

    emailjs
      .send(
        'service_ch301hg',
        'template_ce1mft',
        emailParams,
        'RcJXfNeV8JlCgbu5b'
      )
      .then(() => alert('Email sent successfully!'))
      .catch(() => alert('Failed to send email.'))
  }

  return (
    <div className="write-send-container">
      <div className="write-send-form">
        <input
          type="text"
          placeholder="Enter 5-digit Technique IDs"
          maxLength="3"
          value={techniqueIds}
          onChange={(e) => setTechniqueIds(e.target.value)}
        />
        <textarea
          placeholder="Enter your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <input
          type="email"
          placeholder="Recipient's Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="cipher-result">
          <div className="cipher-text-box">
            <p>{cipherText}</p>
          </div>
        </div>
        <button onClick={handleSendEmail}>Send Encrypted Message</button>
        <Link to="/">
          <button className="back-button">Back to Home</button>
        </Link>
      </div>
    </div>
  )
}

export default WriteSend
