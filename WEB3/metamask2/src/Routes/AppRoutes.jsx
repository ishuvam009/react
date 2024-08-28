import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from "../components/Login"
import App from "../App"
import Header from "../components/Header"

export default function AppRoutes(){
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}