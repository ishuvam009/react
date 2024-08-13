import React, { useState } from "react";
import metamaskIcon from '../assets/metamask-icon.png'

export default function Header(){
    const [todo, setTodo] = useState(0)

    function SignUP(){
        
    }

    return(
        <>
            <nav className='fixed h-16 w-full flex bg-white'>
            <img className='ml-6 mr-4 mt-6' src={metamaskIcon} alt="metamask Icon" />
            <p className='object-cover object-center font-bold text-2xl mt-6'>METAMASK</p>
            <button onClick={SignUP} className='bg-blue-500 py-2 px-4 hover:bg-blue-700 text-white font-bold rounded self-center ml-auto mr-6'>Sign Up</button>
      </nav>
        </>
    )
}