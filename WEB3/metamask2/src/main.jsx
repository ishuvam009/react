import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRoutes from './Routes/AppRoutes.jsx'
import App from './App.jsx'
import Login from './components/Login.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <AppRoutes/>
    {/* <Login /> */}
  </StrictMode>,
)
