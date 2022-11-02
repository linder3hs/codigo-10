function TaskCard(props) {
	const { task } = props;
	return (
		<div className="mt-3 card p-3 mt-3 shadow-sm">
			<div className="d-flex">
				<span className="me-3">
					<a className="btn btn-sm btn-outline-primary py-0 small opacity-50 checkButton">
						✓
					</a>
				</span>
				<span>{task.text}</span>
			</div>
			<hr className="border border-muted border-1" />
			<div className="d-flex justify-content-between">
				<span className="text-muted small">
					{String(task.datetime)}
				</span>
				<span>
					<a className="btn btn-sm btn-outline-secondary py-0 small opacity-50">
						✎
					</a>
					<a className="btn btn-sm btn-outline-danger py-0 small opacity-50 deleteButton">
						×
					</a>
				</span>
			</div>
		</div>
	);
}

export default TaskCard;
