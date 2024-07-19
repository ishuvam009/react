import { useState } from "react"

export default function Todos(){
    const [todos, setTodos] = useState([
        {
            id: 1,
            title: "Go to gym.",
            description: "Go to between 5 pm to 7 pm. ",
        },
        {
            id: 2,
            title: "Study.",
            description: "Study between 8 am to 12 pm. ",
        },
        {
            id: 3,
            title: "Read DSA",
            description: "Read DSA between 9 pm to 12 am. ",
        }
    ])

    function addTodo(){
        setTodos([...todos,{
            id: 4,
            title: "Eat Food",
            description: "Eat Food between 1 pm to 2 pm.",
        }])
    }
return (
    <div>
        <button onClick={addTodo}>Add a Todo</button>
        {todos.map(todo =><Todo title={todo.title} description={todo.description}></Todo>)}
    </div>
)
}

function Todo({title,description}){
    <div>
        <h1>{title}</h1>
        <h3>{description}</h3>
    </div>
}