import { Dashboard } from "./pages/Dashboard"
import { Landing } from "./pages/Landing"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'

function App() {
  
  return (
    <>
    <div style={{display: "flex", justifyContent: 'space-around',width: '100%', height: 40, backgroundColor:'#f5f5dc'}}>

        <button onClick={()=>{
          window.location.href="/"
        }}>Landing Page</button>
        <button onClick={()=>{
          window.location.href="/dashboard"
        }}>Dashboard</button>
        <p>Home</p>
        <p>Career</p>
        <p>About Us</p>
      
      <p></p>
    </div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
