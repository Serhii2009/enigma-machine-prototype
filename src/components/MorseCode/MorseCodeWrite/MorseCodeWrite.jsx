import { useState } from 'react'
import { Link } from 'react-router-dom'
import emailjs from 'emailjs-com'
import './MorseCodeWrite.css'

const MorseCodeWrite = () => {
  const [message, setMessage] = useState('')
  const [email, setEmail] = useState('')
  const [cipherText, setCipherText] = useState('')

  const morseAlphabet = {
    a: '.-',
    A: '.-',
    b: '-...',
    B: '-...',
    c: '-.-.',
    C: '-.-.',
    d: '-..',
    D: '-..',
    e: '.',
    E: '.',
    f: '..-.',
    F: '..-.',
    g: '--.',
    G: '--.',
    h: '....',
    H: '....',
    i: '..',
    I: '..',
    j: '.---',
    J: '.---',
    k: '-.-',
    K: '-.-',
    l: '.-..',
    L: '.-..',
    m: '--',
    M: '--',
    n: '-.',
    N: '-.',
    o: '---',
    O: '---',
    p: '.--.',
    P: '.--.',
    q: '--.-',
    Q: '--.-',
    r: '.-.',
    R: '.-.',
    s: '...',
    S: '...',
    t: '-',
    T: '-',
    u: '..-',
    U: '..-',
    v: '...-',
    V: '...-',
    w: '.--',
    W: '.--',
    x: '-..-',
    X: '-..-',
    y: '-.--',
    Y: '-.--',
    z: '--..',
    Z: '--..',
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
    ' ': '/',
    '.': '.-.-.-',
    ',': '--..--',
    '?': '..--..',
    "'": '.----.',
    '!': '-.-.--',
    '/': '-..-.',
    '(': '-.--.',
    ')': '-.--.-',
    '&': '.-...',
    ':': '---...',
    ';': '-.-.-.',
    '=': '-...-',
    '+': '.-.-.',
    '-': '-....-',
    _: '..--.-',
    '"': '.-..-.',
    $: '...-..-',
    '@': '.--.-.',
  }

  const handleMessageChange = (e) => {
    const inputMessage = e.target.value.toLowerCase()
    setMessage(inputMessage)
    const morseMessage = inputMessage
      .split('')
      .map((char) => morseAlphabet[char] || '?')
      .join(' ')
    setCipherText(morseMessage)
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
    <div className="morse-write-send-container">
      <form className="morse-write-send-form" onSubmit={handleSendEmail}>
        <textarea
          placeholder="Type your message here..."
          value={message}
          onChange={handleMessageChange}
        />

        <div className="morse-cipher-result">
          <div className="morse-cipher-text-box">
            <p>{cipherText}</p>
          </div>
        </div>

        <input
          className="morse-cipher-email"
          type="email"
          placeholder="Enter recipient's email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">Send</button>
        <Link to="/morse-choose">
          <button type="button" className="morse-back-button">
            Back
          </button>
        </Link>
      </form>
    </div>
  )
}

export default MorseCodeWrite
