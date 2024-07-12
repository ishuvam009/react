export function Todos({ todos = [] }) {
    return (
      <div>
        {Array.isArray(todos) && todos.map((todo) => (
          <div key={todo.id}> {/* Assuming each todo has a unique 'id' */}
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button>{todo.complete === true ? "Completed" : "Mark as done."}</button>
          </div>
        ))}
      </div>
    );
  }