import { useState, useMemo } from 'react'

function Cohort(){
    const [inputValue, setInputValue] = useState(1);

    let count = useMemo(()=>{
        let count = 0;
        for (let i=1;i<=inputValue;i++){
        count = count + i;
        }
    return count;
    },[inputValue]);
    
    return (
        <>
        <div>
        <input type="text" onChange={(e)=>{
                setInputValue(e.target.value);
            }} placeholder='Input a number'/>

            <p>Sum is {count}</p>
        </div>

        <div>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
        </div>
            
        </>
    )
}

export default Cohort