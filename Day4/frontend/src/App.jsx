import { useState } from 'react'
import Todos from '../components/Todos'
import Cardwrapper from '../components/CardWrapper'

function App() {

  return (
    <>

    {/* //components and props. */}
    {/* <Header title={"Shanu"}/>
    <Header title={"Bhanu"}/>
    <NotReRender />
    <Header title={"AbhiPoo"}/>
    <Header title={"Geetu"}/>
    <Header title={"Pooju"}/> */}

  {/* //React id's */}
    {/* <Todos/> */}

    <Cardwrapper/>  

    </>
  )
}

// function NotReRender(){
//   const [title, setTitle] = useState(0)

//   function handleChange(){
//     setTitle(title+1)
//   }

//   return(
//     <div>
//       <button onClick={handleChange}>Click Me</button>
//       <Header title={`Count is ${title}`} />
//     </div>
//   )
// }

// function Header({title}){
//   return(
//     <div>
//     {title}
//     </div>
//   )
// }

export default App
