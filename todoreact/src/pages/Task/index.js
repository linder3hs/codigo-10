import { useEffect, useState } from "react";

import { useParams, useNavigate } from "react-router-dom";
import { TaskDetail } from "../../components";
import { TaskModel } from "../../models/TaskModel";
import { getById } from "../../services";

function Task() {
	const { id } = useParams();
	const history = useNavigate();
	const [task, setTask] = useState(new TaskModel());

	async function getDetail() {
		const taskDetail = await getById(id);
		console.log(taskDetail);
		if (taskDetail === null) {
			history("/");
		}

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
			<h1 className="display-3">Todo App / tarea {task.id}</h1>
			<a className="my-3 btn btn-link" onClick={() => history("/")}>
				Regresar
			</a>
			<TaskDetail task={task} />
		</div>
	);
}

export default Task;
