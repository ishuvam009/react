import { useState } from 'react'
import './App.css'
import MediaCard from './components/RecipeReviewCard'

function App() {
  const [count, setCount] = useState(0)

  const imageUrls = [
    "https://plus.unsplash.com/premium_photo-1661295611069-249772541426", // Default image
    "https://images.unsplash.com/photo-1692289748036-837e9b86e7ed",
    "https://images.unsplash.com/photo-1711618103039-4ca235fbf8e4",
    "https://images.unsplash.com/photo-1692195010888-8aaf4bd3b9ea",
    "https://images.unsplash.com/photo-1500044744318-d290fb890942",
    "https://images.unsplash.com/photo-1678670544297-f00b865be601",
    "https://images.unsplash.com/photo-1576629679906-08e08bfaed82",
  ];

  return (
    <>
      <div className="card-container"> {/* Apply styles in App.css */}
        {imageUrls.map((url, index) => (
          <MediaCard key={index} imageUrls={url} />
        ))}
      </div>
    </>
  )
}

export default App
