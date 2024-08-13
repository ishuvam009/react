import { useState } from 'react'
import './index.css'
import bodyImage from './assets/body-img.webp'
import Header from './components/Header'
import WalletSvg from './assets/wallet.svg'

function App() {

  return (
    <>
      <Header/>

      <div className='grid grid-cols-2 pt-32'>
        <div>
          <h1 className='font-bold text-5xl p-8'>A crypto wallet & gateway to blockchain apps</h1>
          <span></span>
          <p className='text-2xl p-8'>Start exploring blockchain applications in seconds. Trusted by over 100 million users worldwide.</p>
        </div>
        <div>
          <img className='self-center' src={bodyImage} alt="" />
        </div>
      </div>
      
      <div className='grid grid-cols-2 bg-gray-100'>
        <div>
          <h2 className='font-bold text-5xl p-8'>Your web3 wallet</h2>
          <p className='text-2xl p-8'>Available as a browser extension and as a mobile app, MetaMask equips you with a key vault, secure login, token wallet, and more—everything you need to manage your digital assets.</p>
        </div>
        <div>
          <img src={WalletSvg} alt="" />
        </div>
      </div>

    </>
  )
}

export default App
