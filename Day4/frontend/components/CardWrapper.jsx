import { useState } from "react"

function Cardwrapper(){
    return (
        <div style={{display: "flex"}}>
            <CardComponent>
                <div style={{margin: 10}}>
                    <h1>Hello</h1>
                    <h2>Hi how are you.</h2>
                    <h3>Time 10 pm to 12am</h3>
                </div>
            </CardComponent>

            <CardComponent>
                <div>
                    <img style={{width: 180, padding: 10}} src="https://media.defense.gov/2021/Sep/24/2002860968/1200/1200/0/210919-F-AF248-9084.JPG" alt="f35" />
                </div>
            </CardComponent>

            <CardComponent>
                <div>
                    <img style={{width: 180, padding: 10}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/SU-30MKI-g4sp_-_edit_2%28clipped%29.jpg/450px-SU-30MKI-g4sp_-_edit_2%28clipped%29.jpg" alt="suk 30 mki" />
                </div>
            </CardComponent>

        </div>
    )
}


function CardComponent({children}){
    return (
        <div style={{border: "2px solid black", width: 200, margin: 8}}>
                    {children}
            </div>
    )
}

export default Cardwrapper