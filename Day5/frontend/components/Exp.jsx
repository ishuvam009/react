import { useState, useMemo } from 'react'

function Exp(){

    const [value, setValue] = useState(0)

    let count = useMemo(()=>{
        let sum = 0;
        for (let i = 1; i <= value; i++) {
            sum += i;
         }
   return sum;
    },[value])

    return <>
        <br />
        <br />
            <input type="text"  onChange={(e)=>{setValue(e.target.value)}}/>
            <p>Value is {count}</p>

            <button>Click Me</button>
            <p>Test 1</p>
            <p>Test 2</p>
            <p>Test 3</p>
    </>
}

export default Exp