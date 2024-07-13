import { useState } from 'react'
import './App.css'
import MediaCard from './components/RecipeReviewCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{display: 'flex', justifyContent: "space-around", padding: 10}}>
        <MediaCard/>
        <MediaCard/>
        <MediaCard/>
      </div>
    </>
  )
}

export default App
