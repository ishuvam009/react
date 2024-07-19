import { useState } from 'react'

function App() {

  return (
    <>
    <Header title={"Shanu"}/>
    <Header title={"Bhanu"}/>
    <NotReRender />
    <Header title={"AbhiPoo"}/>
    <Header title={"Geetu"}/>
    <Header title={"Pooju"}/>
    </>
  )
}

function NotReRender(){
  const [title, setTitle] = useState(0)

  function handleChange(){
    setTitle(title+1)
  }

  return(
    <div>
      <button onClick={handleChange}>Click Me</button>
      <Header title={`Count is ${title}`} />
    </div>
  )
}

function Header({title}){
  return(
    <div>
    {title}
    </div>
  )
}

export default App
