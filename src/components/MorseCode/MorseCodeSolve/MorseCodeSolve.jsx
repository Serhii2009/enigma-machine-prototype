/* eslint-disable no-dupe-keys */
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './MorseCodeSolve.css'

const MorseCodeSolve = () => {
  const [morseMessage, setMorseMessage] = useState('')
  const [decodedText, setDecodedText] = useState('')

  const morseAlphabet = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.-': 'A',
    '-...': 'B',
    '-.-.': 'C',
    '-..': 'D',
    '.': 'E',
    '..-.': 'F',
    '--.': 'G',
    '....': 'H',
    '..': 'I',
    '.---': 'J',
    '-.-': 'K',
    '.-..': 'L',
    '--': 'M',
    '-.': 'N',
    '---': 'O',
    '.--.': 'P',
    '--.-': 'Q',
    '.-.': 'R',
    '...': 'S',
    '-': 'T',
    '..-': 'U',
    '...-': 'V',
    '.--': 'W',
    '-..-': 'X',
    '-.--': 'Y',
    '--..': 'Z',
    '-----': '0',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '/': ' ',
    '.-.-.-': '.',
    '--..--': ',',
    '..--..': '?',
    '.----.': "'",
    '-.-.--': '!',
    '-..-.': '/',
    '-.--.': '(',
    '-.--.-': ')',
    '.-...': '&',
    '---...': ':',
    '-.-.-.': ';',
    '-...-': '=',
    '.-.-.': '+',
    '-....-': '-',
    '..--.-': '_',
    '.-..-.': '"',
    '...-..-': '$',
    '.--.-.': '@',
  }

  const handleMorseChange = (e) => {
    const inputMorse = e.target.value

    setMorseMessage(inputMorse)

    try {
      const decoded = inputMorse
        .split(' ')
        .map((morse) => morseAlphabet[morse] || '?')
        .join('')
      setDecodedText(decoded.toLowerCase())
    } catch {
      setDecodedText('Invalid Morse code input')
    }
  }

  return (
    <div className="morse-solve-container">
      {/* Input for Morse code */}
      <textarea
        placeholder="Paste your Morse code here..."
        value={morseMessage}
        onChange={handleMorseChange}
      />

      {/* Display decoded text */}
      <div className="decoded-result">
        <p>{decodedText}</p>
      </div>

      {/* Back button */}
      <Link to="/morse-choose">
        <button className="morse-solve-back-button">Back</button>
      </Link>
    </div>
  )
}

export default MorseCodeSolve
