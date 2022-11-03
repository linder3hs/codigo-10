function TaskCard(props) {
  const { task } = props;
  return (
    <div className="mt-3 card p-3 mt-3 shadow-sm">
      <div className="d-flex">
        <span className="me-3">
          <button className="btn btn-sm btn-outline-primary py-0 small opacity-50 checkButton">
            ✓
          </button>
        </span>
        <span>{task.name}</span>
      </div>
      <hr className="border border-muted border-1" />
      <div className="d-flex justify-content-between">
        <span className="text-muted small">{String(task.createdAt)}</span>
        <span>
          <button className="btn btn-sm btn-outline-secondary py-0 small opacity-50">
            ✎
          </button>
          <button className="btn btn-sm btn-outline-danger py-0 small opacity-50 deleteButton">
            ×
          </button>
        </span>
      </div>
    </div>
  );
}

export default TaskCard;
