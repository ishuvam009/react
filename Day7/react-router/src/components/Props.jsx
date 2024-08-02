import { useState } from "react";

function Props(){
    const [count, setCount] = useState(0)

    return(
        <div>
            <Count count={count}/> <br />
            <Button count={count} setCount={setCount}/>
        </div>
    )
}

function Count({count}){
return (
    <div>
        Current count is: {count}
    </div>
)
}


function Button({count, setCount}){
return(
    <div>
        <button onClick={()=>{ setCount(count+1)}}>Increase</button> 
        <button onClick={()=>{ setCount(count-1)}}>Decrease</button>
    </div>
)
}

export default Props;