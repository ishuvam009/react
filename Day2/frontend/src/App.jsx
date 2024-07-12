import { useState } from 'react'
import { CreateTodo } from './components/CreateTodos'
import { Todo } from './components/Todo'
import ImgMediaCard  from './components/ImgMediaCard'

function App() {
  const [todos, setTodos] = useState([]);

  fetch("http://localhost:3000/user/todos/")
  .then (async (res)=>{
    const json = await res.json();
      setTodos(json.todos);
    })
  

  return (


    <>
      <div>
        <CreateTodo />
        <Todo todos={todos}></Todo>
        {/* <ImgMediaCard /> */}
      </div>
    </>


  )
}

export default App
