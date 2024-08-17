import { useMemo, useState } from 'react'

function App() {

  const [addresss, setAddresss] = useState(null);

  function WalletAddress() {
    const hexChars = '0123456789abcdef';
    let address = '0x';

    for (let i = 0; i < 40; i++) {
        const randomIndex = Math.floor(Math.random() * hexChars.length);
        address += hexChars[randomIndex];
    }
    setAddresss(address)
  }

  return (
    <>
      <button onClick={WalletAddress} className='border-red-50'>Create a Wallet</button>
      <p>Your wallet address is: {addresss}</p>

      <div className='ml-16 mt-10'>
                 <div className="relative max-w-xl overflow-hidden rounded-2xl shadow-lg group bg-slate-200">
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2 text-red-400">Login</div>
                        <div>
                            <p className="text-cyan-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur consequatur qui dolore quasi facere quos. Architecto a laboriosam officiis ex?</p>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default App
