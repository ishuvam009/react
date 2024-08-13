import { useState } from 'react'
import './index.css'
import metamaskIcon from './assets/metamask-icon.png'
import bodyImage from './assets/body-img.webp'

function App() {

  return (
    <>
      <nav className='fixed h-16 w-full p-10 flex bg-white'>
        <img src={metamaskIcon} alt="metamask Icon" />
        <p className='object-cover object-center font-bold text-2xl'>METAMASK</p>
      </nav>

      <div className='grid grid-cols-2'>
        <div>
          <h1 className='font-bold text-5xl pt-28 pl-8 pb-6'>A crypto wallet & gateway to blockchain apps</h1>
          <span></span>
          <p className='text-1xl pl-8'>Start exploring blockchain applications in seconds. Trusted by over 100 million users worldwide.</p>
        </div>
        <div>
          <img className='object-cover' src={bodyImage} alt="" />
        </div>
      </div>
      
      <div>
        <img className='object-cover' src={bodyImage} alt="" />
      </div>

    </>
  )
}

export default App
