import { useState } from 'react'
import { Link } from 'react-router-dom'
import emailjs from 'emailjs-com'
import './BinaryCodeWrite.css'

const BinaryCodeWrite = () => {
  const [message, setMessage] = useState('')
  const [email, setEmail] = useState('')
  const [cipherText, setCipherText] = useState('')

  const handleMessageChange = (e) => {
    const inputMessage = e.target.value
    setMessage(inputMessage)
    const binaryMessage = inputMessage
      .split('')
      .map((char) => char.charCodeAt(0).toString(2).padStart(8, '0'))
      .join(' ')
    setCipherText(binaryMessage)
  }

  const handleSendEmail = (e) => {
    e.preventDefault()
    if (!email || !cipherText || !message) {
      alert('Please ensure all fields are filled out')
      return
    }

    const emailParams = {
      to_email: email,
      from_name: 'Anonym',
      to_name: email,
      encrypted_message: cipherText,
    }

    emailjs
      .send(
        'service_ch301hg',
        'template_hq1ng61',
        emailParams,
        'RcJXfNeV8JlCgbu5b'
      )
      .then(() => alert('Email sent successfully!'))
      .catch(() => alert('Failed to send email.'))
  }

  return (
    <div className="binary-write-send-container">
      <form className="binary-write-send-form" onSubmit={handleSendEmail}>
        <textarea
          placeholder="Type your message here..."
          value={message}
          onChange={handleMessageChange}
        />

        <div className="binary-cipher-result">
          <div className="binary-cipher-text-box">
            <p>{cipherText}</p>
          </div>
        </div>

        <input
          className="binary-cipher-email"
          type="email"
          placeholder="Enter recipient's email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">Send</button>
        <Link to="/binary-choose">
          <button type="button" className="binary-back-button">
            Back
          </button>
        </Link>
      </form>
    </div>
  )
}

export default BinaryCodeWrite
