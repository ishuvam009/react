import { useState } from "react";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTodo = async () => {
    if (!title || !description) {
        <Alert severity="error">Title and Description required.</Alert>
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/user/todo/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Corrected header
        },
        body: JSON.stringify({
          title: title,
          description: description,
        }),
      });

      const json = await response.json();
      if (response.ok) {
        <Alert severity="success">Todo added successfully..</Alert>
      } else {
        alert(`Error: ${json.message}`);
      }
    } catch (error) {
      console.error("Error adding todo:", error);
      alert("Error adding todo. Please try again.");
    }
  };

  return (
    <div>
      <input
        style={{
          margin: 10,
          padding: 10,
        }}
        type="text"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <br />

      <input
        style={{
          margin: 10,
          padding: 10,
        }}
        type="text"
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <br />

      <button
        style={{
          margin: 10,
          padding: 10,
        }}
        onClick={handleAddTodo}
      >
        Add a Todo
      </button>
    </div>
  );
}
