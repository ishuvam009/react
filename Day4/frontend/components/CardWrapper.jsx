import { useState } from "react"

function Cardwrapper(){
    return <div>
            <CardComponent innerComponent={<TextComponent/>}/>
        </div>
}

function TextComponent(){
    return <div>
            <h1>Hi There</h1>
            <h3>Hello There</h3>
        </div>    

}

function CardComponent({innerComponent}){
    return <div style={{border: "2px solid black", width: 150}}>
                    {innerComponent}
            </div>
}

export default Cardwrapper