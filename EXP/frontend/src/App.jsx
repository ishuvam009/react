import { useState } from 'react'
import './App.css'
import MediaCard from './components/RecipeReviewCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card-container"> {/* Apply styles in App.css */}
        {[1, 2, 3, 4, 5, 6].map((item) => ( 
          <MediaCard key={item} />
        ))}
      </div>
    </>
  )
}

export default App
