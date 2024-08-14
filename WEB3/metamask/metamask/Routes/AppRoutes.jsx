import { BrowserRouter, Routes, Route, useNavigate, Link } from "react-router-dom"
import App from '../src/App'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import Header from "../src/components/Header"


export default function AppRoutes(){

    return(
        <>
            <BrowserRouter>
              <Header />  
                <Routes>
                    <Route path='/' element={<App />}/>
                    <Route path='/signup' element={<SignUp />}/>
                    <Route path='/login' element={<Login />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}