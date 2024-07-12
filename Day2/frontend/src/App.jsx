import { useState, useEffect } from 'react'
import { CreateTodo } from './components/CreateTodos'
import { Todos } from './components/Todos'
import ImgMediaCard  from './components/ImgMediaCard'

function App() {
  const [todos, setTodos] = useState([]);

    useEffect(() => {
      fetch("http://localhost:3000/user/todos/")
      .then(async (res) => {
        const json = await res.json();
        setTodos(json.findTodo);
      })
      .catch((error) => {
        console.error('Error fetching todos:', error);
      });
  }, []);
  

  return (


    <>
      <div>
        <CreateTodo />
        <Todos todos={todos}></Todos>
        {/* <ImgMediaCard /> */}
      </div>
    </>


  )
}

export default App
