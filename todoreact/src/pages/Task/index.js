import { useParams, useNavigate, Link } from "react-router-dom";
import { TaskDetail } from "../../components";

function Task() {
	const { id } = useParams();
	const history = useNavigate();

	return (
		<div className="container my-5">
			<h1 className="display-3">Todo App / task: {id}</h1>
			<a onClick={() => history("/")} className="my-3 btn btn-link">
				Regresar
			</a>
			<TaskDetail task_id={id} />
		</div>
	);
}

export default Task;
