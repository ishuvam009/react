import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(1)

  return (
    <>
    <Header title={"Shuvam"}/> <br />
    <Header title={"Shuvam Mandal"}/>
    </>
  )
}

function Header({title}){
return(
  <>
    {title}
  </>
)
}

export default App
