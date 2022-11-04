import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { destroy } from "../../services";

function TaskCard(props) {
	const { task, updateTask, getTasks } = props;

	const statusClass = {
		1: "bg-primary",
		2: "bg-success",
		3: "bg-danger",
	};

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
			className={`mt-3 card p-3 mt-3 shadow-sm bg-opacity-10 text-decoration-none ${
				statusClass[task.status]
			}`}
		>
			<div className="d-flex">
				{task.status === 1 && (
					<span className="me-3">
						<button
							onClick={confirmUpdate}
							className="btn btn-sm btn-outline-primary py-0 small opacity-50 checkButton"
						>
							✓
						</button>
					</span>
				)}
				<Link
					to={"/task/" + task.id}
					className={`text-decoration-none`}
				>
					{task.name}
				</Link>
			</div>
			<hr className="border border-muted border-1" />
			{task.status === 1 && (
				<div className="d-flex justify-content-between">
					<span className="text-muted small">
						{String(task.createdAt.toLocaleString())}
					</span>
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
