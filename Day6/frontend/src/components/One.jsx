import { useState } from "react";

function One() {
    const [count, setCount] = useState(0)

    return(
        <button onClick={()=>{setCount(count+1)} }>Count is {count}</button>
    )
}

export default One