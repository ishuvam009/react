import { useState, useMemo } from 'react'

function Sum(){
    const [count, setCount] = useState(0)
    const [value, setValue] = useState('')

    
    let counts = useMemo(()=>{
        console.log("Memo got called")
        let sum = 0;
        for (let i = 1; i <= value; i++) {
            sum += i;
         }
        return sum;

    },[value])

return(
    <>
        <input type="text" value={value} placeholder="Enter a Number" onChange={(e)=> setValue(e.target.value)}/>
        <p>Sum is {counts}</p>
        <button onClick={()=>{setCount(count+1)}}>Count is {count}</button>
    </>
)
};

export default Sum;