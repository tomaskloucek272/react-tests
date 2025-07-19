import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello this is fucking critical {count}</h1>

      <button onClick={()=> setCount(prev=>prev+1)}>Increase</button>
      <button onClick={()=> setCount(prev=>prev-1)}>Decrease</button>
    </>
  )
}

export default App
