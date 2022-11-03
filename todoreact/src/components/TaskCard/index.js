import Swal from "sweetalert2";

function TaskCard(props) {
  const { task, updateTask } = props;

  const statusClass = {
    1: "bg-primary",
    2: "bg-success",
    3: "bg-danger",
  };

  async function confirmUpdate() {
    const res = await Swal.fire({
      title: "Importante",
      text: "Estas seguro de confirmar que terminaste esta tarea?",
      showCancelButton: true,
      showConfirmButton: true,
    });

    if (res.isConfirmed) {
      updateTask(task.id);
    }
  }

  return (
    <div
      className={`mt-3 card p-3 mt-3 shadow-sm bg-opacity-10 ${
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
        <span>{task.name}</span>
      </div>
      <hr className="border border-muted border-1" />
      {task.status === 1 && (
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
      )}
    </div>
  );
}

export default TaskCard;
