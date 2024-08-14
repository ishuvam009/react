import React, { useState } from "react";
import metamaskIcon from '../assets/metamask-icon.png'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Header(){
    const [buttonState, setButtonState] = useState("Join")
    const navigate = useNavigate();
    const location = useLocation();

    const handleButtonClick = ()=>{
        if(buttonState === "Join"){
            setButtonState("SignUp")
        }
        navigate('/login')
    }

    return(
        <>
            <nav className='fixed h-16 w-full flex bg-white'>
            <img className='ml-6 mr-4 mt-6' src={metamaskIcon} alt="metamask Icon" />
            <p className='object-cover object-center font-bold text-2xl mt-6'>METAMASK</p>
            {location.pathname !== '/login' && location.pathname !== '/signup' && (
                <button onClick={handleButtonClick} className='bg-blue-500 py-2 px-4 hover:bg-blue-700 text-white font-bold rounded self-center ml-auto mr-6'>{buttonState}</button>
            )}
      </nav>
        </>
    )
}