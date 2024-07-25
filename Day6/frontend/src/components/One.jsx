import { memo, useState } from "react";

const One = memo(()=> {
    const [count, setCount] = useState(0)
    console.log('Helo from One.')
    return(
        <button onClick={()=>{setCount(count+1)} }>Count is {count}</button>
    )
})

export default One