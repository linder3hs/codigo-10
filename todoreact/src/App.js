import { useState } from "react";
import { TaskForm, TaskCard } from "./components";

function App() {
	const [taskList, setTaskList] = useState([]);

	function addTask(text) {
		const newTask = {
			text: text,
			datetime: new Date(),
		};
		const listaTemporal = taskList;
		listaTemporal.push(newTask);
		setTaskList(listaTemporal);
		console.log(taskList);
	}

	return (
		<div className="container my-5">
			<h1 className="display-3">Todo App</h1>
			<TaskForm onSubmitFunction={addTask} />
			<div className="text-primary">
				<hr />
			</div>
			<div className="mt-5">
				{taskList.map((task) => (
					<div>hola</div>
				))}
			</div>
		</div>
	);
}

export default App;
