import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  return (
    <div>
      <Todo id={4} />
    </div>
  );
}

function Todo({ id }) {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todo?id=" + id)
      .then(response => {
        setTodo(response.data.todo);
      })
      .catch(error => console.error("The error is:", error));
  }, []); // Include id in the dependency array

  return (
    <div>
      <h1>{todo.title}</h1>
      <h3>{todo.description}</h3>
    </div>
  );
}

export default App;
