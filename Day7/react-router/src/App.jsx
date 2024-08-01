// import Dashboard from "./pages/Dashboard"
// import Landing from "./pages/Landing"
import { BrowserRouter, Routes, Route, useNavigate, Link } from "react-router-dom"
import './App.css'
import { lazy, Suspense } from "react"

const Landing = lazy(()=>import('./pages/Landing'))
const Dashboard = lazy(()=> import('./pages/Dashboard'))

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Appbar/>
        <Routes>
          <Route path="/" element={<Suspense fallback={"loading..."}>  <Landing /> </Suspense>} />
          <Route path="/dashboard" element={<Suspense fallback={"loading..."}>  <Dashboard /> </Suspense>} />
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
