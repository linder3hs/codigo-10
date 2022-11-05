import { useEffect, useState } from "react";
import { TaskClass } from "../../models/Task";
import { getTask } from "../../services";

function TaskDetail(props) {
	const { task_id } = props;

	const [task, setTask] = useState(new TaskClass());

	async function getTaskDetail(id) {
		const taskDetail = await getTask(id);
		if (taskDetail === null) return;
		setTask(
			new TaskClass(
				taskDetail.name,
				taskDetail.status,
				taskDetail.id,
				taskDetail.createdAt
			)
		);
	}

	useEffect(() => {
		getTaskDetail(task_id);
		// que provoca el []: Que se ejecute solo una vez
	}, []);

	return (
		<div className="card p-4 shadow-lg">
			<div className="card p-3">
				<h2>{task.name}</h2>
			</div>
			<div className="card p-3 mt-3">
				<p>
					Creación: {String(task.createdAt.toLocaleDateString())}{" "}
					{String(task.createdAt.toLocaleTimeString())}
				</p>
			</div>
		</div>
	);
}

export default TaskDetail;
