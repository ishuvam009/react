import { memo, useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  

  return (
    <>
      <div>
        <ButttonComponent/> <br /> <br />
        <button onClick={()=>{
          setCount(count+1)
        }}>Count is {count}</button>
      </div>
    </>
  )
}

const ButttonComponent = memo (()=>{
  console.log('Click Button Re-render.');
  return <div>
    <button>Click Me</button>
  </div>
})

export default App
