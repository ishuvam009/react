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
  const [titles, setTitles] = useState("The number is "+a)
  

  function ChangeTitle(){
    setA(a+1)
    console.log(a);
    setTitles("The number is "+a)
  }

  return(
    <>
      <button onClick={ChangeTitle}>Click to change title</button>
      <Header title={titles}/>
    </>
  )

}


function Header({title}){
  return <div>
    {title}
  </div>
}  

export default App
