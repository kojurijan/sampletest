import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <h1>Yo Yo test sroty</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count} okay
        </button>

      </div>

    </>
  )
}

export default App