import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { TaskForm, TaskCard } from "../../components";
import { get, post, update } from "../../services";
import { TaskModel } from "../../models/TaskModel";

import { AuthContext } from "../../context/AuthContext";

function Home() {
	const { user } = useContext(AuthContext);
	const [taskList, setTaskList] = useState([]);

	async function getTasks() {
		const tasks = await get();
		const tasksModels = tasks.map((task) => {
			return new TaskModel(
				task.id,
				task.name,
				task.createdAt,
				task.doneAt,
				task.deletedAt,
				task.userId
			);
		});
		const myUserTasks = tasksModels.filter((task) => {
			if (task.userId === user.id) return task;
		});
		setTaskList(myUserTasks);
	}

	async function addTask(text) {
		const newTask = new TaskModel(null, text, null, null, null, user.id);
		await post(newTask);
		await getTasks();
	}

	async function updateTask(id, type) {
		const body =
			type === "done"
				? { doneAt: new Date() }
				: { deletedAt: new Date() };
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
