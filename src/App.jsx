import { useState } from 'react'
function App() {
  const [count, setCount] = useState(0)
  const [countResult, setCountResultFn] = useState(0);
  let i = 0
  const increment = () => {
    if (count < 39) {
      setCount((prev) => prev + 1)
    }
    if (count === 39) {
      setCount(0)
      setCountResultFn(countResult + 1)
    }
  }
  const decrement = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };
  return (
    <>
    <button className='btn btn-danger' onClick={increment}>Increment</button>
    <button className='btn btn-warning' onClick={decrement}>Decrement</button>
    <h1>{count}</h1>
    <h2>{countResult }</h2>
    </>
  )
}

export default App
