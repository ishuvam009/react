import Dashboard from "./pages/Dashboard"
import Landing from "./pages/Landing"
import { BrowserRouter, Routes, Route, useNavigate, Link } from "react-router-dom"
import './App.css'

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Appbar/>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}


function Appbar(){

  const navigate= useNavigate();
  return(
    <div style={{display: "flex", justifyContent: 'space-around',width: '100%', height: 40, backgroundColor:'#f5f5dc'}}>

        <button onClick={()=>{
          navigate("/")
        }}>Landing Page</button>
        <button onClick={()=>{
          navigate("/dashboard")
        }}>Dashboard</button>
        <Link to="/"><p>Home</p></Link>
        <p>Career</p>
        <p>About Us</p>
      
    </div>
  )
}

export default App
