import { useState } from "react";
import { TaskForm, TaskCard } from "./components";

function App() {
  const [taskList, setTaskList] = useState([]);

  function addTask(text) {
    const newTask = {
      text: text,
      datetime: new Date(),
    };
    // Paso1: Extrar la informacion de tasklist
    // Paso2: Agregar la nueva tarea
		// Paso3: Actualizar el estado de tasklist
		// Esto se hace para indicarla que estamos agregando un nuevo valor a setTasklist
		// por ende provocamos el render
    setTaskList([...taskList, newTask]);
  }

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
