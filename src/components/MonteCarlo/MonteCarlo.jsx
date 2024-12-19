import { useState } from 'react'
import './MonteCarlo.css'

const MonteCarlo = () => {
  const [numSimulations, setNumSimulations] = useState(10000)
  const [revenueRange, setRevenueRange] = useState({ min: 500, max: 2000 })
  const [expensesRange, setExpensesRange] = useState({ min: 200, max: 1000 })
  const [successProbability, setSuccessProbability] = useState(0.6)
  const [averageProfit, setAverageProfit] = useState(null)
  const [positiveOutcomes, setPositiveOutcomes] = useState(null)
  const [showResults, setShowResults] = useState(false)

  const simulateProject = () => {
    const revenue =
      Math.random() * (revenueRange.max - revenueRange.min) + revenueRange.min
    const expenses =
      Math.random() * (expensesRange.max - expensesRange.min) +
      expensesRange.min

    if (Math.random() < successProbability) {
      return revenue - expenses
    } else {
      return -expenses
    }
  }

  const runSimulation = () => {
    let profits = []
    for (let i = 0; i < numSimulations; i++) {
      profits.push(simulateProject())
    }

    const avgProfit =
      profits.reduce((acc, profit) => acc + profit, 0) / numSimulations
    const positiveOutcomePercent =
      (profits.filter((profit) => profit > 0).length / numSimulations) * 100

    setAverageProfit(avgProfit.toFixed(2))
    setPositiveOutcomes(positiveOutcomePercent.toFixed(2))
    setShowResults(true)
  }

  return (
    <div className="monte-carlo-container">
      <h1 className="title">Monte Carlo Simulation</h1>

      {!showResults ? (
        <>
          <div className="input-group">
            <label>Number of Simulations:</label>
            <input
              type="number"
              value={numSimulations}
              onChange={(e) => setNumSimulations(Number(e.target.value))}
              min="1000"
              max="100000"
            />
          </div>

          <div className="input-group">
            <label>Revenue Range:</label>
            <div className="range-inputs">
              <input
                type="number"
                value={revenueRange.min}
                onChange={(e) =>
                  setRevenueRange({
                    ...revenueRange,
                    min: Number(e.target.value),
                  })
                }
                min="0"
              />
              <span> - </span>
              <input
                type="number"
                value={revenueRange.max}
                onChange={(e) =>
                  setRevenueRange({
                    ...revenueRange,
                    max: Number(e.target.value),
                  })
                }
                min="0"
              />
            </div>
          </div>

          <div className="input-group">
            <label>Expenses Range:</label>
            <div className="range-inputs">
              <input
                type="number"
                value={expensesRange.min}
                onChange={(e) =>
                  setExpensesRange({
                    ...expensesRange,
                    min: Number(e.target.value),
                  })
                }
                min="0"
              />
              <span> - </span>
              <input
                type="number"
                value={expensesRange.max}
                onChange={(e) =>
                  setExpensesRange({
                    ...expensesRange,
                    max: Number(e.target.value),
                  })
                }
                min="0"
              />
            </div>
          </div>

          <div className="input-group">
            <label>Success Probability:</label>
            <input
              type="number"
              step="0.01"
              value={successProbability}
              onChange={(e) => setSuccessProbability(Number(e.target.value))}
              min="0"
              max="1"
            />
          </div>

          <button className="simulation-button" onClick={runSimulation}>
            Run Simulation
          </button>
        </>
      ) : (
        <div className="results-container">
          <p>Number of Simulations: {numSimulations}</p>
          <p>
            Revenue Range: {revenueRange.min} - {revenueRange.max}
          </p>
          <p>
            Expenses Range: {expensesRange.min} - {expensesRange.max}
          </p>
          <p>Success Probability: {successProbability}</p>
          <p
            className={`result-text ${
              averageProfit < 0
                ? 'low'
                : averageProfit === 0
                ? 'medium'
                : 'high'
            }`}
          >
            Average Profit: {averageProfit}
          </p>
          <p
            className={`result-text ${
              positiveOutcomes < 30
                ? 'low'
                : positiveOutcomes <= 50
                ? 'medium'
                : 'high'
            }`}
          >
            Probability of Profit: {positiveOutcomes}%
          </p>
          <button
            className="simulation-button"
            onClick={() => setShowResults(false)}
          >
            Edit Inputs
          </button>
        </div>
      )}
    </div>
  )
}

export default MonteCarlo
