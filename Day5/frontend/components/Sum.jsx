import { useState, useEffect } from 'react'

function Sum(){
    const [count, setCount] = useState(0)
    const [value, setValue] = useState("")
    const [result, setResult] = useState("")

    function clickhandler(){
        setCount(count+1)
    }
    
    useEffect(()=>{
        
        function sumUpTo(num) {
            let sum = 0;
            for (let i = 1; i <= num; i++) {
              sum += i;
            }
            return sum;
          }
        const response = sumUpTo(value);
        setResult(response);  

    },[value])

return(
    <>
        <input type="text" value={value} placeholder="Enter a Number" onChange={(e)=> setValue(e.target.value)}/>
        <p>Sum is {result}</p>
        <button onClick={clickhandler}>Count is {count}</button>
    </>
)
}

export default Sum;