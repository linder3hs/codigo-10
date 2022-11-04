import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TaskForm, TaskCard } from "../../components";
import { get, post, update } from "../../services";
import { TaskClass } from "../../models/Task";

function Home() {
	const [taskList, setTaskList] = useState([]);

	async function getTasks() {
		const tasks = await get();
		const tasksObjects = tasks.map((task) => {
			return new TaskClass(
				task.name,
				task.status,
				task.id,
				task.createdAt
			);
		});
		setTaskList(tasksObjects);
	}

	async function addTask(text) {
		const newTask = new TaskClass(text, 1, null, new Date());
		await post(newTask);
		await getTasks();
	}

	async function updateTask(id) {
		const body = { status: 2 };
		await update(id, body);
		await getTasks();
	}

	useEffect(() => {
		getTasks();
		// que provoca el []: Que se ejecute solo una vez
	}, []);

	return (
		<div className="container my-5">
			<h1 className="display-3">Todo App</h1>
			<Link to="/perfil" className="my-3 btn btn-link">
				Ir a perfil
			</Link>
			<TaskForm onSubmitFunction={addTask} />
			<div className="text-primary">
				<hr />
			</div>
			<div className="mt-5">
				{taskList.map((task, index) => (
					<TaskCard
						key={index}
						task={task}
						getTasks={getTasks}
						updateTask={updateTask}
					/>
				))}
			</div>
		</div>
	);
}

export default Home;
