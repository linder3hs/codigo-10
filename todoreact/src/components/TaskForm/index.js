import { useState } from "react";

function TaskForm() {
	const [inputTask, setInputTask] = useState("");

	function taskInput(event) {
		setInputTask(event.target.value); // Todos van a reaccionar
	}

	function addButton() {
		console.log(inputTask);
	}

	return (
		<div className="card p-3 shadow">
			<div className="input-group">
				<input
					id="input_task"
					type="text"
					className="form-control"
					placeholder="My new task..."
					onChange={taskInput}
				/>
				<button
					className="btn btn-outline-primary"
					type="button"
					id="button-addon2"
					onClick={addButton}
				>
					Add
				</button>
			</div>
		</div>
	);
}

export default TaskForm;
