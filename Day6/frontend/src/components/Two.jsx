import { useState,useMemo, useEffect } from "react"

function Two(){
    const [oneData, setOneData] = useState({});  // Crypto Investment
    const [twoData, setTwoData] = useState({});  // Crypto gains / withdrawl
    const [bankData, setBankData] = useState({}); // Bank Balance. Main.


    useEffect(()=>{
        setTimeout(()=>{
            setOneData({
                returns: 1000
            })
        })
    },[])

    useEffect(()=>{
        setTimeout(()=>{
            setTwoData({
                returns: 80000
            })
        })
    },[])

    useEffect(()=>{
        setTimeout(()=>{
            setBankData({
                income: 100
            })
        },3000)
    },[])

    const cryptoData = useMemo(()=>{
        let result;
        if(twoData.returns>oneData.returns){
            result = twoData.returns - oneData.returns;
        }else{
            result = 0;
        }
        return result;
    },[oneData,twoData])

    const incomeTax = cryptoData * 0.3;

    return(
        <div>
            <h2>Your Investmemt is: {oneData.returns}</h2>
            <h2>Your returns are: {twoData.returns}</h2>
            <h2>Your total gains is: {cryptoData}</h2>
            <h2>Your Total Income Tax is:  {incomeTax}</h2>
        </div>
    )
}


export default Two;