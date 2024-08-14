import { useState } from 'react'
import './index.css'
import metamaskIcon from './assets/icon.webp'
import bodyImage from './assets/body-img.webp'
import Header from './components/Header'
import WalletSvg from './assets/wallet.svg'
import Explore from './assets/Explore.svg'
import Browse from './assets/Browse.svg'

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
      
      <div className='grid grid-cols-2 bg-gray-100 mt-10'>
        <div>
          <h2 className='font-bold text-5xl p-8'>Your web3 wallet</h2>
          <p className='text-2xl p-8'>Available as a browser extension and as a mobile app, MetaMask equips you with a key vault, secure login, token wallet, and more—everything you need to manage your digital assets.</p>
        </div>
        <div>
          <img src={WalletSvg} alt="metamask" />
        </div>
      </div>

      <div className='grid grid-cols-2 mt-10'>
        <div>
          <img src={Explore} alt="metamask" />
        </div>
        <div>
          <h2 className='font-bold text-5xl p-8'>Explore blockchain apps</h2>
          <p className='text-2xl p-8'>MetaMask provides a simple and secure way to connect to blockchain-based applications. You are always in control when interacting on the new decentralized web.</p>
        </div>
      </div>

      <div className='grid grid-cols-2 bg-gray-100 mt-10'>
        <div>
          <h2 className='font-bold text-5xl p-8'>Own your data</h2>
          <p className='text-2xl p-8'>MetaMask generates passwords and keys on your device, so only you have access to your accounts and data. You always choose what to share and what to keep private.</p>
        </div>
        <div>
          <img src={Browse} alt="" />
        </div>
      </div>

<div>
      <div className='flex h-14 bg-neutral-200'>
        <img className='ml-6' src={metamaskIcon} alt="" />
        <p className='font-bold text-2xl w-full p-2 tracking-widest'>METAMASK</p>
      </div>

      <div className='grid grid-cols-3 p-20 bg-neutral-200'>
          <div>
            <p className='text-col text-orange-400 text-xl'>LEARN MORE</p>
          </div>
            
          <div>
            <p className='text-col text-orange-400 text-xl'>GET INVOLVED</p>
          </div>

          <div>
            <p className='text-col text-orange-400 text-xl'>LEGAL</p>
          </div>

        </div>
</div>  
    </>
  )
}

export default App
