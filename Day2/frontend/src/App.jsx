import { useState } from 'react'
import { CreateTodo } from './components/CreateTodos'
import { Todo } from './components/Todo'
import ImgMediaCard  from './components/ImgMediaCard'

function App() {

  return (


    <>
      <div>
        <CreateTodo />
        <Todo />
        {/* <ImgMediaCard /> */}
      </div>
    </>


  )
}

export default App
