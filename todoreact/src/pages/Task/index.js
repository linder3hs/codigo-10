import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { TaskModel } from "../../models/TaskModel";
import { getById } from "../../services";

function Task() {
	const { id } = useParams();
	const [task, setTask] = useState({});

	async function getDetail() {
		const taskDetail = await getById(id);
		if (taskDetail === null) return;

		setTask(
			new TaskModel(
				taskDetail.id,
				taskDetail.name,
				taskDetail.createdAt,
				taskDetail.doneAt,
				taskDetail.deletedAt
			)
		);
	}

	useEffect(() => {
		// Bloque a ejecutar:
		getDetail();
		console.log("useEffect");
	}, []);

	return (
		<div className="container my-5">
			<h1 className="display-3">Todo App / tarea: {task.name}</h1>
		</div>
	);
}

export default Task;
