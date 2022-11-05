import { Link } from "react-router-dom";

import Swal from "sweetalert2";

function TaskCard(props) {
	const { task, updateTask } = props;

	function statusClass() {
		if (task.deletedAt !== null) {
			return "bg-danger";
		}
		if (task.doneAt !== null) {
			return "bg-success";
		}
		return;
	}

	async function createAlert(text) {
		const res = await Swal.fire({
			title: "Importante!!!",
			text,
			showCancelButton: true,
			showConfirmButton: true,
		});

		//ok => true
		// cancel => false
		return res.isConfirmed;
	}

	async function confirmUpdate() {
		const isConfirmed = await createAlert(
			"Estas seguro de confirmar que terminaste esta tarea?"
		);

		if (isConfirmed) {
			await updateTask(task.id, "done");
		}
	}

	async function confirmDestroy() {
		const isConfirmed = await createAlert(
			"Esta seguro de hacer esta acción, ya no hay vuelta atrás"
		);

		if (isConfirmed) {
			await updateTask(task.id, "delete");
		}
	}

	return (
		<div
			className={`mt-3 card p-3 mt-3 shadow-sm bg-opacity-10 ${statusClass()}`}
		>
			<div className="d-flex">
				{task.doneAt === null && task.deletedAt === null && (
					<span className="me-3">
						<button
							onClick={confirmUpdate}
							className="btn btn-sm btn-outline-primary py-0 small opacity-50"
						>
							✓
						</button>
					</span>
				)}
				<Link to={"/task/" + task.id}>{task.name}</Link>
			</div>
			<hr className="border border-muted border-1" />
			<div className="d-flex justify-content-between">
				<span className="text-muted small">
					{String(task.timeElapsed(task.createdAt))}
				</span>
				{task.doneAt !== null && (
					<span className="text-success text-bold small">
						✓&nbsp;
						{String(task.timeElapsed(task.doneAt))}
					</span>
				)}
				{task.deletedAt !== null && (
					<span className="text-danger small">
						×&nbsp;
						{String(task.timeElapsed(task.deletedAt))}
					</span>
				)}
				<span>
					{task.doneAt === null && task.deletedAt === null && (
						<button className="btn btn-sm btn-outline-secondary py-0 small opacity-50">
							✎
						</button>
					)}

					{task.deletedAt === null && (
						<button
							onClick={confirmDestroy}
							className="btn btn-sm btn-outline-danger py-0 small opacity-50"
						>
							×
						</button>
					)}
				</span>
			</div>
		</div>
	);
}

export default TaskCard;
