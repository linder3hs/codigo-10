import { useState, useEffect } from "react";
import { TaskForm, TaskCard } from "./components";

function App() {
  const [taskList, setTaskList] = useState([]);

  async function getTasks() {
    try {
      const url = "https://6363105c66f75177ea3c9310.mockapi.io/tareas";
      const response = await fetch(url);
      const data = await response.json();
      setTaskList(data);
    } catch (error) {
      console.log("Error", error);
    }
  }

  async function addTask(text) {
    const newTask = JSON.stringify({ name: text, status: 1 });
    try {
      const url = "https://6363105c66f75177ea3c9310.mockapi.io/tareas";
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: newTask,
      });
      await getTasks();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getTasks();
    // que provoca el []: Que se ejecute solo una vez
  }, []);

  return (
    <div className="container my-5">
      <h1 className="display-3">Todo App</h1>
      <TaskForm onSubmitFunction={addTask} />
      <div className="text-primary">
        <hr />
      </div>
      <div className="mt-5">
        {taskList.map((task, index) => (
          <TaskCard key={index} task={task} />
        ))}
      </div>
    </div>
  );
}

export default App;
