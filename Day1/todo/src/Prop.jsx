import { useState } from "react";

function Prop(){
    const [todos, setTodos] = useState([
    {
        title: "Goto gym",
        description: "Goto gym between 6-7 AM.",
        completed: true
    },
    {
        title: "Study DSA",
        description: "Study DSA between 9-11 AM.",
        completed: true
    },
    {
        title: "Study Development",
        description: "Study Development between 5-10 PM.",
        completed: true
    }
])

    return(
        <>
        <div>
            {/* <Todo title={todos[0].title} description={todos[0].description}/>
            <Todo title={todos[1].title} description={todos[1].description}/>
            <Todo title={todos[2].title} description={todos[2].description}/> */}
            {/* OR */}
            
            {todos.map(function(prep,index){
                return <Todo key={index} title={prep.title} description={prep.description}/>
            })}

        </div>
        </>
    )
}

function Todo(props){
    return <div>
        <h1>{props.title}</h1>
        <h3>{props.description}</h3>
    </div>
    
}

export default Prop;