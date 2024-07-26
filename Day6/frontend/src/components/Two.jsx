import { useEffect, useMemo, useState } from "react"

function Two(){
    const [bankBalance, setBankBalance] = useState()
    //const [cryptoBalance, setCryptoBalance] = useState({})

    useEffect(()=>{
        setBankBalance(100)
    },[])

    const gains = 500;
    const totalGains = gains + bankBalance;

    return(
        <>
        <div>
            <h1>Your money is : {totalGains}</h1>
        </div>
        </>
    )
}

export default Two;