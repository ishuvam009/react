import { useState } from "react"

function Cardwrapper(){
    return (
        <div>
            <CardComponent>
                <div style={{margin: 10}}>
                    <h1>Hello</h1>
                    <h2>Hi how are you.</h2>
                    <h3>Time 10 pm to 12am</h3>
                </div>
            </CardComponent>
        </div>
    )
}


function CardComponent({children}){
    return (
        <div style={{border: "2px solid black", width: 200}}>
                    {children}
            </div>
    )
}

export default Cardwrapper