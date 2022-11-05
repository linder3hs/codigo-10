function TaskDetail(props) {
	const { task } = props;

	return (
		<div className="card p-4 shadow-lg">
			<h1>{task.name}</h1>
		</div>
	);
}

export default TaskDetail;
