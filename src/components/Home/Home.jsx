import './Home.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const [name, setName] = useState('')
  const [isNameSaved, setIsNameSaved] = useState(false)

  useEffect(() => {
    const savedName = sessionStorage.getItem('username')
    if (savedName) {
      setName(savedName)
      setIsNameSaved(true)
    }
  }, [])

  const handleSave = () => {
    if (name.trim()) {
      sessionStorage.setItem('username', name.trim())
      setIsNameSaved(true)
    } else {
      alert('Please enter a valid name.')
    }
  }

  return (
    <div className="home-container">
      {!isNameSaved ? (
        <div className="home-user-name">
          <input
            type="text"
            placeholder="Anonym"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div className="home-actions">
          <h2>Welcome, {name}!</h2>
          <Link to="/writecipher">
            <button>Write a Cipher</button>
          </Link>
          <Link to="/solvecipher">
            <button>Solve a Cipher</button>
          </Link>
        </div>
      )}
    </div>
  )
}

export default Home
