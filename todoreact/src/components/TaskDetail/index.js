function TaskDetail(props) {
	const { task } = props;

	return (
		<div className="card p-4 shadow-lg">
			<h1>{task.name}</h1>
			<hr />
			<p>
				<span className="fw-bold">Creación: &nbsp;</span>
				<span className="text-muted">
					{task.getDateTimeString(task.createdAt)}
				</span>
			</p>
			{task.doneAt && (
				<p className="text-success">
					<span className="fw-bold">Realizado: &nbsp;</span>
					<span className="opacity-50">
						{task.getDateTimeString(task.doneAt)}
					</span>
				</p>
			)}
			{task.deletedAt && (
				<p className="text-danger">
					<span className="fw-bold">Eliminado: &nbsp;</span>
					<span className="opacity-50">
						{task.getDateTimeString(task.deletedAt)}
					</span>
				</p>
			)}
		</div>
	);
}

export default TaskDetail;
