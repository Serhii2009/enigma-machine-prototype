export const modifiedCipher1 = (message) => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz '
  const reversedAlphabet = alphabet.split('').reverse().join('')
  return message
    .split('')
    .map((char) => {
      const index = alphabet.indexOf(char)
      return index !== -1 ? reversedAlphabet[index] : char
    })
    .join('')
}

export const modifiedCipher2 = (message) => {
  let cipher = ''
  for (let i = 0; i < message.length; i += 2) {
    const first = message[i] || ''
    const second = message[i + 1] || ''
    cipher += second + first
  }
  return cipher
}

export const modifiedCipher3 = (message) => {
  return message.split('').reverse().join('')
}

export const modifiedCipher4 = (message) => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz '
  return message
    .split('')
    .map((char, index) => {
      const i = alphabet.indexOf(char)
      if (i === -1) return char
      return alphabet[
        (i + (index % 2 === 0 ? 2 : -2) + alphabet.length) % alphabet.length
      ]
    })
    .join('')
}

// ----------

export const swapEvenOddSet2_3 = (message) => {
  let result = ''
  for (let i = 0; i < message.length; i += 2) {
    result += message[i + 1] || ''
    result += message[i]
  }
  return result
}

export const reversePairsSet4_2 = (message) => {
  return message.replace(/(.)(.)/g, '$2$1')
}

export const stepSwapSet5_3 = (message) => {
  const result = message.split('')
  for (let i = 0; i < result.length - 2; i += 3) {
    ;[result[i], result[i + 2]] = [result[i + 2], result[i]]
  }
  return result.join('')
}
