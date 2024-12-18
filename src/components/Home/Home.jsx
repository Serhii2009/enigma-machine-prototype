import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home-container">
      <h2>Welcome, Sir!</h2>
      <Link to="/binary-choose">
        <button>Binary code</button>
      </Link>
      <Link to="/morse-choose">
        <button>Morse code</button>
      </Link>
      <Link to="/choosepage">
        <button>Custom code</button>
      </Link>
    </div>
  )
}

export default Home
