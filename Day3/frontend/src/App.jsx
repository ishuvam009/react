import { useState } from 'react'

function App() {

  return (
    <>
      <Components/>
      <Header title={'My name is Shuvam'}/>
    </>

  )
}

function Components(){
  
  const [a, setA] = useState(0)
  const [title, setTitle] = useState("The number is "+a)

  function ChangeTitle(){
    setTitle("The number is "+a)
    setA(a+1)
  }

  return(
    <>
      <button onClick={ChangeTitle}>Click to change title</button>
      <Header title={title}/>
    </>
  )

}


function Header({title}){
  return <div>
    {title}
  </div>
}  

export default App
