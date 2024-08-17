import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import AppRoutes from '../Routes/AppRoutes.jsx'
import './index.css'
import SignUp from '../pages/SignUp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <AppRoutes /> */}
    <SignUp />
  </StrictMode>,
)
