import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [id, selectedId] = useState(1)

  return (
    <div>

      <button onClick={function(){
        selectedId(1)
      }}>1</button>

      <button onClick={function(){
        selectedId(2)
      }}>2</button>

      <button onClick={function(){
        selectedId(3)
      }}>3</button>

    <button onClick={function(){
        selectedId(4)
      }}>4</button>

      <Todo id={id}/>
    </div>
  );
}

function Todo({ id }) {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
      .then(response => {
        setTodo(response.data.todo);
      })
      .catch(error => console.error("The error is:", error));
  }, [id]); // Include id in the dependency array

  return (
    <div>
      <h1>{todo.title}</h1>
      <h3>{todo.description}</h3>
    </div>
  );
}

export default App;
