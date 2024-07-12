import { useState } from "react";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [alert, setAlert] = useState({ severity: "", message: "", show: false });

  const handleAddTodo = async () => {
    if (!title || !description) {
      setAlert({ severity: "error", message: "Title and Description required.", show: true });
      setTimeout(() => {
        setAlert({ ...alert, show: false });
      }, 5000);
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/user/todo/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
        }),
      });

      const json = await response.json();
      setAlert({ severity: "success", message: "Todo added successfully", show: true });
    } catch (error) {
      setAlert({ severity: "error", message: "Error adding todo.", show: true });
    }
    
  };

  return (
    <div>
      {alert.show && (
        <Stack sx={{ width: '40vw' }} spacing={2}>
          <Alert variant="filled" severity={alert.severity}>{alert.message}</Alert>
        </Stack>
      )}

      <input
        style={{
          margin: 10,
          padding: 10,
        }}
        type="text"
        placeholder="Title"
        value={title}
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
        value={description}
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
