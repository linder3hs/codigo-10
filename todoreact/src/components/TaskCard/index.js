import Swal from "sweetalert2";
import { destroy } from "../../services";

function TaskCard(props) {
	const { task, updateTask, getTasks } = props;

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
			await updateTask(task.id);
		}
	}

	async function confirmDestroy() {
		const isConfirmed = await createAlert(
			"Esta seguro de hacer esta acción, ya no hay vuelta atrás"
		);

		if (isConfirmed) {
			await destroy(task.id);
			await getTasks();
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
							className="btn btn-sm btn-outline-primary py-0 small opacity-50 checkButton"
						>
							✓
						</button>
					</span>
				)}
				<span>{task.name}</span>
			</div>
			<hr className="border border-muted border-1" />
			{task.deletedAt === null && (
				<div className="d-flex justify-content-between">
					<span className="text-muted small">
						{String(task.createdAt.toLocaleDateString()) +
							" " +
							String(task.createdAt.toLocaleTimeString())}
					</span>
					{task.doneAt !== null && (
						<span className="text-muted small">
							{String(task.doneAt.toLocaleDateString()) +
								" " +
								String(task.doneAt.toLocaleTimeString())}
						</span>
					)}
					<span>
						<button className="btn btn-sm btn-outline-secondary py-0 small opacity-50">
							✎
						</button>
						<button
							onClick={confirmDestroy}
							className="btn btn-sm btn-outline-danger py-0 small opacity-50 deleteButton"
						>
							×
						</button>
					</span>
				</div>
			)}
		</div>
	);
}

export default TaskCard;
