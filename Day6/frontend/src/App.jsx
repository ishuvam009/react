import { memo, useCallback, useState } from 'react'
import One from './components/One'

function App() {
  const [count, setCount] = useState(0)

  const myFunction = useCallback(()=>{
    console.log('Hi there.')
  },[])

  return (
    <>
      <div>
        <ButttonComponent inFunction={myFunction}/> <br /> <br />
        <button onClick={()=>{
          setCount(count+1)
        }}>Count is {count}</button>
      </div>

      <div>
      <br /> <br />
      <One/>
      </div>
      
    </>
  )
}

const ButttonComponent = memo ((myFunction)=>{
  console.log('Click Button Re-render.');
  return <div>
    <button>Click Me</button>
  </div>
})

export default App
