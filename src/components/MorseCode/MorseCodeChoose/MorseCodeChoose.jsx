import { Link } from 'react-router-dom'
import './MorseCodeChoose.css'

const MorseCodeChoose = () => {
  return (
    <div className="choose-container">
      <Link to="/morse-write">
        <button>Write a Cipher</button>
      </Link>
      <Link to="/morse-solve">
        <button>Solve a Cipher</button>
      </Link>

      <Link to="/morse-training">
        <button>Training</button>
      </Link>
    </div>
  )
}

export default MorseCodeChoose
