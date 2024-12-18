import { Link } from 'react-router-dom'
import './BinaryCodeChoose.css'

const BinaryCodeChoose = () => {
  return (
    <div className="choose-container">
      <Link to="/binary-write">
        <button>Write a Cipher</button>
      </Link>
      <Link to="/binary-solve">
        <button>Solve a Cipher</button>
      </Link>

      <Link to="/binary-training">
        <button>Training</button>
      </Link>
    </div>
  )
}

export default BinaryCodeChoose
